<script setup lang="ts">
// Tuile de service : numéro fin, titre en capitales espacées, accroche, phrase courte et bouton d'action visible.
// Le titre est le lien vers la page du service (il couvre toute la tuile) ; le bouton ouvre le devis avec le service coché.
// variant : accent (bleu acier + photo), line (filaire), mist (gris bleu + photo en pied), fog (clair), slate (ardoise), wide (large)
const props = defineProps<{ service: any; n?: number; variant: 'accent' | 'line' | 'mist' | 'fog' | 'slate' | 'wide'; delay?: number }>()
const { m, lp } = useLang()
const photo = computed(() => props.service.image || serviceImages[props.service.slug] || photos.night)
const withPhoto = computed(() => ['accent', 'mist', 'wide'].includes(props.variant))
</script>

<template>
  <article v-reveal="delay || 0" class="ts-tile" :class="variant" :data-cursor-label="m.common.view">
    <span v-if="n" class="num">{{ String(n).padStart(2, '0') }}</span>
    <div v-if="withPhoto" class="bgimg"><img :src="sized(photo, 1100)" :alt="service.title" loading="lazy" decoding="async"></div>
    <Icon v-if="variant === 'line'" class="art" :name="service.icon || 'car'" :size="150" />
    <div class="txt">
      <h3><NuxtLink :to="lp(`/services/${service.slug}`)" class="stretch">{{ service.title }}</NuxtLink></h3>
      <p class="hook">{{ service.subtitle }}</p>
      <p v-if="service.tagline" class="more">{{ service.tagline }}</p>
      <NuxtLink class="cta" :to="{ path: lp('/contact'), query: { service: service.slug } }">{{ service.cta || m.common.quote }} <span class="ts-arr" /></NuxtLink>
    </div>
  </article>
</template>
