<script setup lang="ts">
import { messages } from '~/i18n/messages'
import { editableTexts } from '~/i18n/editable'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Textes du site | Admin', meta: [{ name: 'robots', content: 'noindex' }] })

const { data: saved, refresh } = await useFetch<Record<string, { fr: string; en: string }>>('/api/texts', { key: 'admin-texts' })

// Texte par défaut lu dans messages.ts via la clé (chemin pointé, indices de tableau acceptés)
const getDefault = (lang: 'fr' | 'en', path: string) =>
  String(path.split('.').reduce((o: any, k) => (o == null ? o : o[k]), messages[lang]) ?? '')

const form = reactive<Record<string, { fr: string; en: string }>>({})
for (const t of editableTexts) form[t.key] = { fr: saved.value?.[t.key]?.fr || '', en: saved.value?.[t.key]?.en || '' }

const groups = [...new Set(editableTexts.map(t => t.group))]
const busy = ref('')
const done = ref('')

async function save(key: string) {
  busy.value = key
  try {
    await $fetch('/api/admin/texts', { method: 'PUT', body: { key, fr: form[key].fr, en: form[key].en } })
    await refresh()
    await refreshNuxtData('texts') // le site public reprend la modification
    done.value = key
    setTimeout(() => (done.value = ''), 1800)
  } catch (e: any) {
    alert(e?.data?.statusMessage || 'Erreur')
  } finally {
    busy.value = ''
  }
}
async function reset(key: string) {
  form[key].fr = ''
  form[key].en = ''
  await save(key)
}
</script>

<template>
  <h1>Textes du site</h1>
  <p class="sub">Modifiez les titres et phrases du site en français et en anglais. Un champ vide affiche le texte d'origine (visible en gris).</p>
  <div v-for="g in groups" :key="g" class="box" style="margin-bottom:20px">
    <h3>{{ g }}</h3>
    <div v-for="t in editableTexts.filter(x => x.group === g)" :key="t.key" style="padding:16px 0;border-top:1px solid var(--line)">
      <div style="font-weight:600;color:var(--ink);font-size:13px;margin-bottom:8px">{{ t.label }}</div>
      <div class="row">
        <label class="f">Français
          <textarea v-if="t.long" v-model="form[t.key].fr" :placeholder="getDefault('fr', t.key)" style="min-height:70px" />
          <input v-else v-model="form[t.key].fr" :placeholder="getDefault('fr', t.key)">
        </label>
        <label class="f">English
          <textarea v-if="t.long" v-model="form[t.key].en" :placeholder="getDefault('en', t.key)" style="min-height:70px" />
          <input v-else v-model="form[t.key].en" :placeholder="getDefault('en', t.key)">
        </label>
      </div>
      <div class="actions" style="margin-top:10px">
        <button class="btn sm" :disabled="busy === t.key" @click="save(t.key)">{{ done === t.key ? 'Enregistré' : 'Enregistrer' }}</button>
        <button class="icon-btn" @click="reset(t.key)">Texte d'origine</button>
      </div>
    </div>
  </div>
</template>
