<script setup lang="ts">
// Survol (ou tap) d'une destination : la grande image, le texte et la carte changent en douceur.
// Les destinations viennent de l'admin (Destinations).
const { m, lp } = useLang()
const { data: content } = await useContent()
const { data: settings } = await useSettings()
const dests = computed(() => content.value.destinations)
const active = ref(0)
const cur = computed(() => dests.value[active.value] || dests.value[0])
// Position approximative sur la carte (viewBox 120 x 260). Destination inconnue : repère au centre.
const pins: Record<string, [number, number]> = { antananarivo: [72, 112], 'nosy-be': [60, 22], morondava: [38, 128], antsirabe: [68, 140] }
const pin = (slug: string): [number, number] => pins[slug] || [60, 120]
</script>

<template>
  <section v-if="dests.length" id="destinations" class="ts-dest">
    <div class="layers" aria-hidden="true">
      <img v-for="(d, i) in dests" :key="d.slug" :src="sized(d.image, 1800)" :class="{ on: active === i }" alt="" loading="lazy">
    </div>
    <div class="ts-wrap in">
      <div class="names">
        <NuxtLink
          v-for="(d, i) in dests" :id="d.slug" :key="d.slug" :to="{ path: lp('/contact') }" :class="{ on: active === i }"
          @mouseenter="active = i" @focus="active = i" @click.prevent="active = i"
        >{{ d.name }}</NuxtLink>
      </div>
      <div class="side">
        <div class="mapcard" aria-hidden="true">
          <svg viewBox="0 0 120 260">
            <path d="M70 6c10 4 14 14 12 24-1 8 6 14 6 24 0 12-8 16-8 30 0 10 10 14 10 28 0 16-12 22-14 38-2 14 4 24-6 36-8 10-22 12-30 6-10-7-8-20-6-32 2-14-2-22 2-36 3-12 12-20 12-34 0-14-8-20-4-34 3-12 14-18 26-20z" fill="#e5ecf4" stroke="#b8c8d8" stroke-width="1.4" />
            <template v-for="(d, i) in dests" :key="d.slug">
              <circle class="ring" :class="{ on: active === i }" :cx="pin(d.slug)[0]" :cy="pin(d.slug)[1]" r="6" />
              <circle class="pin" :class="{ on: active === i }" :cx="pin(d.slug)[0]" :cy="pin(d.slug)[1]" :r="active === i ? 6 : 4" />
            </template>
          </svg>
        </div>
        <div v-if="cur" class="detail">
          <h3 :key="active">{{ cur.name }}</h3>
          <p>{{ cur.description }}</p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:28px">
            <NuxtLink :to="lp('/contact')" class="ts-btn">{{ m.destinations.cta }} <span class="ts-arr" /></NuxtLink>
            <a class="ts-btn" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
