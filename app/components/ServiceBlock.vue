<script setup lang="ts">
// Bloc éditorial d'un service (page Services) : photo, numéro, titre, accroche, texte, points clés et boutons d'action
const props = defineProps<{ service: any; n?: number; flip?: boolean }>()
const { m, lp } = useLang()
const photo = computed(() => props.service.image || serviceImages[props.service.slug] || photos.night)
const intro = computed(() => paragraphsOf(props.service.description)[0] || '')
const points = computed(() => (props.service.bullets || []).map(splitPoint).slice(0, 5))
</script>

<template>
  <article class="ts-sblock" :class="{ flip }">
    <div v-reveal:img class="media"><img :src="sized(photo, 1400)" :alt="service.title" loading="lazy"></div>
    <div class="copy">
      <span v-if="n" v-reveal class="num">{{ String(n).padStart(2, '0') }}</span>
      <h3 v-reveal="0.05"><NuxtLink :to="lp(`/services/${service.slug}`)">{{ service.title }}</NuxtLink></h3>
      <p v-reveal="0.1" class="hook">{{ service.subtitle }}</p>
      <p v-if="intro" v-reveal="0.15" class="ts-para">{{ intro }}</p>
      <ul v-if="points.length" v-reveal="0.2" class="chips"><li v-for="p in points" :key="p.t">{{ p.t }}</li></ul>
      <div v-reveal="0.25" class="act">
        <NuxtLink class="ts-btn solid" :to="{ path: lp('/contact'), query: { service: service.slug } }">{{ service.cta || m.common.quote }} <span class="ts-arr" /></NuxtLink>
        <NuxtLink class="ts-link" :to="lp(`/services/${service.slug}`)">{{ m.services.learn }} <span class="ts-arr" /></NuxtLink>
      </div>
    </div>
  </article>
</template>
