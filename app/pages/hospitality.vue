<script setup lang="ts">
const { data: content } = await useContent()
const { m } = useLang()
const c = computed(() => m.value.hospitality)
usePageSeo(c.value.seoTitle, c.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="c.label" :title="c.title" :sub="c.sub" :image="photos.lobby" />

  <section class="ts-sec ts-black">
    <div class="ts-wrap ts-split">
      <div v-reveal:img class="ts-photo"><img :src="sized(photos.airport, 1200)" alt="" loading="lazy"></div>
      <div class="ts-gap">
        <span v-reveal class="ts-label" style="color:var(--champ);opacity:1">{{ c.itemsLabel }}</span>
        <ul class="ts-list"><li v-for="(i, n) in c.items" :key="i" v-reveal="n * 0.06">{{ i }}</li></ul>
      </div>
    </div>
  </section>

  <section class="ts-sec ts-light">
    <div class="ts-wrap">
      <span v-reveal class="ts-label">{{ c.partnerLabel }}</span>
      <h2 v-reveal="0.1" class="ts-title" style="margin:18px 0 44px">{{ c.partnerTitle }}</h2>
      <div v-reveal="0.2" class="ts-trust"><span v-for="p in content.partners" :key="p.id">{{ p.name }}</span></div>
    </div>
  </section>

  <FinalCta :line1="c.finalTitle" :image="photos.hotel" :primary="c.cta" to="/contact?service=Délégation" />
</template>
