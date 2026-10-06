<script setup lang="ts">
const { data: settings } = await useSettings()
const { m } = useLang()
const c = computed(() => m.value.contact)
usePageSeo(c.value.seoTitle, c.value.lead)
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">{{ c.eyebrow }}</span>
      <h1>{{ c.title }}</h1>
      <p class="lead">{{ c.lead }}</p>
    </div>
  </section>

  <section class="section alt">
    <div class="container contact-grid">
      <aside class="contact-side">
        <div class="item"><Icon name="phone" :size="22" /><div><small>{{ c.phone }}</small>{{ settings.phone }}</div></div>
        <div class="item"><Icon name="whatsapp" :size="22" /><div><small>{{ c.whatsapp }}</small><a :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">{{ c.writeWa }}</a></div></div>
        <div class="item"><Icon name="mail" :size="22" /><div><small>{{ c.email }}</small><a :href="`mailto:${settings.email}`">{{ settings.email }}</a></div></div>
        <div class="item"><Icon name="pin" :size="22" /><div><small>{{ c.address }}</small>{{ settings.address }}</div></div>
        <p class="muted" style="font-size:14px;margin-top:8px">{{ c.note }}</p>
      </aside>
      <div class="panel"><QuoteForm /></div>
    </div>
  </section>
</template>
