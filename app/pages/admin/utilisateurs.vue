<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Utilisateurs | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const { data: me } = await useFetch<any>('/api/admin/me', { key: 'me' })
const { data: users, refresh, error } = await useFetch<any[]>('/api/admin/users')
const editing = ref<any>(null)
const saving = ref(false)
const msg = ref('')
const isNew = computed(() => editing.value && !editing.value.id)
const fmt = (d: string) => new Date(d).toLocaleDateString('fr-FR')

function open(u?: any) {
  editing.value = u ? { ...u, password: '' } : { email: '', name: '', role: 'editor', password: '' }
  msg.value = ''
}
async function save() {
  saving.value = true
  msg.value = ''
  try {
    if (isNew.value) await $fetch('/api/admin/users', { method: 'POST', body: editing.value })
    else await $fetch(`/api/admin/users/${editing.value.id}`, { method: 'PUT', body: editing.value })
    editing.value = null
    await refresh()
  } catch (e: any) {
    msg.value = e?.data?.statusMessage || 'Erreur'
  } finally {
    saving.value = false
  }
}
async function remove(u: any) {
  if (!confirm(`Supprimer le compte ${u.email} ?`)) return
  try {
    await $fetch(`/api/admin/users/${u.id}`, { method: 'DELETE' })
    await refresh()
  } catch (e: any) {
    alert(e?.data?.statusMessage || 'Erreur')
  }
}
</script>

<template>
  <div class="toolbar">
    <div><h1>Utilisateurs</h1><p class="sub" style="margin:0">Administrateurs : accès complet. Éditeurs : contenu et devis, sans gestion des comptes.</p></div>
    <button v-if="!error" class="btn sm" @click="open()">+ Ajouter</button>
  </div>
  <div v-if="error" class="box alert err">Cette section est réservée aux administrateurs.</div>
  <div v-else class="box">
    <table class="tbl">
      <thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Créé le</th><th /></tr></thead>
      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td>{{ u.name || '-' }}</td><td>{{ u.email }}</td>
          <td><span class="badge">{{ u.role === 'admin' ? 'Administrateur' : 'Éditeur' }}</span></td>
          <td>{{ fmt(u.created_at) }}</td>
          <td><div class="actions" style="justify-content:flex-end"><button class="icon-btn" @click="open(u)">Modifier</button><button v-if="u.id !== me?.id" class="icon-btn danger" @click="remove(u)">Supprimer</button></div></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="editing" class="drawer-bg" @click.self="editing = null">
    <div class="drawer">
      <h2>{{ isNew ? 'Nouvel utilisateur' : 'Modifier le compte' }}</h2>
      <form class="form" @submit.prevent="save">
        <label class="f">Nom<input v-model="editing.name"></label>
        <label class="f">Email<input v-model="editing.email" type="email" required :disabled="!isNew"></label>
        <label class="f">Rôle
          <select v-model="editing.role" :disabled="editing.id === me?.id"><option value="admin">Administrateur</option><option value="editor">Éditeur</option></select>
        </label>
        <label class="f">{{ isNew ? 'Mot de passe' : 'Nouveau mot de passe' }}
          <input v-model="editing.password" type="password" :required="isNew" minlength="8" autocomplete="new-password" :placeholder="isNew ? '' : 'Laisser vide pour ne pas changer'">
          <small class="muted" style="font-weight:400">8 caractères minimum</small>
        </label>
        <p v-if="msg" class="alert err">{{ msg }}</p>
        <div class="actions"><button class="btn sm" :disabled="saving">Enregistrer</button><button type="button" class="btn sm ghost" @click="editing = null">Annuler</button></div>
      </form>
    </div>
  </div>
</template>
