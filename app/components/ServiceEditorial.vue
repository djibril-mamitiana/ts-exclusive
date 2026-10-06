<script setup lang="ts">
// Services en grandes images alternées, un par un
const props = defineProps<{ services: any[]; limit?: number }>()
const { m, lp } = useLang()
const list = computed(() => (props.limit ? props.services.slice(0, props.limit) : props.services))
const imageFor = (s: any) => s.image || serviceImages[s.slug] || photos.night
</script>

<template>
  <div>
    <NuxtLink v-for="(s, i) in list" :key="s.id" :to="lp(`/services/${s.slug}`)" class="ts-svc">
      <div v-reveal:img class="media"><img :src="sized(imageFor(s), 1400)" :alt="s.title" loading="lazy"></div>
      <div class="copy">
        <span v-reveal class="n"><Icon :name="s.icon || 'car'" :size="22" /> 0{{ i + 1 }}</span>
        <h3 v-reveal="0.1">{{ s.title }}</h3>
        <p v-reveal="0.2" class="ts-text">{{ s.subtitle }}</p>
        <span v-reveal="0.3" class="ts-link">{{ m.common.discover }} <span class="ts-arr" /></span>
      </div>
    </NuxtLink>
  </div>
</template>
