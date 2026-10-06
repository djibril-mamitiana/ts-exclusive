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
  <div class="ts" style="min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px">
    <div>
      <div class="ts-num" style="font-size:clamp(7rem,22vw,16rem)">{{ error?.statusCode || 500 }}</div>
      <h1 class="ts-title" style="margin:18px 0 12px">{{ is404 ? t.notFound : 'Oops' }}</h1>
      <p class="ts-text" style="margin:0 auto 36px">{{ is404 ? t.notFoundText : error?.statusMessage }}</p>
      <button class="ts-btn" @click="home">{{ t.backHome }} <span class="ts-arr" /></button>
    </div>
  </div>
</template>
