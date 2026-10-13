<script setup lang="ts">
const route = useRoute()
const { data: content } = await useContent()
const { m, lp } = useLang()
const service = computed(() => content.value.services.find(s => s.slug === route.params.slug))
if (!service.value) throw createError({ statusCode: 404, statusMessage: 'Service introuvable', fatal: true })
const image = computed(() => service.value?.image || serviceImages[service.value?.slug] || photos.night)

// Le texte est saisi dans l'admin : paragraphes séparés par une ligne vide, points sous la forme « Titre : détail » (facultatif)
const paragraphs = computed(() => paragraphsOf(service.value?.description))
const points = computed(() => (service.value?.bullets || []).map(splitPoint))
const closing = computed(() => String(service.value?.closing || '').split('\n').map(l => l.trim()).filter(Boolean))
const ctaTo = computed(() => ({ path: lp('/contact'), query: { service: service.value?.slug } }))
usePageSeo(`${service.value.title} | TS EXCLUSIVE`, `${service.value.subtitle} ${paragraphs.value[0] || ''}`.slice(0, 200), '/img/baobabs.jpg')

const isAirport = computed(() => service.value?.slug === 'transferts-aeroport')
const others = computed(() => content.value.services.filter(s => s.slug !== service.value?.slug).slice(0, 3))
</script>

<template>
  <template v-if="service">
    <PageHero
      :label="service.apart ? m.home.apartLabel : m.services.label" :title="service.title" :sub="service.subtitle" :image="image"
      :cta="service.cta || m.common.quote" :cta-to="ctaTo"
    />

    <section class="ts-sec ts-black ts-detail">
      <div class="ts-wrap ts-split">
        <div class="ts-gap">
          <p v-if="service.tagline" v-reveal class="ts-lede">{{ service.tagline }}</p>
          <p v-for="(p, i) in paragraphs" :key="i" v-reveal="0.1" class="ts-para">{{ p }}</p>
        </div>
        <div>
          <span v-reveal class="ts-label">{{ service.bullets_title || m.common.included }}</span>
          <ul class="ts-list ts-points" style="margin-top:22px">
            <li v-for="(b, i) in points" :key="i" v-reveal="i * 0.06" :class="{ 'has-d': b.d }"><span>{{ b.t }}</span><small v-if="b.d">{{ b.d }}</small></li>
          </ul>
          <p v-if="service.note" v-reveal class="ts-note">{{ service.note }}</p>
        </div>
      </div>
      <div class="ts-wrap">
        <div class="ts-closing">
          <p v-for="(l, i) in closing" :key="i" v-reveal="i * 0.1" :class="i ? 'sub' : 'main'">{{ l }}</p>
          <div v-reveal="0.2" class="act">
            <NuxtLink :to="ctaTo" class="ts-btn solid">{{ service.cta || m.common.quote }} <span class="ts-arr" /></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section v-if="isAirport" class="ts-sec ts-light" style="padding-block:clamp(64px,9vw,140px)">
      <div class="ts-wrap">
        <span class="ts-label">{{ m.services.airportLabel }}</span>
        <div class="ts-list" style="margin-top:28px">
          <ul>
            <li v-for="(s, i) in m.services.airportSteps" :key="s" v-reveal="i * 0.08"><span>{{ s }}</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="ts-sec ts-black">
      <div class="ts-wrap">
        <span v-reveal class="ts-label" style="margin-bottom:10px">{{ m.common.otherServices }}</span>
        <ServiceEditorial :services="others" :all="content.services" />
      </div>
    </section>

    <FinalCta :line1="m.services.finalTitle" :image="image" />
  </template>
</template>
