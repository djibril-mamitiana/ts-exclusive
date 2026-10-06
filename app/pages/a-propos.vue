<script setup lang="ts">
const { m } = useLang()
const c = computed(() => m.value.about)
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
    <div class="container">
      <h2 class="h2 center" style="margin-bottom:44px">{{ c.valuesTitle }}</h2>
      <div class="grid g3">
        <div v-for="(v, i) in c.values" :key="v[0]" class="num-card"><div class="n">0{{ i + 1 }}</div><h3>{{ v[0] }}</h3><p>{{ v[1] }}</p></div>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container prose-two">
      <div>
        <span class="eyebrow">{{ c.whyEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ c.whyTitle }}</h2>
        <p class="lead">{{ c.whyText }}</p>
      </div>
      <div class="panel">
        <h3 style="margin-bottom:14px">{{ c.vehiclesTitle }}</h3>
        <ul class="checks"><li v-for="k in c.checks" :key="k"><Icon name="check" :size="18" /> {{ k }}</li></ul>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="h2 center" style="margin-bottom:44px">{{ c.journeyTitle }}</h2>
      <div class="grid g3">
        <div v-for="j in c.journey" :key="(j[0] as string)" class="num-card">
          <h3 style="margin-bottom:14px">{{ j[0] }}</h3>
          <ul class="checks"><li v-for="i in (j[1] as string[])" :key="i"><Icon name="check" :size="16" /> {{ i }}</li></ul>
        </div>
      </div>
    </div>
  </section>

  <CtaBand :title="c.cta" />
</template>
