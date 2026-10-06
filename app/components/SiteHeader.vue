<script setup lang="ts">
import { destinations, photos, serviceImages, sized } from '~/utils/images'

const { lang, m, lp, otherPath } = useLang()
const { data: content } = await useContent()
const { data: settings } = await useSettings()
const route = useRoute()

const scrolled = ref(false)
const open = ref(false)
const hover = ref('')

onMounted(() => {
  const on = () => (scrolled.value = window.scrollY > 40)
  on()
  window.addEventListener('scroll', on, { passive: true })
  const esc = (e: KeyboardEvent) => e.key === 'Escape' && (open.value = false)
  window.addEventListener('keydown', esc)
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', on)
    window.removeEventListener('keydown', esc)
  })
})
watch(open, (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
})
watch(() => route.fullPath, () => { open.value = false })

const imgOf = (key: string) => {
  if (key.startsWith('s:')) return serviceImages[key.slice(2)] || photos.night
  if (key.startsWith('d:')) return destinations.find(d => d.slug === key.slice(2))?.image || photos.baobabsRoad
  return ({ fleet: photos.hero, exp: photos.airport, corp: photos.hotel, events: photos.events, about: photos.chauffeur, price: photos.night } as any)[key] || photos.hero
}
const previewKeys = computed(() => [
  ...content.value.services.map(s => 's:' + s.slug),
  ...destinations.map(d => 'd:' + d.slug),
  'fleet', 'exp', 'corp', 'events', 'about', 'price'
])

const experiences = computed(() => {
  const t = m.value.menu.experienceItems
  return [
    { label: t[0], to: '/#experience', key: 'exp' }, { label: t[1], to: '/corporate', key: 'corp' }, { label: t[2], to: '/hospitality', key: 'corp' },
    { label: t[3], to: '/evenements', key: 'events' }, { label: t[4], to: '/a-propos', key: 'about' }, { label: t[5], to: '/tarifs', key: 'price' }
  ]
})
const fleetItems = computed(() => m.value.menu.fleetItems.map(label => ({ label, to: '/flotte', key: 'fleet' })))
</script>

<template>
  <header class="ts-header" :class="{ scrolled }">
    <div class="ts-wrap row">
      <NuxtLink :to="lp('/')" class="ts-brand" aria-label="TS EXCLUSIVE"><img src="/img/logo-light.png" alt="TS EXCLUSIVE Executive & Private Mobility" width="256" height="48"></NuxtLink>
      <nav class="ts-nav" aria-label="Principal">
        <NuxtLink :to="lp('/services')">{{ m.nav.services }}</NuxtLink>
        <NuxtLink :to="lp('/flotte')">{{ m.nav.fleet }}</NuxtLink>
        <NuxtLink :to="lp('/#experience')" active-class="" exact-active-class="">{{ m.nav.experiences }}</NuxtLink>
        <NuxtLink :to="lp('/destinations')">{{ m.nav.destinations }}</NuxtLink>
      </nav>
      <div class="ts-tools">
        <NuxtLink :to="otherPath" class="ts-link" :aria-label="lang === 'fr' ? 'English' : 'Français'">{{ lang === 'fr' ? 'EN' : 'FR' }}</NuxtLink>
        <NuxtLink :to="lp('/contact')" class="ts-btn sm hide-m">{{ m.nav.contact }}</NuxtLink>
        <button class="ts-btn sm" type="button" :aria-expanded="open" @click="open = true">{{ m.nav.menu }}</button>
      </div>
    </div>
  </header>

  <div class="ts-menu" :class="{ open }" :aria-hidden="!open" role="dialog" aria-label="Menu">
    <div class="top">
      <NuxtLink :to="lp('/')" class="ts-brand"><img src="/img/logo-light.png" alt="TS EXCLUSIVE" width="256" height="48"></NuxtLink>
      <button class="ts-btn sm" type="button" @click="open = false">{{ m.nav.close }}</button>
    </div>
    <div class="body">
      <div class="cols" @mouseleave="hover = ''">
        <div class="group">
          <h4 class="reveal-i" :style="{ '--i': 0 }">{{ m.menu.services }}</h4>
          <NuxtLink v-for="(s, n) in content.services" :key="s.id" class="reveal-i" :style="{ '--i': n + 1 }" :to="lp('/services/' + s.slug)" @mouseenter="hover = 's:' + s.slug">{{ s.title }}</NuxtLink>
        </div>
        <div class="group">
          <h4 class="reveal-i" :style="{ '--i': 2 }">{{ m.menu.fleet }}</h4>
          <NuxtLink v-for="(f, n) in fleetItems" :key="f.label" class="reveal-i" :style="{ '--i': n + 3 }" :to="lp(f.to)" @mouseenter="hover = f.key">{{ f.label }}</NuxtLink>
        </div>
        <div class="group">
          <h4 class="reveal-i" :style="{ '--i': 4 }">{{ m.menu.experiences }}</h4>
          <NuxtLink v-for="(e, n) in experiences" :key="e.label" class="reveal-i" :style="{ '--i': n + 5 }" :to="lp(e.to)" @mouseenter="hover = e.key">{{ e.label }}</NuxtLink>
        </div>
        <div class="group">
          <h4 class="reveal-i" :style="{ '--i': 6 }">{{ m.menu.destinations }}</h4>
          <NuxtLink v-for="(d, n) in destinations" :key="d.slug" class="reveal-i" :style="{ '--i': n + 7 }" :to="lp('/destinations#' + d.slug)" @mouseenter="hover = 'd:' + d.slug">{{ d.name }}</NuxtLink>
        </div>
      </div>
      <div class="preview" aria-hidden="true">
        <img v-for="k in previewKeys" :key="k" :src="sized(imgOf(k), 900)" :class="{ on: (hover || 'fleet') === k }" alt="" loading="lazy">
      </div>
    </div>
    <div class="foot">
      <a :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp</a>
      <a :href="`mailto:${settings.email}`">{{ settings.email }}</a>
      <span>{{ settings.phone }}</span>
      <NuxtLink :to="otherPath">{{ lang === 'fr' ? 'English' : 'Français' }}</NuxtLink>
    </div>
  </div>
</template>
