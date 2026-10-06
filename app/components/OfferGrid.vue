<script setup lang="ts">
defineProps<{ offers: any[] }>()
const { m, lp } = useLang()
</script>

<template>
  <div class="ts-offers">
    <article v-for="(o, i) in offers" :key="o.id" v-reveal="i * 0.1" class="ts-offer" :class="{ hl: o.highlight }">
      <h3>{{ o.name }}</h3>
      <div class="price"><small>{{ m.common.from }}</small>{{ o.price }}</div>
      <ul><li v-for="opt in o.options" :key="opt">{{ opt }}</li></ul>
      <div><NuxtLink :to="{ path: lp('/contact'), query: { service: 'Long terme' } }" class="ts-btn sm">{{ m.common.quote }} <span class="ts-arr" /></NuxtLink></div>
    </article>
  </div>
</template>
