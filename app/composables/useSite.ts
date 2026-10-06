import { messages, type Lang } from '~/i18n/messages'

export const useSettings = () =>
  useFetch<Record<string, string>>('/api/settings', { key: 'settings', default: () => ({}) })

export const useLang = () => {
  const route = useRoute()
  const lang = computed<Lang>(() => (route.path === '/en' || route.path.startsWith('/en/') ? 'en' : 'fr'))
  const m = computed(() => messages[lang.value])
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
  return useFetch<{ services: any[]; offers: any[]; vehicles: any[]; testimonials: any[]; faqs: any[] }>('/api/content', {
    key: `content-${lang.value}`,
    query: { lang: lang.value },
    default: () => ({ services: [], offers: [], vehicles: [], testimonials: [], faqs: [] })
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
