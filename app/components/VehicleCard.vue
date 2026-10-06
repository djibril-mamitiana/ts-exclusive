<script setup lang="ts">
defineProps<{ v: any }>()
const { m, lp } = useLang()
</script>

<template>
  <article class="vehicle">
    <div class="photo" :class="{ dark: v.dark_bg }"><img :src="v.image" :alt="v.name" loading="lazy"></div>
    <div class="body">
      <span class="cat">{{ v.category }}</span>
      <h3>{{ v.name }}</h3>
      <p v-if="v.tagline" class="serif" style="font-size:1.1rem;color:var(--navy-2)">{{ v.tagline }}</p>
      <p class="usage">{{ v.description }}</p>
      <div class="specs">
        <span><Icon name="seat" :size="16" /> {{ v.passengers }} {{ m.common.passengers }}</span>
        <span><Icon name="bag" :size="16" /> {{ v.bags }} {{ m.common.bags }}</span>
      </div>
      <p v-if="v.usage" class="muted" style="font-size:13px"><b style="color:var(--ink)">{{ m.common.usage }} :</b> {{ v.usage }}</p>
      <NuxtLink :to="{ path: lp('/contact'), query: { vehicule: v.name } }" class="link-arrow" style="margin-top:6px">{{ m.common.requestAvailability }} <Icon name="arrow" :size="16" /></NuxtLink>
    </div>
  </article>
</template>
