<script setup lang="ts">
// Tuile numérotée du modèle validé : numéro fin, titre en capitales espacées, texte court.
// variant : accent (bleu acier + photo), line (filaire), mist (gris bleu + photo en pied), fog (clair), slate (ardoise), wide (pleine largeur)
const props = defineProps<{ service: any; n: number; variant: 'accent' | 'line' | 'mist' | 'fog' | 'slate' | 'wide'; delay?: number }>()
const { m, lp } = useLang()
const photo = computed(() => props.service.image || serviceImages[props.service.slug] || photos.night)
const withPhoto = computed(() => ['accent', 'mist', 'wide'].includes(props.variant))
</script>

<template>
  <NuxtLink v-reveal="delay || 0" :to="lp(`/services/${service.slug}`)" data-cursor-label="Voir" class="ts-tile" :class="variant">
    <span class="num">{{ String(n).padStart(2, '0') }}</span>
    <div v-if="withPhoto" class="bgimg"><img :src="sized(photo, 1100)" :alt="service.title" loading="lazy" decoding="async"></div>
    <Icon v-if="variant === 'line'" class="art" :name="service.icon || 'car'" :size="150" />
    <div class="txt">
      <h3>{{ service.title }}</h3>
      <p>{{ service.subtitle }}</p>
      <p v-if="variant === 'fog' && service.description" class="more">{{ service.description }}</p>
      <span class="go">{{ m.common.discover }} <span class="ts-arr" /></span>
    </div>
  </NuxtLink>
</template>
