<script setup lang="ts">
const { data: content } = await useContent()
const { m, lp } = useLang()
const s = computed(() => m.value.services)
usePageSeo(s.value.seoTitle, s.value.lead)
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ s.eyebrow }}</span>
      <h1>{{ s.title }}</h1>
      <p class="lead">{{ s.lead }}</p>
    </div>
  </section>

  <section class="section alt">
    <div class="container grid g3">
      <NuxtLink v-for="sv in content.services" :key="sv.id" :to="lp(`/services/${sv.slug}`)" class="service-card">
        <div class="thumb"><img v-if="sv.image" :src="sv.image" :alt="sv.title"><Icon v-else :name="sv.icon" :size="58" /></div>
        <div class="body">
          <h3>{{ sv.title }}</h3>
          <p>{{ sv.subtitle }}</p>
          <span class="link-arrow">{{ m.common.learnMore }} <Icon name="arrow" :size="16" /></span>
        </div>
      </NuxtLink>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="center" style="margin-bottom:56px">
        <span class="eyebrow">{{ s.offersEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ s.offersTitle }}</h2>
        <p class="lead">{{ s.offersLead }}</p>
      </div>
      <OfferGrid :offers="content.offers" />
      <p class="muted center" style="margin-top:28px;font-size:14px">{{ s.conditions }}</p>
    </div>
  </section>

  <CtaBand :title="s.cta" />
</template>
