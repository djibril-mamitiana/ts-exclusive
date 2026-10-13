<script setup lang="ts">
// Tuile « flotte » : un véhicule à la fois, flèches pour passer au suivant (comme la tuile Realizations du modèle).
// Pas de numéro : seuls les services sont numérotés.
const props = defineProps<{ vehicles: any[] }>()
const { m, lp } = useLang()
const i = ref(0)
const len = computed(() => props.vehicles.length)
const cur = computed(() => props.vehicles[i.value] || props.vehicles[0])
const isCut = computed(() => /\.(png|webp)(\?|$)/i.test(cur.value?.image || ''))
const go = (d: number) => { if (len.value) i.value = (i.value + d + len.value) % len.value }
</script>

<template>
  <article v-if="cur" v-reveal class="ts-tile fleet" :class="[cur.dark_bg ? 'is-dark' : 'is-light', { cut: isCut }]">
    <h3>{{ m.home.fleetName }}</h3>
    <div v-if="len > 1" class="arrows">
      <button type="button" :aria-label="m.common.prev" @click="go(-1)"><i class="chev l" /></button>
      <button type="button" :aria-label="m.common.next" @click="go(1)"><i class="chev r" /></button>
    </div>
    <div class="stage">
      <Transition name="swap" mode="out-in">
        <img :key="cur.id" :src="cur.image" :alt="cur.name" loading="lazy" decoding="async">
      </Transition>
    </div>
    <div class="cap">
      <div>
        <b>{{ cur.name }}</b>
        <span>{{ cur.category }} · {{ cur.passengers }} {{ m.common.passengers.toLowerCase() }}</span>
      </div>
      <NuxtLink :to="lp('/flotte')" class="go">{{ m.home.fleetAll }} <span class="ts-arr" /></NuxtLink>
    </div>
  </article>
</template>
