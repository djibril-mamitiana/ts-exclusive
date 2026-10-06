<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const c = computed(() => m.value.pricing)
usePageSeo(c.value.seoTitle, c.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="c.label" :title="c.title" :sub="c.sub" :image="photos.night" />

  <section class="ts-sec ts-light" style="padding-bottom:clamp(60px,8vw,120px)">
    <div class="ts-wrap"><OfferGrid :offers="content.offers" /></div>
  </section>

  <section class="ts-sec ts-black">
    <div class="ts-wrap ts-split">
      <span v-reveal class="ts-label" style="color:var(--champ);opacity:1">{{ c.termsLabel }}</span>
      <ul class="ts-list"><li v-for="(k, i) in c.terms" :key="k[0]" v-reveal="i * 0.05">{{ k[0] }}<small>{{ k[1] }}</small></li></ul>
    </div>
  </section>

  <FinalCta :line1="c.finalTitle" :image="photos.hero" />
</template>
