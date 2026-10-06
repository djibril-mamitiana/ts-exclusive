<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const p = computed(() => m.value.fleet)
usePageSeo(p.value.seoTitle, p.value.lead)
const current = ref('')
const cats = computed(() => [...new Set(content.value.vehicles.map(v => v.category).filter(Boolean))])
const list = computed(() => !current.value ? content.value.vehicles : content.value.vehicles.filter(v => v.category === current.value))
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ p.eyebrow }}</span>
      <h1>{{ p.title }}</h1>
      <p class="lead">{{ p.lead }}</p>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <div class="filters">
        <button class="chip" :class="{ on: !current }" @click="current = ''">{{ m.common.all }}</button>
        <button v-for="c in cats" :key="c" class="chip" :class="{ on: current === c }" @click="current = c">{{ c }}</button>
      </div>
      <div class="grid g3"><VehicleCard v-for="v in list" :key="v.id" :v="v" /></div>
    </div>
  </section>

  <CtaBand :title="p.cta" :button="m.common.requestAvailability" />
</template>
