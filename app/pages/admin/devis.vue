<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Devis | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const statuses = ['Nouveau', 'En cours', 'Devis envoyé', 'Accepté', 'Refusé']
const filter = ref('')
const { data: quotes, refresh } = await useFetch<any[]>('/api/admin/quotes', { query: computed(() => (filter.value ? { status: filter.value } : {})) })
const sel = ref<any>(null)
const fmt = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

async function save() {
  await $fetch(`/api/admin/quotes/${sel.value.id}`, { method: 'PUT', body: { status: sel.value.status, notes: sel.value.notes } })
  sel.value = null
  await refresh()
}
async function remove() {
  if (!confirm('Supprimer cette demande ?')) return
  await $fetch(`/api/admin/quotes/${sel.value.id}`, { method: 'DELETE' })
  sel.value = null
  await refresh()
}
</script>

<template>
  <div class="toolbar">
    <div><h1>Demandes de devis</h1><p class="sub" style="margin:0">{{ quotes?.length || 0 }} demande(s)</p></div>
    <div class="actions">
      <select v-model="filter" style="width:auto"><option value="">Tous les statuts</option><option v-for="s in statuses" :key="s">{{ s }}</option></select>
      <a class="btn sm ghost" href="/api/admin/quotes/export" download>Export CSV</a>
    </div>
  </div>
  <div class="box">
    <table class="tbl">
      <thead><tr><th>Date</th><th>Client</th><th>Trajet</th><th>Services</th><th>Statut</th></tr></thead>
      <tbody>
        <tr v-for="q in quotes" :key="q.id" class="click" @click="sel = { ...q }">
          <td>{{ fmt(q.created_at) }}</td>
          <td><b style="color:var(--ink)">{{ q.name }}</b><br><span class="muted">{{ q.company }}</span></td>
          <td>{{ q.pickup || '-' }} → {{ q.dropoff || '-' }}<br><span class="muted">{{ q.trip_date }} {{ q.trip_time }}</span></td>
          <td>{{ (q.services || []).join(', ') || '-' }}</td>
          <td><span class="badge" :class="q.status">{{ q.status }}</span></td>
        </tr>
        <tr v-if="!quotes?.length"><td colspan="5" class="muted">Aucune demande.</td></tr>
      </tbody>
    </table>
  </div>

  <div v-if="sel" class="drawer-bg" @click.self="sel = null">
    <div class="drawer">
      <h2>Demande #{{ sel.id }}</h2>
      <dl class="kv">
        <dt>Reçue le</dt><dd>{{ fmt(sel.created_at) }}</dd>
        <dt>Nom</dt><dd>{{ sel.name }}</dd>
        <dt>Entreprise</dt><dd>{{ sel.company || '-' }}</dd>
        <dt>Email</dt><dd>{{ sel.email || '-' }}</dd>
        <dt>Téléphone</dt><dd>{{ sel.phone || '-' }}</dd>
        <dt>WhatsApp</dt><dd>{{ sel.whatsapp || '-' }}</dd>
        <dt>Date / heure</dt><dd>{{ sel.trip_date || '-' }} {{ sel.trip_time }}</dd>
        <dt>Départ</dt><dd>{{ sel.pickup || '-' }}</dd>
        <dt>Destination</dt><dd>{{ sel.dropoff || '-' }}</dd>
        <dt>Passagers / bagages</dt><dd>{{ sel.passengers ?? '-' }} / {{ sel.bags ?? '-' }}</dd>
        <dt>Services</dt><dd>{{ (sel.services || []).join(', ') || '-' }}</dd>
        <dt>Message</dt><dd style="white-space:pre-wrap">{{ sel.message || '-' }}</dd>
      </dl>
      <div class="form" style="margin-top:24px">
        <label class="f">Statut<select v-model="sel.status"><option v-for="s in statuses" :key="s">{{ s }}</option></select></label>
        <label class="f">Notes internes<textarea v-model="sel.notes" /></label>
        <div class="actions" style="justify-content:space-between">
          <div class="actions"><button class="btn sm" @click="save">Enregistrer</button><button class="btn sm ghost" @click="sel = null">Fermer</button></div>
          <button class="icon-btn danger" @click="remove">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>
