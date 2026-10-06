<script setup lang="ts">
const { m, lp } = useLang()
const c = computed(() => m.value.events)
usePageSeo(c.value.seoTitle, c.value.lead)
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ c.eyebrow }}</span>
      <h1>{{ c.title }}</h1>
      <p class="lead">{{ c.lead }}</p>
      <div class="hero-actions"><NuxtLink :to="{ path: lp('/contact'), query: { service: 'Événement' } }" class="btn light">{{ c.cta1 }} <Icon name="arrow" :size="16" /></NuxtLink></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="h2" style="margin-bottom:12px">{{ c.doTitle }}</h2>
      <p class="lead" style="margin-bottom:40px">{{ c.doLead }}</p>
      <div class="grid g3">
        <div v-for="(e, i) in c.events" :key="e[0]" class="num-card"><div class="n">0{{ i + 1 }}</div><h3>{{ e[0] }}</h3><p>{{ e[1] }}</p></div>
        <div class="num-card" style="background:var(--navy);border-color:var(--navy)">
          <div class="n" style="color:var(--steel)">+</div>
          <h3 style="color:#fff">{{ c.servicesTitle }}</h3>
          <p style="color:#a9bdd1">{{ c.services.join(' · ') }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container prose-two">
      <div>
        <span class="eyebrow">{{ c.planEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ c.planTitle }}</h2>
      </div>
      <ul class="checks panel"><li v-for="p in c.plan" :key="p" style="font-size:16px"><Icon name="check" :size="18" /> {{ p }}</li></ul>
    </div>
  </section>

  <CtaBand :title="c.cta" :button="c.cta1" />
</template>
