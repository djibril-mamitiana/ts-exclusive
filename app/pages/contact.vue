<script setup lang="ts">
const { data: settings } = await useSettings()
const { m } = useLang()
const c = computed(() => m.value.contact)
usePageSeo(c.value.seoTitle, c.value.sub, '/img/baobabs.jpg')
</script>

<template>
  <section class="ts-black" style="padding-top:clamp(120px,15vw,200px);padding-bottom:clamp(80px,10vw,160px)">
    <div class="ts-wrap">
      <span class="ts-label">{{ c.label }}</span>
      <h1 class="ts-display" style="margin:18px 0 clamp(48px,8vw,110px);font-size:clamp(2.8rem,8vw,8rem)">{{ c.title }}</h1>
      <div class="ts-split">
        <div class="ts-gap">
          <p class="ts-subtitle" style="opacity:.8">{{ c.sub }}</p>
          <ul class="ts-gap" style="padding-top:24px">
            <li><span class="ts-label" style="display:block;color:var(--champ);opacity:1">{{ c.phone }}</span>{{ settings.phone }}</li>
            <li><span class="ts-label" style="display:block;color:var(--champ);opacity:1">{{ c.whatsapp }}</span><a class="ts-link" :href="waLink(settings.whatsapp)" target="_blank" rel="noopener">{{ c.writeWa }}</a></li>
            <li><span class="ts-label" style="display:block;color:var(--champ);opacity:1">{{ c.email }}</span><a :href="`mailto:${settings.email}`">{{ settings.email }}</a></li>
            <li><span class="ts-label" style="display:block;color:var(--champ);opacity:1">{{ c.address }}</span>{{ settings.address }}</li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </div>
  </section>
</template>
