<script setup lang="ts">
const { data: settings } = await useSettings()
await useTexts()
const { m, lp, lang } = useLang()
</script>

<template>
  <div class="ts">
    <SiteHeader />
    <CustomCursor />
    <main><slot /></main>

    <footer class="ts-footer">
      <div class="ts-wrap">
        <div class="top">
          <div>
            <div class="ts-brand"><img src="/img/logo-light.png" alt="TS EXCLUSIVE" width="256" height="48"></div>
            <p class="ts-label" style="margin-top:18px">{{ m.footer.tagline }}</p>
            <p class="ts-label">{{ m.footer.place }}</p>
          </div>
          <div>
            <h4>{{ m.footer.navigate }}</h4>
            <ul>
              <li><NuxtLink :to="lp('/services')">{{ m.footer.services }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/flotte')">{{ m.footer.fleet }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/destinations')">{{ m.footer.destinations }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/tarifs')">{{ m.footer.pricing }}</NuxtLink></li>
              <li><NuxtLink :to="lp('/contact')">{{ m.footer.contactLink }}</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4>{{ m.footer.contact }}</h4>
            <ul>
              <li><a :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a :href="`mailto:${settings.email}`">{{ settings.email }}</a></li>
              <li>{{ settings.phone }}</li>
              <li v-if="settings.instagram"><a :href="settings.instagram" target="_blank" rel="noopener">Instagram</a></li>
              <li v-if="settings.linkedin"><a :href="settings.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
              <li v-if="settings.facebook"><a :href="settings.facebook" target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div class="bottom">
          <span>© {{ new Date().getFullYear() }} TS EXCLUSIVE. {{ m.footer.rights }}</span>
          <a href="/admin">{{ m.footer.admin }}</a>
        </div>
      </div>
    </footer>

    <a class="ts-wa" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener" aria-label="WhatsApp"><Icon name="whatsapp" :size="22" /></a>
  </div>
</template>
