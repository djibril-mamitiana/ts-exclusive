<script setup lang="ts">
const props = defineProps<{ line1: string; line2?: string; image?: string; primary?: string; to?: string }>()
const { data: settings } = await useSettings()
const { m, lp } = useLang()
</script>

<template>
  <section class="ts-final ts-black">
    <div class="bg"><img v-parallax="0.08" :src="sized(image || '', 1800)" alt="" loading="lazy"></div>
    <div class="ts-wrap in">
      <h2 v-reveal class="ts-display">{{ line1 }}<template v-if="line2"><br><span style="color:var(--champ)">{{ line2 }}</span></template></h2>
      <div v-reveal="0.2" class="btns">
        <NuxtLink :to="lp(to || '/contact')" class="ts-btn">{{ primary || m.common.quote }} <span class="ts-arr" /></NuxtLink>
        <a class="ts-btn" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp <span class="ts-arr" /></a>
      </div>
    </div>
  </section>
</template>
