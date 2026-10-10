<script setup lang="ts">
// Mosaïque de services numérotés (modèle validé) : par groupe de cinq, une grande tuile en haut à gauche,
// deux tuiles dessous, deux tuiles empilées à droite. Les services au-delà de cinq prennent une tuile pleine largeur.
const props = defineProps<{ services: any[]; limit?: number }>()
const list = computed(() => (props.limit ? props.services.slice(0, props.limit) : props.services))
const groups = computed(() => {
  const out: { start: number; items: any[] }[] = []
  for (let i = 0; i < list.value.length; i += 5) out.push({ start: i, items: list.value.slice(i, i + 5) })
  return out
})
</script>

<template>
  <div class="ts-mosaic">
    <template v-for="g in groups" :key="g.start">
      <div v-if="g.items.length >= 5" class="mosaic-g">
        <div class="col-a">
          <ServiceTile :service="g.items[0]" :n="g.start + 1" variant="accent" />
          <div class="pair">
            <ServiceTile :service="g.items[1]" :n="g.start + 2" variant="line" :delay="0.08" />
            <ServiceTile :service="g.items[2]" :n="g.start + 3" variant="mist" :delay="0.16" />
          </div>
        </div>
        <div class="col-b">
          <ServiceTile :service="g.items[3]" :n="g.start + 4" variant="fog" :delay="0.1" />
          <ServiceTile :service="g.items[4]" :n="g.start + 5" variant="slate" :delay="0.2" />
        </div>
      </div>
      <template v-else>
        <ServiceTile v-for="(s, k) in g.items" :key="s.id" :service="s" :n="g.start + k + 1" variant="wide" :delay="k * 0.08" />
      </template>
    </template>
  </div>
</template>
