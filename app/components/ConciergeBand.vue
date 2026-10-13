<script setup lang="ts">
// Bloc du service « à part » (conciergerie privée VIP) : pas de numéro, filets dorés, bouton d'action doré
const props = defineProps<{ service: any }>()
const { m, lp } = useLang()
const intro = computed(() => paragraphsOf(props.service.description)[0] || '')
const points = computed(() => (props.service.bullets || []).map(splitPoint))
const photo = computed(() => props.service.image || serviceImages[props.service.slug] || photos.lobby)
</script>

<template>
  <section class="ts-concierge">
    <div class="bgimg" aria-hidden="true"><img :src="sized(photo, 1600)" alt="" loading="lazy" decoding="async"></div>
    <div class="ts-wrap grid">
      <div class="intro">
        <span v-reveal class="ts-label gold">{{ m.home.apartLabel }}</span>
        <h2 v-reveal="0.05" class="ts-title">{{ service.title }}</h2>
        <p v-reveal="0.1" class="hook">{{ service.subtitle }}</p>
        <p v-if="intro" v-reveal="0.15" class="ts-para">{{ intro }}</p>
        <div v-reveal="0.2" class="act">
          <NuxtLink class="ts-btn gold" :to="{ path: lp('/contact'), query: { service: service.slug } }">{{ service.cta || m.common.quote }} <span class="ts-arr" /></NuxtLink>
          <NuxtLink class="ts-link" :to="lp(`/services/${service.slug}`)">{{ m.services.learn }} <span class="ts-arr" /></NuxtLink>
        </div>
      </div>
      <ul class="items">
        <li v-for="(p, i) in points" :key="p.t" v-reveal="i * 0.06"><i /><span>{{ p.t }}</span></li>
      </ul>
    </div>
  </section>
</template>
