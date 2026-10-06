<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const p = computed(() => m.value.fleet)
usePageSeo(p.value.seoTitle, p.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="p.label" :title="p.title" :sub="p.sub" :image="photos.night" />
  <FleetShowcase :vehicles="content.vehicles" />
  <FinalCta :line1="p.finalTitle" :image="photos.hero" :primary="m.common.requestAvailability" />
</template>
