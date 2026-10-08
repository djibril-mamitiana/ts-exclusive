<script setup lang="ts">
import '~/assets/css/admin.css'
import '~/assets/css/admin2.css'
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
  <div class="login-split">
    <aside class="login-photo">
      <img class="bg" :src="sized(photos.hero, 1600)" alt="" fetchpriority="high">
      <div class="txt">
        <em>Tonga soa.</em>
        <p>Bienvenue dans l'espace de gestion de TS EXCLUSIVE. Devis, flotte, destinations et textes du site, tout est ici.</p>
      </div>
    </aside>
    <section class="login-form">
      <form @submit.prevent="login">
        <a href="/" class="brand"><img src="/img/logo.svg" alt="TS EXCLUSIVE Executive & Private Mobility" width="244" height="56"></a>
        <h1>Content de vous <em>revoir.</em></h1>
        <p class="hint">Connectez-vous pour gérer le site et répondre aux demandes de vos clients.</p>
        <label class="f">Email<input v-model="email" type="email" required autocomplete="username"></label>
        <label class="f">Mot de passe<input v-model="password" type="password" required autocomplete="current-password"></label>
        <p v-if="error" class="alert err">{{ error }}</p>
        <button class="btn" :disabled="loading" style="justify-content:center">{{ loading ? 'Connexion…' : 'Se connecter' }}</button>
        <a href="/" class="back">← Retour au site</a>
      </form>
    </section>
  </div>
</template>
