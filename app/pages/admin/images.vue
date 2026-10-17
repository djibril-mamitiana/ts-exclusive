<script setup lang="ts">
// Images du site : chaque image affichée sur le site se remplace ici (pages, menu, logo, flotte, services, destinations)
import { imageSlots, serviceImages, photos } from '~/utils/images'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Images du site | Admin', meta: [{ name: 'robots', content: 'noindex' }] })

type Target = { kind: 'slot'; key: string } | { kind: 'row'; table: 'vehicles' | 'services' | 'destinations'; id: number }

const { data: overrides } = await useImages()
const img = useImg()
const { data: vehicles, refresh: refreshVehicles } = await useFetch<any[]>('/api/admin/crud/vehicles', { key: 'adm-vehicles' })
const { data: services, refresh: refreshServices } = await useFetch<any[]>('/api/admin/crud/services', { key: 'adm-services' })
const { data: destinations, refresh: refreshDestinations } = await useFetch<any[]>('/api/admin/crud/destinations', { key: 'adm-destinations' })

const tabs = [
  { k: 'pages', label: 'Pages du site' },
  { k: 'brand', label: 'Menu et marque' },
  { k: 'fleet', label: 'Flotte' },
  { k: 'services', label: 'Services' },
  { k: 'dest', label: 'Destinations' }
]
const tab = ref('pages')
const brandGroups = ['Menu plein écran', 'Logo et partage']

const groups = computed(() => {
  const list = imageSlots.filter(s => (tab.value === 'brand' ? brandGroups.includes(s.group) : !brandGroups.includes(s.group)))
  const out: { title: string; slots: typeof imageSlots }[] = []
  for (const s of list) {
    let g = out.find(x => x.title === s.group)
    if (!g) out.push((g = { title: s.group, slots: [] }))
    g.slots.push(s)
  }
  return out
})
const customCount = (k: string) => {
  if (k === 'pages') return imageSlots.filter(s => !brandGroups.includes(s.group) && overrides.value?.[s.key]).length
  if (k === 'brand') return imageSlots.filter(s => brandGroups.includes(s.group) && overrides.value?.[s.key]).length
  return 0
}
const pageOf: Record<string, string> = { home: '/', services: '/services', flotte: '/flotte', tarifs: '/tarifs', about: '/a-propos', destinations: '/destinations', contact: '/contact', corporate: '/corporate', hospitality: '/hospitality', evenements: '/evenements' }
const linkOf = (key: string) => pageOf[key.split('.')[0]]

const picker = ref<Target | null>(null)
const busy = ref('')
const notice = ref('')
let timer: any
const flash = (msg: string) => { notice.value = msg; clearTimeout(timer); timer = setTimeout(() => (notice.value = ''), 2600) }
const idOf = (t: Target) => (t.kind === 'slot' ? t.key : `${t.table}:${t.id}`)

async function apply(t: Target, url: string) {
  busy.value = idOf(t)
  try {
    if (t.kind === 'slot') {
      await $fetch('/api/admin/images', { method: 'PUT', body: { key: t.key, url } })
      await refreshNuxtData('images')
    } else {
      await $fetch(`/api/admin/crud/${t.table}/${t.id}`, { method: 'PUT', body: { image: url } })
      await ({ vehicles: refreshVehicles, services: refreshServices, destinations: refreshDestinations })[t.table]()
    }
    flash(url ? 'Image mise à jour sur le site' : 'Image d’origine rétablie')
  } catch (e: any) {
    alert(e?.data?.statusMessage || 'Enregistrement impossible')
  } finally {
    busy.value = ''
  }
}
async function onFile(t: Target, file: File) {
  busy.value = idOf(t)
  try {
    const url = await uploadImage(file)
    await apply(t, url)
  } catch (e: any) {
    busy.value = ''
    alert(e?.data?.statusMessage || "Échec de l'envoi")
  }
}
async function onPick(url: string) {
  const t = picker.value
  picker.value = null
  if (t) await apply(t, url)
}

const serviceSrc = (s: any) => s.image || serviceImages[s.slug] || photos.night
const isCut = (v: any) => /\.(png|webp)(\?|$)/i.test(v.image || '')
</script>

<template>
  <div class="toolbar">
    <div><h1>Images du site</h1><p class="sub" style="margin:0">Toutes les images affichées sur le site se remplacent ici. Le changement est immédiat.</p></div>
  </div>

  <div class="box tip">
    <p><b>Comment faire :</b> « Téléverser » envoie une image depuis votre ordinateur ou votre téléphone, « Médiathèque » en reprend une déjà envoyée, « Rétablir » revient à l’image d’origine. Les photos trop lourdes sont réduites automatiquement (JPG, PNG, WEBP, GIF ou SVG). Pour les textes, voir <NuxtLink to="/admin/textes">Textes du site</NuxtLink>.</p>
  </div>

  <div class="filters tabs">
    <button v-for="t in tabs" :key="t.k" type="button" class="chip" :class="{ on: tab === t.k }" @click="tab = t.k">
      {{ t.label }}<small v-if="customCount(t.k)"> · {{ customCount(t.k) }}</small>
    </button>
  </div>

  <template v-if="tab === 'pages' || tab === 'brand'">
    <section v-for="g in groups" :key="g.title" class="grp">
      <h3>{{ g.title }}</h3>
      <div class="cards">
        <AdminImageCard
          v-for="s in g.slots" :key="s.key"
          :label="s.label" :where="s.where" :hint="s.hint" :src="img(s.key)"
          :custom="!!overrides?.[s.key]" resettable :contain="s.key.startsWith('logo.')" :dark="s.key === 'logo.dark'"
          :busy="busy === s.key" :link="linkOf(s.key)"
          @file="onFile({ kind: 'slot', key: s.key }, $event)"
          @library="picker = { kind: 'slot', key: s.key }"
          @reset="apply({ kind: 'slot', key: s.key }, '')" />
      </div>
    </section>
  </template>

  <section v-else-if="tab === 'fleet'" class="grp">
    <h3>Photos des véhicules</h3>
    <p class="muted note">Idéalement une photo détourée (fond transparent, PNG ou WEBP) : elle se fond alors dans le décor du site. Pour changer le nom ou la description, ouvrir <NuxtLink to="/admin/flotte">Flotte</NuxtLink>.</p>
    <div class="cards">
      <AdminImageCard
        v-for="v in vehicles" :key="v.id"
        :label="v.name" :where="v.category" :src="v.image" no-state contain :muted="!v.active"
        :busy="busy === `vehicles:${v.id}`"
        @file="onFile({ kind: 'row', table: 'vehicles', id: v.id }, $event)"
        @library="picker = { kind: 'row', table: 'vehicles', id: v.id }" />
    </div>
    <p v-if="!vehicles?.length" class="muted">Aucun véhicule.</p>
  </section>

  <section v-else-if="tab === 'services'" class="grp">
    <h3>Images des services</h3>
    <p class="muted note">Photo d’une tuile, de la page Services et du menu. Sans image choisie, le site affiche une photo par défaut. Les textes se gèrent dans <NuxtLink to="/admin/services">Services</NuxtLink>.</p>
    <div class="cards">
      <AdminImageCard
        v-for="s in services" :key="s.id"
        :label="s.title" :where="s.apart ? 'Service à part (bloc conciergerie)' : 'Tuile de l’accueil et page Services'" :src="serviceSrc(s)"
        :custom="!!s.image" resettable :muted="!s.active" :link="`/services/${s.slug}`"
        :busy="busy === `services:${s.id}`"
        @file="onFile({ kind: 'row', table: 'services', id: s.id }, $event)"
        @library="picker = { kind: 'row', table: 'services', id: s.id }"
        @reset="apply({ kind: 'row', table: 'services', id: s.id }, '')" />
    </div>
    <p v-if="!services?.length" class="muted">Aucun service.</p>
  </section>

  <section v-else class="grp">
    <h3>Grandes images des destinations</h3>
    <p class="muted note">Image plein écran de la ville, affichée au survol dans la section Destinations et dans le menu. Format paysage. Pour les textes, ouvrir <NuxtLink to="/admin/destinations">Destinations</NuxtLink>.</p>
    <div class="cards">
      <AdminImageCard
        v-for="d in destinations" :key="d.id"
        :label="d.name" where="Section Destinations et menu" :src="d.image" no-state :muted="!d.active"
        :busy="busy === `destinations:${d.id}`"
        @file="onFile({ kind: 'row', table: 'destinations', id: d.id }, $event)"
        @library="picker = { kind: 'row', table: 'destinations', id: d.id }" />
    </div>
    <p v-if="!destinations?.length" class="muted">Aucune destination.</p>
  </section>

  <AdminMediaPicker v-if="picker" @pick="onPick" @close="picker = null" />
  <div v-if="notice" class="toast" role="status">{{ notice }}</div>
</template>

<style scoped>
.tip { margin-bottom: 18px; padding: 16px 22px; border-left: 4px solid #c9a45c; }
.tip p { margin: 0; font-size: 14px; line-height: 1.6; }
.tabs { margin-bottom: 26px; }
.tabs small { opacity: .75; font-weight: 600; }
.grp { margin-bottom: 40px; }
.grp h3 { font-size: 1.15rem; margin: 0 0 14px; padding-bottom: 8px; border-bottom: 1px solid var(--line, #dde3ea); }
.note { margin: -4px 0 16px; font-size: 13px; }
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
.toast { position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); background: #0c2646; color: #fff; padding: 12px 24px; border-radius: 999px; font-size: 14px; font-weight: 600; box-shadow: 0 18px 40px -16px rgba(12, 38, 70, .7); z-index: 400; border-bottom: 3px solid #c9a45c; }
</style>
