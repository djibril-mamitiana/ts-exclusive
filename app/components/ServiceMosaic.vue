<script setup lang="ts">
// Mosaïque de services numérotés : tuiles image / pleines / filaires en alternance (modèle Detailing)
const props = defineProps<{ services: any[]; limit?: number }>()
const { m, lp } = useLang()
const list = computed(() => (props.limit ? props.services.slice(0, props.limit) : props.services))
const imageFor = (s: any) => s.image || serviceImages[s.slug] || photos.night

// Motif répété par groupe de 4 : large image, étroite pleine, étroite filaire, large image
const pattern = [
  { w: 'w7', kind: 'img' }, { w: 'w5', kind: 'solid' }, { w: 'w5', kind: 'line' }, { w: 'w7', kind: 'img' },
  { w: 'w5', kind: 'paper' }, { w: 'w7', kind: 'img' }
]
const look = (i: number) => pattern[i % pattern.length]
</script>

<template>
  <div class="ts-mosaic">
    <NuxtLink
      v-for="(s, i) in list" :key="s.id" v-reveal="(i % 2) * 0.12" :to="lp(`/services/${s.slug}`)"
      class="ts-tile" :class="[look(i).w, look(i).kind]"
    >
      <div v-if="look(i).kind === 'img'" class="bgimg"><img :src="sized(imageFor(s), 1400)" :alt="s.title" loading="lazy"></div>
      <span class="num">0{{ i + 1 }}</span>
      <Icon class="ic" :name="s.icon || 'car'" :size="26" />
      <h3>{{ s.title }}</h3>
      <p>{{ s.subtitle }}</p>
      <span class="go">{{ m.common.discover }} <span class="ts-arr" /></span>
    </NuxtLink>
  </div>
</template>
