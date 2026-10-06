<script setup lang="ts">
const { m, lp } = useLang()
const c = computed(() => m.value.corporate)
usePageSeo(c.value.seoTitle, c.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <PageHero :label="c.label" :title="c.title" :sub="c.sub" :image="photos.hotel" />

  <section class="ts-sec ts-black">
    <div class="ts-wrap ts-split">
      <div class="ts-gap">
        <span v-reveal class="ts-label" style="color:var(--champ);opacity:1">{{ c.whoLabel }}</span>
        <ul v-reveal="0.1" class="ts-list"><li v-for="w in c.who" :key="w">{{ w }}</li></ul>
      </div>
      <div v-reveal:img class="ts-photo"><img :src="sized(photos.lobby, 1200)" alt="" loading="lazy"></div>
    </div>
  </section>

  <section class="ts-sec ts-light">
    <div class="ts-wrap ts-split">
      <span v-reveal class="ts-label">{{ c.formulasLabel }}</span>
      <ul class="ts-list">
        <li v-for="(f, i) in c.formulas" :key="f[0]" v-reveal="i * 0.08">{{ f[0] }}<small>{{ f[1] }}</small></li>
      </ul>
    </div>
    <div class="ts-wrap ts-split" style="margin-top:clamp(64px,9vw,140px)">
      <span v-reveal class="ts-label">{{ c.perksLabel }}</span>
      <ul class="ts-list"><li v-for="(p, i) in c.perks" :key="p" v-reveal="i * 0.08">{{ p }}</li></ul>
    </div>
  </section>

  <FinalCta :line1="c.finalTitle" :image="photos.hotel" :primary="c.cta" to="/contact?service=Corporate" />
</template>
