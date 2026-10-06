<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const p = computed(() => m.value.fleet)
usePageSeo(p.value.seoTitle, p.value.sub, '/img/baobabs.jpg')
const current = ref('')
const cats = computed(() => [...new Set(content.value.vehicles.map((v: any) => v.category).filter(Boolean))] as string[])
const list = computed(() => (current.value ? content.value.vehicles.filter((v: any) => v.category === current.value) : content.value.vehicles))
</script>

<template>
  <PageHero :label="p.label" :title="p.title" :sub="p.sub" :image="photos.night" />
  <div class="ts-black">
    <div class="ts-wrap ts-filters">
      <button class="ts-chip" :class="{ on: !current }" @click="current = ''">{{ m.common.all }}</button>
      <button v-for="c in cats" :key="c" class="ts-chip" :class="{ on: current === c }" @click="current = c">{{ c }}</button>
    </div>
  </div>
  <FleetShowcase :key="current" :vehicles="list" />
  <FinalCta :line1="p.finalTitle" :image="photos.hero" :primary="m.common.requestAvailability" />
</template>
