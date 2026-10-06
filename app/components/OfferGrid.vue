<script setup lang="ts">
defineProps<{ offers: any[] }>()
const { m, lp } = useLang()
</script>

<template>
  <div class="grid g3">
    <article v-for="o in offers" :key="o.id" class="offer" :class="{ hl: o.highlight }">
      <span v-if="o.highlight" class="tag">{{ m.common.mostWanted }}</span>
      <h3>{{ o.name }}</h3>
      <div class="price"><small>{{ m.common.from }}</small>{{ o.price }}</div>
      <p class="target">{{ o.target }}</p>
      <ul class="checks"><li v-for="opt in o.options" :key="opt"><Icon name="check" :size="16" /> {{ opt }}</li></ul>
      <NuxtLink :to="{ path: lp('/contact'), query: { service: 'Long terme' } }" class="btn" :class="o.highlight ? 'light' : 'ghost'" style="margin-top:auto;justify-content:center">{{ m.common.quote }}</NuxtLink>
    </article>
  </div>
</template>
