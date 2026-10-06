<script setup lang="ts">
// Catalogue : un véhicule par écran, fond sombre ou clair selon la photo
const props = defineProps<{ vehicles: any[]; limit?: number }>()
const { m, lp } = useLang()
const list = computed(() => (props.limit ? props.vehicles.slice(0, props.limit) : props.vehicles))
const brand = (name: string) => name.split(' ')[0]
const model = (name: string) => name.split(' ').slice(1).join(' ')
</script>

<template>
  <div>
    <section v-for="(v, i) in list" :id="`v${v.id}`" :key="v.id" class="ts-car" :class="v.dark_bg ? 'ts-black' : 'ts-light'">
      <div class="ts-wrap" style="width:100%">
        <div class="grid">
          <div class="info">
            <span v-reveal class="brand">{{ brand(v.name) }}</span>
            <h3 v-reveal="0.1" class="name">{{ model(v.name) }}</h3>
            <p v-reveal="0.2" class="ts-subtitle" style="opacity:.75;max-width:26ch">{{ v.category }}</p>
            <div v-reveal="0.3" class="ts-specs">
              <span><b>{{ v.passengers }}</b>{{ m.common.passengers }}</span>
              <span><b>{{ v.bags }}</b>{{ m.common.bags }}</span>
            </div>
            <div v-reveal="0.4">
              <NuxtLink :to="{ path: lp('/contact'), query: { vehicule: v.name } }" class="ts-btn">{{ m.common.explore }} <span class="ts-arr" /></NuxtLink>
            </div>
          </div>
          <div v-reveal:img class="vis"><img :src="v.image" :alt="v.name" loading="lazy"></div>
        </div>
      </div>
      <div class="big" aria-hidden="true">0{{ i + 1 }}</div>
    </section>
  </div>
</template>
