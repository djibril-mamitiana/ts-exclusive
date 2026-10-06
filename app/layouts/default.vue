<script setup lang="ts">
const { data: settings } = await useSettings()
const { lang, m, lp, otherPath } = useLang()
const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))

const links = computed(() => [
  { to: '/', label: m.value.nav.home },
  { to: '/services', label: m.value.nav.services },
  { to: '/flotte', label: m.value.nav.fleet },
  { to: '/corporate', label: m.value.nav.corporate },
  { to: '/hospitality', label: m.value.nav.hospitality },
  { to: '/evenements', label: m.value.nav.events },
  { to: '/a-propos', label: m.value.nav.about },
  { to: '/contact', label: m.value.nav.contact }
])
</script>

<template>
  <header class="site-header">
    <div class="container nav">
      <NuxtLink :to="lp('/')" class="logo" aria-label="TS EXCLUSIVE">
        <b>T<span>S</span> EXCLUSIVE</b>
        <small>{{ m.brandTag }}</small>
      </NuxtLink>
      <nav class="nav-links" :class="{ open }">
        <NuxtLink v-for="l in links" :key="l.to" :to="lp(l.to)">{{ l.label }}</NuxtLink>
      </nav>
      <div class="nav-cta">
        <NuxtLink :to="otherPath" class="lang" :aria-label="lang === 'fr' ? 'English' : 'Français'">{{ lang === 'fr' ? 'EN' : 'FR' }}</NuxtLink>
        <a class="btn ghost sm" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener"><Icon name="whatsapp" :size="16" /> WhatsApp</a>
        <NuxtLink :to="lp('/contact')" class="btn sm">{{ m.nav.quote }} <Icon name="arrow" :size="16" /></NuxtLink>
        <button class="burger" :aria-label="m.nav.menu" @click="open = !open">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
    </div>
  </header>

  <main><slot /></main>

  <footer class="footer">
    <div class="container">
      <div class="cols">
        <div>
          <div class="logo"><b>T<span>S</span> EXCLUSIVE</b><small>{{ m.brandTag }}</small></div>
          <p style="margin-top:18px;max-width:30ch">{{ m.footer.blurb }}</p>
        </div>
        <div>
          <h4>{{ m.footer.services }}</h4>
          <ul>
            <li><NuxtLink :to="lp('/services/executive-mobility')">{{ m.footer.execMobility }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/services/transferts-aeroport')">{{ m.footer.airport }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/corporate')">{{ m.footer.corporateMobility }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/evenements')">{{ m.footer.eventsProtocol }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/services/mise-a-disposition')">{{ m.footer.disposal }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4>{{ m.footer.partners }}</h4>
          <ul>
            <li><NuxtLink :to="lp('/hospitality')">{{ m.footer.hotels }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/hospitality')">{{ m.footer.agencies }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/corporate')">{{ m.footer.corporates }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/evenements')">{{ m.footer.events }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/flotte')">{{ m.footer.fleet }}</NuxtLink></li>
            <li><NuxtLink :to="lp('/tarifs')">{{ m.footer.pricing }}</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4>{{ m.footer.contact }}</h4>
          <ul>
            <li>{{ settings.phone }}</li>
            <li><a :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a :href="`mailto:${settings.email}`">{{ settings.email }}</a></li>
            <li>{{ settings.address }}</li>
            <li v-if="settings.linkedin || settings.instagram || settings.facebook">
              <a v-if="settings.linkedin" :href="settings.linkedin" target="_blank" rel="noopener">LinkedIn</a>
              <a v-if="settings.instagram" :href="settings.instagram" target="_blank" rel="noopener"> · Instagram</a>
              <a v-if="settings.facebook" :href="settings.facebook" target="_blank" rel="noopener"> · Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <span>© {{ new Date().getFullYear() }} TS EXCLUSIVE. {{ m.footer.rights }}</span>
        <NuxtLink to="/admin">{{ m.footer.admin }}</NuxtLink>
      </div>
    </div>
  </footer>

  <a class="wa-float" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener" aria-label="WhatsApp"><Icon name="whatsapp" :size="28" /></a>
</template>
