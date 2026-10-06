<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Paramètres | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const { data } = await useFetch<Record<string, string>>('/api/admin/settings')
const form = reactive<Record<string, string>>({ ...(data.value || {}) })
const saved = ref(false)

async function save() {
  await $fetch('/api/admin/settings', { method: 'PUT', body: form })
  await refreshNuxtData('settings')
  saved.value = true
  setTimeout(() => (saved.value = false), 2500)
}
</script>

<template>
  <h1>Paramètres du site</h1>
  <p class="sub">Coordonnées affichées sur le site et dans le pied de page.</p>
  <form class="box form" style="max-width:640px" @submit.prevent="save">
    <label class="f">Téléphone<input v-model="form.phone"></label>
    <label class="f">Numéro WhatsApp<input v-model="form.whatsapp" placeholder="261349070665"><small class="muted" style="font-weight:400">Format international, sans + ni espaces.</small></label>
    <label class="f">Email<input v-model="form.email" type="email"></label>
    <label class="f">Adresse<input v-model="form.address"></label>
    <label class="f">LinkedIn (URL)<input v-model="form.linkedin"></label>
    <label class="f">Instagram (URL)<input v-model="form.instagram"></label>
    <label class="f">Facebook (URL)<input v-model="form.facebook"></label>
    <div class="actions"><button class="btn sm">Enregistrer</button><span v-if="saved" class="alert ok" style="padding:8px 14px">Enregistré</span></div>
  </form>
</template>
