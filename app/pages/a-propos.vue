<script setup lang="ts">
const { m } = useLang()
const c = computed(() => m.value.about)
usePageSeo(c.value.seoTitle, c.value.paragraphs[0], '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="c.label" :title="c.title" :sub="c.sub" :image="photos.doorHandle" />

  <section class="ts-sec ts-black">
    <div class="ts-wrap ts-split">
      <div class="ts-gap">
        <span v-reveal class="ts-label">{{ c.label }}</span>
        <p v-reveal="0.1" class="ts-lede">{{ c.paragraphs[0] }}</p>
      </div>
      <div class="ts-gap">
        <p v-for="(p, i) in c.paragraphs.slice(1)" :key="i" v-reveal="i * 0.1" class="ts-para">{{ p }}</p>
      </div>
    </div>
  </section>

  <section class="ts-sec ts-light ts-cloud">
    <div class="ts-wrap">
      <h2 v-reveal class="ts-title ts-commit">{{ c.commitment }}</h2>
      <p v-reveal="0.15" class="ts-para ts-endnote">{{ c.closing }}</p>
    </div>
  </section>

  <section class="ts-sec ts-black">
    <div class="ts-wrap">
      <span v-reveal class="ts-label" style="margin-bottom:10px">{{ c.valuesLabel }}</span>
      <ul class="ts-list" style="margin-top:28px">
        <li v-for="(v, i) in m.home.pillars" :key="v.t" v-reveal="i * 0.07" style="font-size:clamp(1.8rem,4vw,4rem)"><span>{{ v.t }}</span><small>{{ v.d }}</small></li>
      </ul>
    </div>
  </section>

  <section class="ts-sec ts-light ts-cloud">
    <div class="ts-wrap ts-split">
      <span v-reveal class="ts-label">{{ c.careLabel }}</span>
      <ul class="ts-list"><li v-for="(k, i) in c.care" :key="k" v-reveal="i * 0.07">{{ k }}</li></ul>
    </div>
  </section>

  <FinalCta :line1="c.finalTitle" :image="photos.hero" />
</template>
