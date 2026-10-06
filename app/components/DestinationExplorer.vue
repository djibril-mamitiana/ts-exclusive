<script setup lang="ts">
// Survol (ou tap) d'une destination : la grande image et le texte changent en douceur
const { m, lp } = useLang()
const active = ref(0)
const lines = computed(() => m.value.destinations.lines)
</script>

<template>
  <section class="ts-dest" id="destinations">
    <div class="layers" aria-hidden="true">
      <img v-for="(d, i) in destinations" :key="d.slug" :src="sized(d.image, 1800)" :class="{ on: active === i }" alt="" loading="lazy">
    </div>
    <div class="ts-wrap in">
      <div class="names">
        <NuxtLink
          v-for="(d, i) in destinations" :id="d.slug" :key="d.slug" :to="{ path: lp('/contact') }" :class="{ on: active === i }"
          @mouseenter="active = i" @focus="active = i" @click.prevent="active = i"
        >{{ d.name }}</NuxtLink>
      </div>
      <div class="detail">
        <h3 :key="active">{{ destinations[active].name }}</h3>
        <p>{{ lines[active] }}</p>
        <NuxtLink :to="lp('/contact')" class="ts-btn" style="margin-top:28px">{{ m.destinations.cta }} <span class="ts-arr" /></NuxtLink>
      </div>
    </div>
  </section>
</template>
