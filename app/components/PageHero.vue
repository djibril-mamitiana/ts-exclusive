<script setup lang="ts">
// En-tête de page : grande photo, label, titre, sous-titre court et, si besoin, un bouton d'action
defineProps<{ label: string; title: string; sub?: string; image: string; cta?: string; ctaTo?: any }>()
</script>

<template>
  <section class="ts-pagehero">
    <div class="bg"><img v-parallax="0.1" :src="sized(image, 1800)" alt="" fetchpriority="high"></div>
    <div class="ts-wrap in">
      <span class="ts-label">{{ label }}</span>
      <h1 class="ts-display">{{ title }}</h1>
      <p v-if="sub" class="ts-subtitle">{{ sub }}</p>
      <div v-if="cta && ctaTo" class="hero-cta">
        <NuxtLink :to="ctaTo" class="ts-btn solid">{{ cta }} <span class="ts-arr" /></NuxtLink>
      </div>
    </div>
  </section>
</template>
