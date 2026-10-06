<script setup lang="ts">
import type { NuxtError } from '#app'
import { messages } from '~/i18n/messages'

const props = defineProps<{ error: NuxtError }>()
const route = useRoute()
const en = route.path === '/en' || route.path.startsWith('/en/')
const t = messages[en ? 'en' : 'fr'].common
const is404 = computed(() => props.error?.statusCode === 404)
useHead({ title: `${is404.value ? '404' : props.error?.statusCode} | TS EXCLUSIVE`, meta: [{ name: 'robots', content: 'noindex' }] })
const home = () => clearError({ redirect: en ? '/en' : '/' })
</script>

<template>
  <div style="min-height:100vh;display:grid;place-items:center;background:var(--navy);color:#fff;padding:24px;text-align:center">
    <div>
      <div style="font-size:clamp(5rem,16vw,9rem);font-weight:200;line-height:1;color:var(--steel)">{{ error?.statusCode || 500 }}</div>
      <h1 style="color:#fff;font-size:2rem;margin:12px 0">{{ is404 ? t.notFound : 'Oups' }}</h1>
      <p style="color:#c5d3e0;margin-bottom:28px">{{ is404 ? t.notFoundText : error?.statusMessage }}</p>
      <button class="btn light" @click="home">{{ t.backHome }}</button>
    </div>
  </div>
</template>
