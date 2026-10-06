<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Médiathèque | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const { data: items, refresh } = await useFetch<any[]>('/api/admin/media')
const uploading = ref(false)
const copied = ref('')

async function upload(e: Event) {
  const files = Array.from((e.target as HTMLInputElement).files || [])
  if (!files.length) return
  uploading.value = true
  try {
    for (const file of files) {
      const fd = new FormData()
      fd.append('file', file)
      await $fetch('/api/admin/media', { method: 'POST', body: fd })
    }
    await refresh()
  } catch (err: any) {
    alert(err?.data?.statusMessage || "Échec de l'envoi")
  } finally {
    uploading.value = false
    ;(e.target as HTMLInputElement).value = ''
  }
}
async function remove(m: any) {
  if (!confirm('Supprimer cette image ? Les pages qui l\'utilisent ne l\'afficheront plus.')) return
  await $fetch(`/api/admin/media/${m.id}`, { method: 'DELETE' })
  await refresh()
}
async function copy(m: any) {
  await navigator.clipboard.writeText(m.url)
  copied.value = m.url
  setTimeout(() => (copied.value = ''), 1800)
}
const kb = (n: number) => (n > 1048576 ? (n / 1048576).toFixed(1) + ' Mo' : Math.round(n / 1024) + ' Ko')
</script>

<template>
  <div class="toolbar">
    <div><h1>Médiathèque</h1><p class="sub" style="margin:0">Images utilisables sur le site (5 Mo maximum par fichier).</p></div>
    <label class="btn sm" style="cursor:pointer">{{ uploading ? 'Envoi…' : '+ Ajouter des images' }}<input type="file" accept="image/*" multiple hidden :disabled="uploading" @change="upload"></label>
  </div>
  <div v-if="items?.length" class="grid g4">
    <div v-for="m in items" :key="m.id" class="box" style="padding:12px">
      <div style="aspect-ratio:4/3;background:var(--ice);display:grid;place-items:center;overflow:hidden;margin-bottom:10px"><img :src="m.url" :alt="m.name" style="max-width:100%;max-height:100%;object-fit:contain"></div>
      <div style="font-size:13px;font-weight:600;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ m.name }}</div>
      <div class="muted" style="font-size:12px;margin-bottom:10px">{{ kb(m.size) }} · {{ m.url }}</div>
      <div class="actions"><button class="icon-btn" @click="copy(m)">{{ copied === m.url ? 'Copié' : 'Copier le lien' }}</button><button class="icon-btn danger" @click="remove(m)">Supprimer</button></div>
    </div>
  </div>
  <div v-else class="box muted">Aucune image téléversée pour le moment.</div>
</template>
