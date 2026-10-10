<script setup lang="ts">
const { data: settings } = await useSettings()
const { data: content } = await useContent()
const { m, lp } = useLang()
const h = computed(() => m.value.home)
usePageSeo(h.value.seoTitle, h.value.seoDesc, '/img/baobabs.jpg')

// Chiffres issus des données réelles (flotte, offres)
const stats = computed(() => {
  const v = content.value.vehicles
  const pax = v.length ? Math.max(...v.map((x: any) => Number(x.passengers) || 0)) : 0
  const prices = content.value.offers.map((o: any) => parseInt(String(o.price).replace(/[^0-9]/g, ''), 10)).filter((n: number) => n > 0)
  const from = prices.length ? Math.min(...prices) : 0
  const l = h.value.statLabels
  return [
    { v: String(v.length), l: l[0] }, { v: String(pax), l: l[1] }, { v: '24/7', l: l[2] },
    { v: from >= 1000 ? Math.round(from / 1000) + 'K' : String(from), l: l[3] }
  ].filter(x => x.v && x.v !== '0')
})
// Numéros des tuiles : ils continuent après les services (ex : 6 services, flotte 07, à propos 08)
const nFleet = computed(() => content.value.services.length + 1)
const nAbout = computed(() => content.value.services.length + 2)
const tel = computed(() => 'tel:' + String(settings.value.phone || '').replace(/[^+\d]/g, ''))

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
    <div class="bg"><img v-parallax="0.08" :src="photos.hero" alt="TS EXCLUSIVE executive vehicle" fetchpriority="high"></div>
    <div class="tint" aria-hidden="true" />
    <div class="spot" aria-hidden="true" />
    <div class="ts-wrap in">
      <div class="copy">
        <h1 class="ts-display">{{ h.title1 }}<br><em>{{ h.title2 }}</em></h1>
        <div class="cta">
          <NuxtLink :to="lp('/contact')" class="ts-btn solid">{{ m.nav.quote }} <span class="ts-arr" /></NuxtLink>
          <a class="ts-btn" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
      <NuxtLink :to="lp('/tarifs')" class="offer"><span>{{ h.viewOffer }}</span><i class="ar" /></NuxtLink>
    </div>
    <p class="lead">{{ h.lead }}</p>
    <div class="ts-wrap ts-hstats">
      <div v-for="x in stats" :key="x.l" class="st"><b v-count>{{ x.v }}</b><span>{{ x.l }}</span></div>
    </div>
  </section>

  <section class="ts-pillars">
    <div class="ts-wrap grid5">
      <div v-for="(p, i) in h.pillars" :key="p.t" v-reveal="i * 0.08" class="it">
        <Icon :name="p.icon" :size="30" />
        <h4>{{ p.t }}</h4>
        <p>{{ p.d }}</p>
      </div>
    </div>
  </section>

  <section id="services" class="ts-sec ts-black ts-services">
    <div class="ts-wrap">
      <h2 class="sr-only">{{ h.servicesTitle }}</h2>
      <div v-reveal class="ts-rule2"><i /><span>{{ h.servicesLabel }}</span><i /></div>
      <ServiceMosaic :services="content.services" />
      <div v-reveal class="ts-more"><NuxtLink :to="lp('/services')" class="ts-btn">{{ m.common.discover }} Services <span class="ts-arr" /></NuxtLink></div>
    </div>
  </section>

  <section class="ts-sec ts-light ts-cloud">
    <div class="ts-wrap">
      <div v-reveal class="ts-rule2"><i /><span>{{ h.blockLabel }}</span><i /></div>
      <div class="ts-duo">
        <FleetTile :vehicles="content.vehicles" :n="nFleet" />
        <div class="stack">
          <NuxtLink v-reveal="0.1" :to="lp('/a-propos')" class="ts-tile about" data-cursor-label="Voir">
            <span class="num">{{ String(nAbout).padStart(2, '0') }}</span>
            <div class="bgimg"><img :src="sized(photos.chauffeur, 900)" alt="" loading="lazy" decoding="async"></div>
            <div class="txt">
              <h3>{{ h.aboutName }}</h3>
              <p>{{ h.introText }}</p>
              <span class="go">{{ h.more }} <span class="ts-arr" /></span>
            </div>
          </NuxtLink>
          <a v-reveal="0.2" class="ts-phone" :href="tel" :aria-label="h.callUs">
            <Icon name="phone" :size="20" />
            <span class="sep" />
            <b>{{ settings.phone }}</b>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="ts-black ts-dests">
    <div class="ts-wrap head">
      <div v-reveal class="ts-rule2"><i /><span>{{ h.destLabel }}</span><i /></div>
      <h2 v-reveal="0.1" class="ts-title">{{ h.destTitle1 }} <em>{{ h.destTitle2 }}</em></h2>
    </div>
    <DestinationExplorer />
  </section>

  <section id="experience" class="ts-sec ts-light ts-cloud">
    <div class="ts-wrap ts-route">
      <div class="stick">
        <span v-reveal class="ts-label">{{ h.expLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ h.expTitle }}</h2>
        <div v-reveal="0.2" class="ts-board" aria-hidden="true">
          <img src="/img/logo.svg" alt="" width="130" height="30">
          <b>Tonga soa</b>
          <span>{{ h.board }}</span>
        </div>
      </div>
      <div class="ts-path" data-progress>
        <div v-for="x in h.exp" :key="x[0]" v-reveal class="ts-step">
          <span class="tag">{{ x[0] }}</span>
          <h3>{{ x[1] }}</h3>
          <p>{{ x[2] }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="ts-sec ts-black">
    <div class="ts-wrap">
      <div class="ts-gap" style="margin-bottom:clamp(36px,5vw,70px)">
        <span v-reveal class="ts-label">{{ h.whyLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ h.whyTitle }}</h2>
      </div>
      <ul class="ts-list">
        <li v-for="(w, i) in h.why" :key="w[0]" v-reveal="i * 0.06"><span>{{ w[1] }}</span><small>{{ w[2] }}</small></li>
      </ul>
    </div>
  </section>

  <section v-if="content.partners.length" class="ts-sec ts-light ts-cloud" style="padding-block:clamp(64px,8vw,120px)">
    <div class="ts-wrap">
      <div v-reveal class="ts-rule2"><i /><span>{{ h.trustLabel }}</span><i /></div>
      <div v-reveal="0.1" class="ts-marquee" style="margin-top:34px" aria-label="partners"><div class="track"><span v-for="(p, i) in [...content.partners, ...content.partners]" :key="i">{{ p.name }}</span></div></div>
    </div>
  </section>

  <section v-if="content.testimonials.length" class="ts-sec ts-black">
    <div class="ts-wrap">
      <div class="ts-gap" style="margin-bottom:clamp(36px,5vw,70px)">
        <span v-reveal class="ts-label">{{ h.testiLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ h.testiTitle }}</h2>
      </div>
      <div class="ts-quotes">
        <figure v-for="(t, i) in content.testimonials" :key="t.id" v-reveal="i * 0.1" class="ts-quote">
          <blockquote>« {{ t.quote }} »</blockquote>
          <figcaption><b>{{ t.name }}</b><span v-if="t.role || t.org"> · {{ [t.role, t.org].filter(Boolean).join(', ') }}</span></figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section v-if="content.faqs.length" class="ts-sec ts-light ts-cloud">
    <div class="ts-wrap ts-split">
      <div class="ts-gap">
        <span v-reveal class="ts-label">{{ h.faqLabel }}</span>
        <h2 v-reveal="0.1" class="ts-title">{{ h.faqTitle }}</h2>
      </div>
      <div class="ts-faq">
        <details v-for="f in content.faqs" :key="f.id" v-reveal><summary>{{ f.question }}</summary><p>{{ f.answer }}</p></details>
      </div>
    </div>
  </section>

  <FinalCta :line1="h.finalTitle1" :line2="h.finalTitle2" :image="photos.night" :primary="h.quote" />
</template>
