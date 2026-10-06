<script setup lang="ts">
const { m } = useLang()
const c = computed(() => m.value.events)
usePageSeo(c.value.seoTitle, c.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="c.label" :title="c.title" :sub="c.sub" :image="photos.events" />

  <section class="ts-sec ts-black">
    <div class="ts-wrap ts-split">
      <span v-reveal class="ts-label" style="color:var(--champ);opacity:1">{{ c.forLabel }}</span>
      <ul class="ts-list"><li v-for="(e, i) in c.for" :key="e" v-reveal="i * 0.07">{{ e }}</li></ul>
    </div>
  </section>

  <section class="ts-sec ts-light">
    <div class="ts-wrap ts-split">
      <span v-reveal class="ts-label">{{ c.planLabel }}</span>
      <ul class="ts-list"><li v-for="(p, i) in c.plan" :key="p" v-reveal="i * 0.07">{{ p }}</li></ul>
    </div>
  </section>

  <FinalCta :line1="c.finalTitle" :image="photos.events" :primary="c.cta" to="/contact?service=Événement" />
</template>
