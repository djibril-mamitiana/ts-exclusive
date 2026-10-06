<script setup lang="ts">
// En-tête de page : grande photo, label, titre serif, sous-titre court
defineProps<{ label: string; title: string; sub?: string; image: string }>()
</script>

<template>
  <section class="ts-pagehero">
    <div class="bg"><img v-parallax="0.1" :src="sized(image, 1800)" alt="" fetchpriority="high"></div>
    <div class="ts-wrap in">
      <span class="ts-label">{{ label }}</span>
      <h1 class="ts-display" style="font-size:clamp(2.8rem,8vw,8rem)">{{ title }}</h1>
      <p v-if="sub" class="ts-subtitle">{{ sub }}</p>
    </div>
  </section>
</template>
