<script setup lang="ts">
const { m, lp } = useLang()
const c = computed(() => m.value.hospitality)
usePageSeo(c.value.seoTitle, c.value.lead)
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ c.eyebrow }}</span>
      <h1>{{ c.title }}</h1>
      <p class="lead">{{ c.lead }}</p>
      <div class="hero-actions"><NuxtLink :to="{ path: lp('/contact'), query: { service: 'Délégation' } }" class="btn light">{{ c.cta1 }} <Icon name="arrow" :size="16" /></NuxtLink></div>
    </div>
  </section>

  <section class="section">
    <div class="container prose-two">
      <div class="photo-frame"><img src="/img/baobabs.jpg" alt="Madagascar"></div>
      <div>
        <span class="eyebrow">{{ c.itemsEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ c.itemsTitle }}</h2>
        <div class="grid g2" style="gap:12px">
          <div v-for="i in c.items" :key="i" class="num-card" style="padding:18px 20px;font-weight:600;color:var(--ink)">{{ i }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container center">
      <span class="eyebrow">{{ c.partnerEyebrow }}</span>
      <h2 class="h2" style="margin:18px 0 36px">{{ c.partnerTitle }}</h2>
      <div class="partner-tags"><span v-for="p in c.partners" :key="p">{{ p }}</span></div>
    </div>
  </section>

  <CtaBand :title="c.cta" :button="c.cta1" />
</template>
