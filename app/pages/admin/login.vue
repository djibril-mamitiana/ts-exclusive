<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Connexion | TS EXCLUSIVE', meta: [{ name: 'robots', content: 'noindex' }] })
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function login() {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/admin/login', { method: 'POST', body: { email: email.value, password: password.value } })
    await navigateTo('/admin', { external: true })
  } catch (e: any) {
    error.value = e?.data?.statusMessage || 'Connexion impossible'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-wrap">
    <form class="login-card form" @submit.prevent="login">
      <div class="logo" style="margin-bottom:8px"><b>T<span>S</span> EXCLUSIVE</b><small>Espace administrateur</small></div>
      <label class="f">Email<input v-model="email" type="email" required autocomplete="username"></label>
      <label class="f">Mot de passe<input v-model="password" type="password" required autocomplete="current-password"></label>
      <p v-if="error" class="alert err">{{ error }}</p>
      <button class="btn" :disabled="loading" style="justify-content:center">{{ loading ? 'Connexion…' : 'Se connecter' }}</button>
    </form>
  </div>
</template>
