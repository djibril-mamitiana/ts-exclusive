<script setup lang="ts">
const { data: settings } = await useSettings()
const { data: content } = await useContent()
const { m, lp, lang } = useLang()
const h = computed(() => m.value.home)
usePageSeo(h.value.seoTitle, h.value.seoDesc)

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
  <section class="hero">
    <div class="hero-bg" />
    <div class="hero-panel" />
    <div class="container hero-inner">
      <div class="hero-copy">
        <span class="eyebrow">{{ m.brandTag }}</span>
        <h1 class="h1">{{ h.heroTitle1 }}<em>{{ h.heroTitle2 }}</em></h1>
        <p class="lead">{{ h.heroLead }}</p>
        <div class="hero-actions">
          <NuxtLink :to="lp('/contact')" class="btn">{{ m.nav.quote }} <Icon name="arrow" :size="16" /></NuxtLink>
          <a class="btn ghost" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener"><Icon name="whatsapp" :size="18" /> WhatsApp</a>
        </div>
      </div>
      <aside class="hero-aside">
        <h4>{{ h.asideTitle }}</h4>
        <ul><li v-for="a in h.aside" :key="a">{{ a }}</li></ul>
      </aside>
    </div>
  </section>

  <section class="promise">
    <div class="container promise-grid">
      <div v-for="p in h.promise" :key="p.t" class="promise-item">
        <Icon :name="p.icon" :size="34" />
        <h4>{{ p.t }}</h4>
        <p>{{ p.d }}</p>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container split">
      <div>
        <span class="eyebrow">{{ h.servicesEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ h.servicesTitle }}</h2>
        <p class="lead" style="font-size:1rem">{{ h.servicesText }}</p>
        <NuxtLink :to="lp('/services')" class="link-arrow" style="margin-top:26px">{{ m.common.discoverServices }} <Icon name="arrow" :size="16" /></NuxtLink>
      </div>
      <div class="grid g3">
        <NuxtLink v-for="s in content.services.slice(0, 3)" :key="s.id" :to="lp(`/services/${s.slug}`)" class="service-card">
          <div class="thumb"><img v-if="s.image" :src="s.image" :alt="s.title"><Icon v-else :name="s.icon" :size="54" /></div>
          <div class="body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.subtitle }}</p>
            <span class="link-arrow">{{ m.common.learnMore }} <Icon name="arrow" :size="16" /></span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container prose-two">
      <div class="photo-frame"><img src="/img/interieur.jpg" :alt="lang === 'en' ? 'Premium vehicle interior' : 'Intérieur d\'un véhicule premium'"></div>
      <div>
        <span class="eyebrow">{{ h.promiseEyebrow }}</span>
        <h2 class="h2" style="margin:18px 0">{{ h.promiseTitle1 }} <span class="serif">{{ h.promiseTitle2 }}</span></h2>
        <p class="lead">{{ h.promiseText }}</p>
        <ul class="checks" style="margin-top:22px">
          <li v-for="p in h.promise" :key="p.t"><Icon name="check" :size="18" /> <span><b style="color:var(--ink)">{{ p.t }}</b> · {{ p.d }}</span></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="dest">
    <div class="dest-bg" />
    <div class="container dest-inner">
      <div>
        <span class="eyebrow" style="color:#c5d3e0">{{ h.destEyebrow }}</span>
        <h2 style="margin-top:18px">{{ h.destTitle }}</h2>
        <p>{{ h.destText }}</p>
        <NuxtLink :to="lp('/services/tourisme-conciergerie')" class="btn light">{{ h.destButton }} <Icon name="arrow" :size="16" /></NuxtLink>
      </div>
      <div class="dest-list">
        <ul><li v-for="c in h.cities" :key="c">{{ c }} <Icon class="pin-arrow" name="arrow" :size="18" /></li></ul>
        <svg class="dest-map" viewBox="0 0 120 260" aria-hidden="true">
          <path d="M70 6c10 4 14 14 12 24-1 8 6 14 6 24 0 12-8 16-8 30 0 10 10 14 10 28 0 16-12 22-14 38-2 14 4 24-6 36-8 10-22 12-30 6-10-7-8-20-6-32 2-14-2-22 2-36 3-12 12-20 12-34 0-14-8-20-4-34 3-12 14-18 26-20z" fill="#e5ecf4" stroke="#b8c8d8" stroke-width="1.4" />
          <g fill="#0c2646"><circle cx="66" cy="62" r="5" /><circle cx="88" cy="40" r="5" /><circle cx="56" cy="124" r="5" /><circle cx="66" cy="148" r="5" /></g>
          <path d="M66 62 L56 124 L66 148" stroke="#0c2646" stroke-width="1" stroke-dasharray="3 4" fill="none" />
        </svg>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="center" style="margin-bottom:48px">
        <span class="eyebrow">{{ h.whyEyebrow }}</span>
        <h2 class="h2" style="margin-top:18px">{{ h.whyTitle }}</h2>
      </div>
      <div class="grid g3">
        <div v-for="w in h.why" :key="w[0]" class="num-card"><div class="n">{{ w[0] }}</div><h3>{{ w[1] }}</h3><p>{{ w[2] }}</p></div>
        <div class="num-card" style="background:var(--navy);border-color:var(--navy);display:flex;flex-direction:column;justify-content:space-between;gap:18px">
          <h3 style="color:#fff;font-size:1.4rem">{{ h.whyCta }}</h3>
          <NuxtLink :to="lp('/contact')" class="btn light" style="align-self:flex-start">{{ m.nav.quote }} <Icon name="arrow" :size="16" /></NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="section alt">
    <div class="container center">
      <span class="eyebrow">{{ h.partnersEyebrow }}</span>
      <h2 class="h2" style="margin:18px 0 36px">{{ h.partnersTitle }}</h2>
      <div class="partner-tags"><span v-for="p in h.partners" :key="p">{{ p }}</span></div>
      <NuxtLink :to="lp('/hospitality')" class="btn ghost" style="margin-top:36px">{{ h.partnerButton }}</NuxtLink>
    </div>
  </section>

  <section v-if="content.testimonials.length" class="section">
    <div class="container">
      <div class="center" style="margin-bottom:44px">
        <span class="eyebrow">{{ h.testiEyebrow }}</span>
        <h2 class="h2" style="margin-top:18px">{{ h.testiTitle }}</h2>
      </div>
      <div class="grid g3">
        <figure v-for="t in content.testimonials" :key="t.id" class="quote-card" style="margin:0">
          <blockquote>« {{ t.quote }} »</blockquote>
          <cite><b>{{ t.name }}</b>{{ t.role }}<template v-if="t.org">, {{ t.org }}</template></cite>
        </figure>
      </div>
    </div>
  </section>

  <section v-if="content.faqs.length" class="section" :class="{ alt: !content.testimonials.length }">
    <div class="container" style="max-width:900px">
      <div class="center" style="margin-bottom:40px">
        <span class="eyebrow">{{ h.faqEyebrow }}</span>
        <h2 class="h2" style="margin-top:18px">{{ h.faqTitle }}</h2>
      </div>
      <div class="faq"><details v-for="f in content.faqs" :key="f.id"><summary>{{ f.question }}</summary><p>{{ f.answer }}</p></details></div>
    </div>
  </section>

  <CtaBand :title="h.cta" />
</template>
