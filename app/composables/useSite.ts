import { messages, type Lang } from '~/i18n/messages'

export const useSettings = () =>
  useFetch<Record<string, string>>('/api/settings', { key: 'settings', default: () => ({}) })

// Textes modifiés depuis l'admin (voir /admin/textes). Chargés une fois dans le layout.
export const useTexts = () =>
  useFetch<Record<string, { fr: string; en: string }>>('/api/texts', { key: 'texts', default: () => ({}) })

function setPath(obj: any, path: string, value: string) {
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur?.[parts[i]]
    if (cur == null) return
  }
  const last = parts[parts.length - 1]
  if (cur != null && last in cur) cur[last] = value
}

export const useLang = () => {
  const route = useRoute()
  const { data: texts } = useNuxtData<Record<string, { fr: string; en: string }>>('texts')
  const lang = computed<Lang>(() => (route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'fr'))
  // Messages par défaut + surcharges saisies dans l'admin
  const m = computed(() => {
    const base = messages[lang.value]
    const over = texts.value || {}
    const keys = Object.keys(over)
    if (!keys.length) return base
    const copy = JSON.parse(JSON.stringify(base))
    for (const k of keys) {
      const v = over[k]?.[lang.value]
      if (v) setPath(copy, k, v)
    }
    return copy as typeof base
  })
  // chemin localisé : /services -> /en/services
  const lp = (p: string) => (lang.value === 'en' ? '/en' + (p === '/' ? '' : p) : p)
  // même page dans l'autre langue
  const otherPath = computed(() => {
    const p = route.path
    if (lang.value === 'en') return p === '/en' ? '/' : p.replace(/^\/en/, '')
    return '/en' + (p === '/' ? '' : p)
  })
  return { lang, m, lp, otherPath }
}

export const useContent = () => {
  const { lang } = useLang()
  return useFetch<{ services: any[]; offers: any[]; vehicles: any[]; testimonials: any[]; faqs: any[]; destinations: any[]; partners: any[] }>('/api/content', {
    key: `content-${lang.value}`,
    query: { lang: lang.value },
    default: () => ({ services: [], offers: [], vehicles: [], testimonials: [], faqs: [], destinations: [], partners: [] })
  })
}

export const waLink = (number?: string, text = 'Bonjour TS EXCLUSIVE, je souhaite un devis.') =>
  `https://wa.me/${(number || '').replace(/\D/g, '')}?text=${encodeURIComponent(text)}`

// SEO : titre, description, balises sociales, canonical et hreflang
export const usePageSeo = (title: string, description?: string, image = '/img/baobabs.jpg') => {
  const { lang, otherPath } = useLang()
  const route = useRoute()
  const site = (useRuntimeConfig().public.siteUrl as string || '').replace(/\/$/, '')
  const desc = description || messages[lang.value].home.seoDesc
  const frPath = lang.value === 'en' ? otherPath.value : route.path
  const enPath = lang.value === 'en' ? route.path : otherPath.value
  useSeoMeta({
    title, description: desc, ogTitle: title, ogDescription: desc, ogType: 'website',
    ogImage: site + image, ogLocale: lang.value === 'en' ? 'en_US' : 'fr_FR', twitterCard: 'summary_large_image'
  })
  useHead({
    htmlAttrs: { lang: lang.value },
    link: [
      { rel: 'canonical', href: site + route.path },
      { rel: 'alternate', hreflang: 'fr', href: site + frPath },
      { rel: 'alternate', hreflang: 'en', href: site + enPath },
      { rel: 'alternate', hreflang: 'x-default', href: site + frPath }
    ]
  })
}
