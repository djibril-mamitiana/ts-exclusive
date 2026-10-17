<script setup lang="ts">
// Carte d'un emplacement d'image : aperçu, état (par défaut / personnalisée) et actions
const props = defineProps<{
  label: string
  src: string
  where?: string
  hint?: string
  custom?: boolean // image choisie dans l'admin (sinon image par défaut)
  resettable?: boolean // peut revenir à l'image par défaut
  contain?: boolean // logo ou détourage : l'image entière est visible sur fond à damier
  dark?: boolean // aperçu sur fond sombre (logo clair)
  busy?: boolean
  muted?: boolean // élément masqué sur le site
  noState?: boolean // pas de pastille « par défaut / personnalisée » (véhicules, destinations)
  link?: string
}>()
const emit = defineEmits<{ file: [file: File]; library: []; reset: [] }>()
const onFile = (e: Event) => {
  const input = e.target as HTMLInputElement
  const f = input.files?.[0]
  if (f) emit('file', f)
  input.value = ''
}
</script>

<template>
  <article class="card" :class="{ busy: props.busy, off: props.muted }">
    <div class="pv" :class="{ contain: props.contain, dark: props.dark }">
      <img :src="props.src" :alt="props.label" loading="lazy">
      <span v-if="props.busy" class="wait">Envoi…</span>
    </div>
    <div class="bd">
      <div class="t">
        <b>{{ props.label }}</b>
        <span v-if="!props.noState" class="badge" :class="props.custom ? 'Accepté' : ''">{{ props.custom ? 'Personnalisée' : 'Par défaut' }}</span>
      </div>
      <p v-if="props.where" class="muted w">{{ props.where }}<template v-if="props.muted"> · masqué sur le site</template></p>
      <p v-if="props.hint" class="muted h">{{ props.hint }}</p>
      <div class="actions">
        <label class="icon-btn pri">Téléverser<input type="file" accept="image/*" hidden :disabled="props.busy" @change="onFile"></label>
        <button type="button" class="icon-btn" :disabled="props.busy" @click="emit('library')">Médiathèque</button>
        <button v-if="props.resettable && props.custom" type="button" class="icon-btn" :disabled="props.busy" @click="emit('reset')">Rétablir</button>
        <NuxtLink v-if="props.link" :to="props.link" target="_blank" class="icon-btn">Voir</NuxtLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card { background: #fff; border: 1px solid var(--line, #dde3ea); border-radius: 18px; overflow: hidden; display: flex; flex-direction: column; transition: box-shadow .5s, border-color .5s; }
.card:hover { box-shadow: 0 22px 36px -30px rgba(12, 38, 70, .55); border-color: #c9a45c; }
.card.off { opacity: .72; }
.pv { position: relative; aspect-ratio: 16 / 10; background: #0c2646; overflow: hidden; }
.pv img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pv.contain { background: repeating-conic-gradient(#eef1f5 0 25%, #fff 0 50%) 0 0 / 16px 16px; }
.pv.contain.dark { background: repeating-conic-gradient(#0c2646 0 25%, #12305a 0 50%) 0 0 / 16px 16px; }
.pv.contain img { object-fit: contain; padding: 14px; }
.wait { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(12, 38, 70, .6); color: #fff; font-weight: 600; letter-spacing: .1em; }
.bd { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.t { display: flex; justify-content: space-between; align-items: center; gap: 10px; }
.t b { font-size: 14px; color: var(--ink, #0c2646); }
.w, .h { margin: 0; font-size: 12px; line-height: 1.5; }
.actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 10px; }
.icon-btn { cursor: pointer; text-decoration: none; display: inline-block; }
.pri { background: #0c2646; color: #fff; border-color: #0c2646; }
.pri:hover { background: #c9a45c; border-color: #c9a45c; color: #0a1830; }
</style>
