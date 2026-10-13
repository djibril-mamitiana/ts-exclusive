<script setup lang="ts">
// Survol (ou tap) d'une destination : la grande image, le texte et la carte changent en douceur.
// Les destinations viennent de l'admin (Destinations).
const { m, lp } = useLang()
const { data: content } = await useContent()
const { data: settings } = await useSettings()
const dests = computed(() => content.value.destinations)
const active = ref(0)
const cur = computed(() => dests.value[active.value] || dests.value[0])
// Position réelle des villes sur le contour de Madagascar (voir app/utils/madagascar.ts). Destination inconnue : repère au centre.
const center: [number, number] = [72, 135]
const pin = (slug: string): [number, number] => madagascar.pins[slug] || center
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
          <svg :viewBox="madagascar.viewBox" role="img" :aria-label="'Madagascar'">
            <path v-for="(d, k) in madagascar.paths" :key="k" :d="d" stroke-width="1" stroke-linejoin="round" />
            <template v-for="(d, i) in dests" :key="d.slug">
              <circle class="ring" :class="{ on: active === i }" :cx="pin(d.slug)[0]" :cy="pin(d.slug)[1]" r="6" />
              <circle class="pin" :class="{ on: active === i }" :cx="pin(d.slug)[0]" :cy="pin(d.slug)[1]" :r="active === i ? 5 : 3.4" />
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
