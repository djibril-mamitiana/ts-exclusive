<script setup lang="ts">
const { data: settings } = await useSettings()
const { data: content } = await useContent()
const { m, lp } = useLang()
const h = computed(() => m.value.home)
usePageSeo(h.value.seoTitle, h.value.seoDesc, '/img/baobabs.jpg')

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TS EXCLUSIVE',
      description: h.value.seoDesc, telephone: settings.value.phone, email: settings.value.email,
      address: { '@type': 'PostalAddress', streetAddress: settings.value.address, addressCountry: 'MG' }
    })
  }]
})
</script>

<template>
  <section class="ts-hero">
    <div class="bg"><img v-parallax="0.12" :src="sized(photos.hero, 2000)" alt="TS EXCLUSIVE executive vehicle" fetchpriority="high"></div>
    <div class="ts-wrap in">
      <span class="ts-label kicker">{{ h.kicker }}</span>
      <h1 class="ts-display">{{ h.title1 }}<br>{{ h.title2 }}</h1>
      <p class="ts-label sub">{{ h.sub }}</p>
      <div class="cta"><NuxtLink :to="lp('/#intro')" class="ts-btn">{{ h.cta }} <span class="ts-arr" /></NuxtLink></div>
    </div>
    <span class="ts-scroll">{{ h.scroll }}</span>
  </section>

  <section id="intro" class="ts-sec ts-black">
    <div class="ts-wrap">
      <div class="ts-intro">
        <h2 v-reveal class="ts-title" style="font-size:clamp(2.6rem,8vw,8.4rem)">{{ h.introTitle1 }}<br><span style="color:var(--champ)">{{ h.introTitle2 }}</span></h2>
        <p v-reveal="0.2" class="ts-text">{{ h.introText }}</p>
      </div>
      <div v-reveal:line class="ts-line" style="margin-top:clamp(64px,9vw,140px)" />
      <div v-reveal="0.1" class="ts-meta" style="margin-top:28px">
        <div v-for="x in h.meta" :key="x[0]"><span class="ts-label">{{ x[0] }}</span><b>{{ x[1] }}</b></div>
      </div>
    </div>
  </section>

  <section class="ts-sec ts-black" style="padding-top:0">
    <div class="ts-wrap">
      <div class="ts-gap" style="margin-bottom:clamp(24px,4vw,60px)">
        <span v-reveal class="ts-label">{{ h.servicesLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ h.servicesTitle }}</h2>
      </div>
      <ServiceEditorial :services="content.services" :limit="4" />
      <div v-reveal style="margin-top:40px"><NuxtLink :to="lp('/services')" class="ts-btn">{{ m.common.discover }} Services <span class="ts-arr" /></NuxtLink></div>
    </div>
  </section>

  <section class="ts-black">
    <div class="ts-wrap" style="padding-top:clamp(40px,8vw,120px)">
      <span v-reveal class="ts-label">{{ h.fleetLabel }}</span>
      <h2 v-reveal="0.1" class="ts-display" style="margin-top:18px">{{ h.fleetTitle }}</h2>
    </div>
    <FleetShowcase :vehicles="content.vehicles" :limit="3" />
    <div class="ts-wrap ts-light" style="padding-block:60px;text-align:center;background:var(--off)">
      <NuxtLink :to="lp('/flotte')" class="ts-btn" style="color:var(--black)">{{ h.fleetAll }} <span class="ts-arr" /></NuxtLink>
    </div>
  </section>

  <section class="ts-black" style="padding:clamp(80px,10vw,160px) 0 0">
    <div class="ts-wrap" style="margin-bottom:40px">
      <span v-reveal class="ts-label">{{ h.destLabel }}</span>
      <h2 v-reveal="0.1" class="ts-title" style="margin-top:18px">{{ h.destTitle1 }}<br>{{ h.destTitle2 }}</h2>
    </div>
    <DestinationExplorer />
  </section>

  <section id="experience" class="ts-sec ts-light">
    <div class="ts-wrap">
      <div class="ts-gap" style="margin-bottom:clamp(40px,6vw,90px)">
        <span v-reveal class="ts-label">{{ h.expLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ h.expTitle }}</h2>
      </div>
      <div v-for="x in h.exp" :key="x[0]" v-reveal class="ts-exp">
        <span class="ts-num">{{ x[0] }}</span>
        <div><h3>{{ x[1] }}</h3><p class="ts-text" style="opacity:.7">{{ x[2] }}</p></div>
      </div>
    </div>
  </section>

  <section class="ts-sec ts-black" style="padding-block:clamp(72px,10vw,150px)">
    <div class="ts-wrap">
      <span v-reveal class="ts-label">{{ h.trustLabel }}</span>
      <div v-reveal="0.1" class="ts-trust" style="margin-top:34px"><span v-for="t in h.trust" :key="t">{{ t }}</span></div>
    </div>
  </section>

  <FinalCta :line1="h.finalTitle1" :line2="h.finalTitle2" :image="photos.night" :primary="h.quote" />
</template>
