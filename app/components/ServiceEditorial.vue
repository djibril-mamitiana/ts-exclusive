<script setup lang="ts">
// Services en grandes images alternées, un par un. « all » sert au numéro (seuls les services classiques sont numérotés).
const props = defineProps<{ services: any[]; all?: any[]; limit?: number }>()
const { m, lp } = useLang()
const list = computed(() => (props.limit ? props.services.slice(0, props.limit) : props.services))
const imageFor = (s: any) => s.image || serviceImages[s.slug] || photos.night
const num = (s: any) => (s.apart ? 0 : serviceNumber(props.all || props.services, s))
</script>

<template>
  <div>
    <NuxtLink v-for="s in list" :key="s.id" :to="lp(`/services/${s.slug}`)" class="ts-svc">
      <div v-reveal:img class="media"><img :src="sized(imageFor(s), 1400)" :alt="s.title" loading="lazy"></div>
      <div class="copy">
        <span v-reveal class="n"><Icon :name="s.icon || 'car'" :size="22" /> <template v-if="num(s)">{{ String(num(s)).padStart(2, '0') }}</template></span>
        <h3 v-reveal="0.1">{{ s.title }}</h3>
        <p v-reveal="0.2" class="ts-text">{{ s.subtitle }}</p>
        <span v-reveal="0.3" class="ts-link">{{ m.common.discover }} <span class="ts-arr" /></span>
      </div>
    </NuxtLink>
  </div>
</template>
