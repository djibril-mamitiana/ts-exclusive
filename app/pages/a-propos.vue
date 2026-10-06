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

  <FinalCta :line1="c.finalTitle" :image="photos.hero" />
</template>
