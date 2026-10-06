<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const c = computed(() => m.value.pricing)
usePageSeo(c.value.seoTitle, c.value.lead)
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ c.eyebrow }}</span>
      <h1>{{ c.title }}</h1>
      <p class="lead">{{ c.lead }}</p>
    </div>
  </section>

  <section class="section">
    <div class="container"><OfferGrid :offers="content.offers" /></div>
  </section>

  <section class="section alt">
    <div class="container">
      <h2 class="h2 center" style="margin-bottom:44px">{{ c.condTitle }}</h2>
      <div class="grid g4">
        <div v-for="k in c.conditions" :key="k[0]" class="num-card"><h3>{{ k[0] }}</h3><p>{{ k[1] }}</p></div>
      </div>
    </div>
  </section>

  <CtaBand :title="c.cta" />
</template>
