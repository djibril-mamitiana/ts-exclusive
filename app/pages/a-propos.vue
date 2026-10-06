<script setup lang="ts">
const { m } = useLang()
const c = computed(() => m.value.about)
usePageSeo(c.value.seoTitle, c.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="c.label" :title="c.title" :sub="c.sub" :image="photos.doorHandle" />

  <section class="ts-sec ts-black">
    <div class="ts-wrap">
      <span v-reveal class="ts-label" style="color:var(--champ);opacity:1">{{ c.valuesLabel }}</span>
      <ul class="ts-list" style="margin-top:28px">
        <li v-for="(v, i) in c.values" :key="v" v-reveal="i * 0.07" style="font-size:clamp(2rem,4.4vw,4.4rem)"><span>{{ v }}</span><small>0{{ i + 1 }}</small></li>
      </ul>
    </div>
  </section>

  <section class="ts-sec ts-light">
    <div class="ts-wrap ts-split">
      <span v-reveal class="ts-label">{{ c.careLabel }}</span>
      <ul class="ts-list"><li v-for="(k, i) in c.care" :key="k" v-reveal="i * 0.07">{{ k }}</li></ul>
    </div>
  </section>

  <section class="ts-sec ts-black">
    <div class="ts-wrap">
      <div class="ts-gap" style="margin-bottom:clamp(36px,5vw,70px)">
        <span v-reveal class="ts-label">{{ m.home.whyLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ m.home.whyTitle }}</h2>
      </div>
      <ul class="ts-list"><li v-for="(w, i) in m.home.why" :key="w[0]" v-reveal="i * 0.06"><span>{{ w[1] }}</span><small>{{ w[2] }}</small></li></ul>
    </div>
  </section>

  <FinalCta :line1="c.finalTitle" :image="photos.hero" />
</template>
