<script setup lang="ts">
const route = useRoute()
const { data: content } = await useContent()
const { m, lp } = useLang()
const service = computed(() => content.value.services.find(s => s.slug === route.params.slug))
if (!service.value) throw createError({ statusCode: 404, statusMessage: 'Service introuvable', fatal: true })
const image = computed(() => service.value?.image || serviceImages[service.value?.slug] || photos.night)
usePageSeo(`${service.value.title} | TS EXCLUSIVE`, `${service.value.subtitle} ${service.value.description}`, '/img/baobabs.jpg')

const isAirport = computed(() => service.value?.slug === 'transferts-aeroport')
const others = computed(() => content.value.services.filter(s => s.slug !== service.value?.slug).slice(0, 3))
</script>

<template>
  <template v-if="service">
    <PageHero :label="m.services.label" :title="service.title" :sub="service.subtitle" :image="image" />

    <section class="ts-sec ts-black">
      <div class="ts-wrap ts-split">
        <div class="ts-gap">
          <p v-reveal class="ts-subtitle">{{ service.description }}</p>
          <div v-reveal="0.2" style="padding-top:20px">
            <NuxtLink :to="{ path: lp('/contact'), query: { service: service.title } }" class="ts-btn">{{ m.common.quote }} <span class="ts-arr" /></NuxtLink>
          </div>
        </div>
        <div>
          <span v-reveal class="ts-label" style="color:var(--champ);opacity:1">{{ m.common.included }}</span>
          <ul class="ts-list" style="margin-top:22px">
            <li v-for="(b, i) in service.bullets" :key="b" v-reveal="i * 0.06">{{ b }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="isAirport" class="ts-sec ts-light" style="padding-block:clamp(64px,9vw,140px)">
      <div class="ts-wrap">
        <span class="ts-label">{{ m.services.airportLabel }}</span>
        <div class="ts-list" style="margin-top:28px">
          <ul>
            <li v-for="(s, i) in m.services.airportSteps" :key="s" v-reveal="i * 0.08"><span>{{ s }}</span><small>0{{ i + 1 }}</small></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="ts-sec ts-black">
      <div class="ts-wrap">
        <span v-reveal class="ts-label" style="margin-bottom:10px;display:block">{{ m.common.otherServices }}</span>
        <ServiceEditorial :services="others" />
      </div>
    </section>

    <FinalCta :line1="m.services.finalTitle" :image="image" />
  </template>
</template>
