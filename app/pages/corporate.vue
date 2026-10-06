<script setup lang="ts">
const { m, lp } = useLang()
const c = computed(() => m.value.corporate)
usePageSeo(c.value.seoTitle, c.value.lead, '/img/route.jpg')
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ c.eyebrow }}</span>
      <h1>{{ c.title }}</h1>
      <p class="lead">{{ c.lead }}</p>
      <div class="hero-actions"><NuxtLink :to="{ path: lp('/contact'), query: { service: 'Corporate' } }" class="btn light">{{ c.cta1 }} <Icon name="arrow" :size="16" /></NuxtLink></div>
    </div>
  </section>

  <section class="section">
    <div class="container prose-two">
      <div>
        <span class="eyebrow">{{ c.proEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ c.proTitle }}</h2>
        <ul class="checks"><li v-for="w in c.who" :key="w"><Icon name="check" :size="18" /> {{ w }}</li></ul>
      </div>
      <div class="photo-frame"><img src="/img/route.jpg" alt="Madagascar"></div>
    </div>
  </section>

  <section class="section alt">
    <div class="container">
      <h2 class="h2 center" style="margin-bottom:44px">{{ c.formulasTitle }}</h2>
      <div class="grid g4">
        <div v-for="(f, i) in c.formulas" :key="f[0]" class="num-card">
          <div class="n">0{{ i + 1 }}</div>
          <h3 style="text-transform:uppercase;letter-spacing:.08em;font-size:1rem">{{ f[0] }}</h3>
          <p>{{ f[1] }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="h2 center" style="margin-bottom:44px">{{ c.benefitsTitle }}</h2>
      <div class="grid g4">
        <div v-for="b in c.benefits" :key="b[1]" class="num-card">
          <Icon :name="b[0]" :size="34" style="color:var(--navy-2);margin-bottom:14px" />
          <h3>{{ b[1] }}</h3>
          <p>{{ b[2] }}</p>
        </div>
      </div>
    </div>
  </section>

  <CtaBand :title="c.cta" :button="c.cta1" />
</template>
