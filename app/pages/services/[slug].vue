<script setup lang="ts">
const route = useRoute()
const { data: content } = await useContent()
const { m, lp } = useLang()
const service = computed(() => content.value.services.find(s => s.slug === route.params.slug))
if (!service.value) throw createError({ statusCode: 404, statusMessage: 'Service introuvable', fatal: true })
usePageSeo(`${service.value.title} | TS EXCLUSIVE`, service.value.subtitle + ' ' + service.value.description, service.value.image || '/img/baobabs.jpg')

const isAirport = computed(() => service.value?.slug === 'transferts-aeroport')
const others = computed(() => content.value.services.filter(s => s.slug !== service.value?.slug).slice(0, 3))
</script>

<template>
  <template v-if="service">
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ m.services.eyebrow }}</span>
        <h1>{{ service.title }}</h1>
        <p class="lead">{{ service.subtitle }}</p>
        <div class="hero-actions">
          <NuxtLink :to="{ path: lp('/contact'), query: { service: service.title } }" class="btn light">{{ m.common.quote }} <Icon name="arrow" :size="16" /></NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container prose-two">
        <div>
          <h2 class="h2" style="margin-bottom:20px">{{ service.subtitle }}</h2>
          <p class="lead">{{ service.description }}</p>
        </div>
        <div class="panel">
          <h3 style="margin-bottom:16px">{{ m.common.included }}</h3>
          <ul class="checks"><li v-for="b in service.bullets" :key="b"><Icon name="check" :size="18" /> {{ b }}</li></ul>
        </div>
      </div>
    </section>

    <section v-if="isAirport" class="section alt">
      <div class="container">
        <h2 class="h2 center" style="margin-bottom:48px">{{ m.services.airportTitle }}</h2>
        <div class="steps">
          <div v-for="(s, i) in m.services.steps" :key="s" class="step"><div class="dot">{{ i + 1 }}</div><h4>{{ s }}</h4></div>
        </div>
      </div>
    </section>

    <section class="section" :class="{ alt: !isAirport }">
      <div class="container">
        <h2 class="h2" style="margin-bottom:32px">{{ m.common.otherServices }}</h2>
        <div class="grid g3">
          <NuxtLink v-for="s in others" :key="s.id" :to="lp(`/services/${s.slug}`)" class="service-card">
            <div class="thumb"><img v-if="s.image" :src="s.image" :alt="s.title"><Icon v-else :name="s.icon" :size="48" /></div>
            <div class="body"><h3>{{ s.title }}</h3><p>{{ s.subtitle }}</p></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaBand :title="m.services.detailCta" />
  </template>
</template>
