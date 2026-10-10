<script setup lang="ts">
const { data: settings } = await useSettings()
await useTexts()
const { m, lp, lang } = useLang()
const socials = computed(() => [
  { k: 'instagram', label: 'Instagram', href: settings.value.instagram },
  { k: 'facebook', label: 'Facebook', href: settings.value.facebook },
  { k: 'linkedin', label: 'LinkedIn', href: settings.value.linkedin }
].filter(s => s.href))
const toTop = () => {
  const lenis = (window as any).__lenis
  if (lenis) lenis.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="ts">
    <div class="ts-curtain" aria-hidden="true"><img src="/img/logo-light.svg" alt="" width="280" height="64"><i /></div>
    <div class="ts-wipe" aria-hidden="true"><img src="/img/logo-light.svg" alt="" width="200" height="46"></div>
    <SiteHeader />
    <CustomCursor />
    <main><slot /></main>

    <footer class="ts-footer">
      <div class="ts-wrap">
        <div class="top">
          <div class="soc">
            <a :href="waLink(settings.whatsapp)" target="_blank" rel="noopener" aria-label="WhatsApp"><Icon name="whatsapp" :size="18" /></a>
            <a :href="`mailto:${settings.email}`" aria-label="Email"><Icon name="mail" :size="18" /></a>
            <a v-for="s in socials" :key="s.k" :href="s.href" target="_blank" rel="noopener" :aria-label="s.label" class="txt">{{ s.label }}</a>
          </div>
          <div class="col">
            <h4>{{ m.footer.navigate }}</h4>
            <ul>
              <li><NuxtLink :to="lp('/services')">{{ m.footer.services }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/flotte')">{{ m.footer.fleet }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/destinations')">{{ m.footer.destinations }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/tarifs')">{{ m.footer.pricing }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/contact')">{{ m.footer.contactLink }}</NuxtLink></li>
            </ul>
          </div>
          <div class="col">
            <h4>{{ m.footer.contact }}</h4>
            <ul>
              <li><a :href="`tel:${String(settings.phone || '').replace(/[^+\d]/g, '')}`">{{ settings.phone }}</a></li>
              <li><a :href="`mailto:${settings.email}`">{{ settings.email }}</a></li>
              <li>{{ settings.address }}</li>
            </ul>
          </div>
          <div class="mark">
            <img src="/img/logo.svg" alt="TS EXCLUSIVE Executive & Private Mobility" width="230" height="53">
            <p class="ts-thanks">{{ m.home.thanks }}</p>
          </div>
        </div>
        <div class="bottom">
          <span>© {{ new Date().getFullYear() }} TS EXCLUSIVE · {{ m.footer.place }}. {{ m.footer.rights }}</span>
          <span class="right">
            <a href="/admin">{{ m.footer.admin }}</a>
            <button type="button" class="totop" :aria-label="lang === 'fr' ? 'Haut de page' : 'Back to top'" @click="toTop"><i /></button>
          </span>
        </div>
      </div>
    </footer>

    <div class="ts-mbar">
      <NuxtLink :to="lp('/contact')" class="ts-btn solid">{{ m.nav.quote }}</NuxtLink>
      <a class="ts-btn" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp</a>
    </div>

    <a class="ts-wa" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener" aria-label="WhatsApp"><Icon name="whatsapp" :size="22" /></a>
  </div>
</template>
