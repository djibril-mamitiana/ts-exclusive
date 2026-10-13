<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const s = computed(() => m.value.services)
usePageSeo(s.value.seoTitle, s.value.sub, '/img/baobabs.jpg')
const numbered = computed(() => numberedServices(content.value.services))
const apart = computed(() => apartService(content.value.services))
</script>

<template>
  <PageHero :label="s.label" :title="s.title" :sub="s.sub" :image="photos.chauffeur" />

  <section class="ts-sec ts-black ts-sblocks" style="padding-top:clamp(40px,6vw,90px)">
    <div class="ts-wrap">
      <ServiceBlock v-for="(sv, i) in numbered" :key="sv.id" :service="sv" :n="i + 1" :flip="i % 2 === 1" />
    </div>
  </section>

  <ConciergeBand v-if="apart" :service="apart" />

  <section class="ts-sec ts-light">
    <div class="ts-wrap">
      <div class="ts-gap" style="margin-bottom:clamp(40px,6vw,80px)">
        <span v-reveal class="ts-label">{{ s.offersLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ s.offersTitle }}</h2>
        <p v-reveal="0.2" class="ts-text" style="opacity:.65">{{ s.offersNote }}</p>
      </div>
      <OfferGrid :offers="content.offers" />
      <p class="ts-label" style="margin-top:36px;opacity:.55;text-transform:none;letter-spacing:.06em;font-size:13px">{{ s.conditions }}</p>
    </div>
  </section>

  <FinalCta :line1="s.finalTitle" :image="photos.night" />
</template>
