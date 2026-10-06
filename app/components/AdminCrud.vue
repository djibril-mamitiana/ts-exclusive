<script setup lang="ts">
// Écran CRUD générique : liste + panneau de création/édition.
// Champs avec tr: true => une traduction anglaise est saisie dans la colonne "en".
type Field = { key: string; label: string; type?: 'text' | 'textarea' | 'number' | 'list' | 'bool' | 'image'; hint?: string; tr?: boolean }
const props = defineProps<{ table: string; title: string; fields: Field[]; columns: string[]; defaults?: Record<string, any> }>()

const { data: rows, refresh } = await useFetch<any[]>(`/api/admin/crud/${props.table}`)
const editing = ref<any>(null)
const isNew = computed(() => editing.value && !editing.value.id)
const saving = ref(false)
const uploading = ref(false)
const hasTr = computed(() => props.fields.some(f => f.tr))
const tab = ref<'fr' | 'en'>('fr')

const asText = (f: Field, v: any) => (f.type === 'list' ? (Array.isArray(v) ? v.join('\n') : (v || '')) : (v ?? ''))
const fromText = (f: Field, v: any) =>
  f.type === 'list' ? String(v || '').split('\n').map(s => s.trim()).filter(Boolean)
    : f.type === 'number' ? Number(v) || 0 : f.type === 'bool' ? !!v : v

function open(row?: any) {
  const base: Record<string, any> = { sort: (rows.value?.length || 0) + 1, active: true, ...(props.defaults || {}) }
  const src: Record<string, any> = row ? { ...row } : base
  const en = { ...(src.en || {}) }
  for (const f of props.fields) {
    src[f.key] = asText(f, src[f.key])
    if (f.tr) en[f.key] = asText(f, en[f.key])
  }
  src.en = en
  tab.value = 'fr'
  editing.value = src
}

async function save() {
  saving.value = true
  const body: Record<string, any> = { sort: Number(editing.value.sort) || 0, active: !!editing.value.active }
  const en: Record<string, any> = {}
  for (const f of props.fields) {
    body[f.key] = fromText(f, editing.value[f.key])
    if (f.tr) {
      const v = fromText(f, editing.value.en[f.key])
      if (Array.isArray(v) ? v.length : String(v ?? '').trim()) en[f.key] = v
    }
  }
  if (hasTr.value) body.en = en
  try {
    if (isNew.value) await $fetch(`/api/admin/crud/${props.table}`, { method: 'POST', body })
    else await $fetch(`/api/admin/crud/${props.table}/${editing.value.id}`, { method: 'PUT', body })
    editing.value = null
    await refresh()
  } catch (e: any) {
    alert(e?.data?.statusMessage || "Erreur lors de l'enregistrement")
  } finally {
    saving.value = false
  }
}
async function remove(row: any) {
  if (!confirm('Supprimer cet élément ?')) return
  await $fetch(`/api/admin/crud/${props.table}/${row.id}`, { method: 'DELETE' })
  await refresh()
}
async function toggle(row: any) {
  await $fetch(`/api/admin/crud/${props.table}/${row.id}`, { method: 'PUT', body: { active: !row.active } })
  await refresh()
}
async function upload(e: Event, key: string) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  uploading.value = true
  try {
    const fd = new FormData()
    fd.append('file', file)
    const res = await $fetch<{ url: string }>('/api/admin/media', { method: 'POST', body: fd })
    editing.value[key] = res.url
  } catch (err: any) {
    alert(err?.data?.statusMessage || "Échec de l'envoi")
  } finally {
    uploading.value = false
  }
}
const label = (c: string) => props.fields.find(f => f.key === c)?.label || c
const cell = (r: any, c: string) => (Array.isArray(r[c]) ? r[c].join(', ') : typeof r[c] === 'boolean' ? (r[c] ? 'Oui' : 'Non') : r[c])
const frFields = computed(() => props.fields)
const enFields = computed(() => props.fields.filter(f => f.tr))
const hasEn = (r: any) => r.en && Object.keys(r.en).length > 0
</script>

<template>
  <div class="toolbar">
    <div><h1>{{ title }}</h1><p class="sub" style="margin:0">{{ rows?.length || 0 }} élément(s)</p></div>
    <button class="btn sm" @click="open()">+ Ajouter</button>
  </div>
  <div class="box">
    <table class="tbl">
      <thead><tr><th v-for="c in columns" :key="c">{{ label(c) }}</th><th v-if="hasTr">EN</th><th>Actif</th><th /></tr></thead>
      <tbody>
        <tr v-for="r in rows" :key="r.id">
          <td v-for="c in columns" :key="c" style="max-width:320px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ cell(r, c) }}</td>
          <td v-if="hasTr"><span class="badge" :class="hasEn(r) ? 'Accepté' : ''">{{ hasEn(r) ? 'Oui' : 'Non' }}</span></td>
          <td><button class="icon-btn" @click="toggle(r)">{{ r.active ? 'Visible' : 'Masqué' }}</button></td>
          <td><div class="actions" style="justify-content:flex-end"><button class="icon-btn" @click="open(r)">Modifier</button><button class="icon-btn danger" @click="remove(r)">Supprimer</button></div></td>
        </tr>
        <tr v-if="!rows?.length"><td :colspan="columns.length + 3" class="muted">Aucun élément.</td></tr>
      </tbody>
    </table>
  </div>

  <div v-if="editing" class="drawer-bg" @click.self="editing = null">
    <div class="drawer">
      <h2>{{ isNew ? 'Ajouter' : 'Modifier' }}</h2>
      <div v-if="hasTr" class="filters" style="margin-bottom:18px">
        <button type="button" class="chip" :class="{ on: tab === 'fr' }" @click="tab = 'fr'">Français</button>
        <button type="button" class="chip" :class="{ on: tab === 'en' }" @click="tab = 'en'">English</button>
      </div>
      <form class="form" @submit.prevent="save">
        <template v-if="tab === 'fr'">
          <label v-for="f in frFields" :key="f.key" class="f">
            {{ f.label }}
            <textarea v-if="f.type === 'textarea' || f.type === 'list'" v-model="editing[f.key]" :style="f.type === 'list' ? 'min-height:150px' : ''" />
            <label v-else-if="f.type === 'bool'" style="display:flex;gap:8px;align-items:center;font-weight:400"><input v-model="editing[f.key]" type="checkbox" style="width:auto"> Oui</label>
            <template v-else-if="f.type === 'image'">
              <input v-model="editing[f.key]" placeholder="/api/media/1 ou URL">
              <input type="file" accept="image/*" :disabled="uploading" @change="upload($event, f.key)">
              <img v-if="editing[f.key]" :src="editing[f.key]" alt="" style="max-height:120px;object-fit:contain;align-self:flex-start;border:1px solid var(--line);padding:4px">
            </template>
            <input v-else v-model="editing[f.key]" :type="f.type === 'number' ? 'number' : 'text'">
            <small v-if="f.hint || f.type === 'list'" class="muted" style="font-weight:400">{{ f.hint || 'Une valeur par ligne' }}</small>
          </label>
          <div class="row">
            <label class="f">Ordre<input v-model="editing.sort" type="number"></label>
            <label class="f">Visible sur le site<select v-model="editing.active"><option :value="true">Oui</option><option :value="false">Non</option></select></label>
          </div>
        </template>
        <template v-else>
          <p class="muted" style="font-size:13px">Laisser vide pour afficher le texte français sur la version anglaise.</p>
          <label v-for="f in enFields" :key="f.key" class="f">
            {{ f.label }} (EN)
            <textarea v-if="f.type === 'textarea' || f.type === 'list'" v-model="editing.en[f.key]" :style="f.type === 'list' ? 'min-height:150px' : ''" />
            <input v-else v-model="editing.en[f.key]">
            <small v-if="f.type === 'list'" class="muted" style="font-weight:400">Une valeur par ligne</small>
          </label>
        </template>
        <div class="actions"><button class="btn sm" :disabled="saving || uploading">Enregistrer</button><button type="button" class="btn sm ghost" @click="editing = null">Annuler</button></div>
      </form>
    </div>
  </div>
</template>
