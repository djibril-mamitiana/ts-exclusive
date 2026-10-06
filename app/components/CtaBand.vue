<script setup lang="ts">
defineProps<{ title: string; button?: string; to?: string }>()
const { data: settings } = await useSettings()
const { m, lp } = useLang()
</script>

<template>
  <section class="cta-band">
    <div class="container inner">
      <h2>{{ title }}</h2>
      <div class="hero-actions" style="margin:0">
        <NuxtLink :to="lp(to || '/contact')" class="btn light">{{ button || m.common.quote }} <Icon name="arrow" :size="16" /></NuxtLink>
        <a class="btn outline-light" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener"><Icon name="whatsapp" :size="18" /> WhatsApp</a>
      </div>
    </div>
  </section>
</template>
