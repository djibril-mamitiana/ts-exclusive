<script setup lang="ts">
// Fenêtre « Choisir une image » : parcourt la médiathèque ou envoie une nouvelle image
const emit = defineEmits<{ pick: [url: string]; close: [] }>()
const { data: items, refresh, status } = useLazyFetch<any[]>('/api/admin/media', { key: 'media-picker' })
const uploading = ref(false)

async function upload(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  uploading.value = true
  try {
    emit('pick', await uploadImage(file))
  } catch (err: any) {
    alert(err?.data?.statusMessage || "Échec de l'envoi")
  } finally {
    uploading.value = false
    input.value = ''
  }
}
onMounted(() => {
  refresh()
  const esc = (ev: KeyboardEvent) => ev.key === 'Escape' && emit('close')
  window.addEventListener('keydown', esc)
  onBeforeUnmount(() => window.removeEventListener('keydown', esc))
})
</script>

<template>
  <div class="drawer-bg picker-bg" @click.self="emit('close')">
    <div class="picker" role="dialog" aria-label="Choisir une image">
      <div class="head">
        <div><h2>Choisir une image</h2><p class="muted">Cliquez sur une image de la médiathèque, ou envoyez-en une nouvelle.</p></div>
        <div class="acts">
          <label class="btn sm" style="cursor:pointer">{{ uploading ? 'Envoi…' : 'Envoyer une image' }}<input type="file" accept="image/*" hidden :disabled="uploading" @change="upload"></label>
          <button type="button" class="btn sm ghost" @click="emit('close')">Fermer</button>
        </div>
      </div>
      <div v-if="items?.length" class="list">
        <button v-for="m in items" :key="m.id" type="button" class="it" :title="m.name" @click="emit('pick', m.url)">
          <span class="th"><img :src="m.url" :alt="m.name" loading="lazy"></span>
          <span class="nm">{{ m.name }}</span>
        </button>
      </div>
      <p v-else-if="status === 'pending'" class="muted">Chargement…</p>
      <p v-else class="muted">La médiathèque est vide. Envoyez une première image.</p>
    </div>
  </div>
</template>

<style scoped>
.picker-bg { justify-content: center; align-items: center; padding: 24px; z-index: 300; }
.picker { background: #fff; border-radius: 20px; width: min(960px, 100%); max-height: 88vh; overflow: auto; padding: 28px; }
.head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
.head h2 { margin: 0 0 4px; font-size: 1.3rem; }
.head p { margin: 0; font-size: 13px; }
.acts { display: flex; gap: 10px; }
.list { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }
.it { border: 1px solid var(--line, #dde3ea); border-radius: 12px; background: #fff; padding: 8px; cursor: pointer; text-align: left; font: inherit; transition: border-color .3s, transform .3s; }
.it:hover { border-color: #c9a45c; transform: translateY(-2px); }
.th { display: grid; place-items: center; aspect-ratio: 4 / 3; background: repeating-conic-gradient(#eef1f5 0 25%, #fff 0 50%) 0 0 / 14px 14px; border-radius: 8px; overflow: hidden; }
.th img { max-width: 100%; max-height: 100%; object-fit: contain; }
.nm { display: block; margin-top: 8px; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
</style>
