<script setup lang="ts">
const { m } = useLang()
const d = computed(() => m.value.destinations)
usePageSeo(d.value.seoTitle, d.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <section class="ts-black" style="padding-top:clamp(110px,14vw,190px)">
    <div class="ts-wrap" style="margin-bottom:40px">
      <span class="ts-label">{{ d.label }}</span>
      <h1 class="ts-display" style="margin-top:18px;font-size:clamp(2.8rem,8vw,8rem)">{{ d.title1 }}<br>{{ d.title2 }}</h1>
    </div>
    <DestinationExplorer />
  </section>
  <FinalCta :line1="m.home.finalTitle1" :line2="m.home.finalTitle2" :image="photos.baobabsRoad" />
</template>
