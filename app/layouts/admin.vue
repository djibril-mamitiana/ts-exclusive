<script setup lang="ts">
import '~/assets/css/admin.css'
import '~/assets/css/admin2.css'
import '~/assets/css/admin3.css'
const { data: me } = await useFetch<any>('/api/admin/me', { key: 'me' })
if (!me.value) await navigateTo('/admin/login')

async function logout() {
  await $fetch('/api/admin/logout', { method: 'POST' })
  await navigateTo('/admin/login')
}

const groups = [
  { title: 'Activité', items: [
    { to: '/admin', label: 'Tableau de bord', icon: 'grid', exact: true },
    { to: '/admin/devis', label: 'Demandes de devis', icon: 'inbox' }
  ] },
  { title: 'Contenu du site', items: [
    { to: '/admin/flotte', label: 'Flotte', icon: 'car' },
    { to: '/admin/services', label: 'Services', icon: 'briefcase' },
    { to: '/admin/offres', label: 'Offres et prix', icon: 'diamond' },
    { to: '/admin/destinations', label: 'Destinations', icon: 'pin' },
    { to: '/admin/partenaires', label: 'Partenaires', icon: 'people' },
    { to: '/admin/temoignages', label: 'Témoignages', icon: 'star' },
    { to: '/admin/faq', label: 'FAQ', icon: 'help' },
    { to: '/admin/textes', label: 'Textes du site', icon: 'chat' },
    { to: '/admin/mediatheque', label: 'Médiathèque', icon: 'image' }
  ] },
  { title: 'Réglages', items: [
    { to: '/admin/utilisateurs', label: 'Utilisateurs', icon: 'user', adminOnly: true },
    { to: '/admin/parametres', label: 'Coordonnées', icon: 'settings' }
  ] }
]
const visible = computed(() => groups.map(g => ({ ...g, items: g.items.filter((i: any) => !i.adminOnly || me.value?.role === 'admin') })))
const initial = computed(() => (me.value?.name || me.value?.email || 'A').trim().charAt(0).toUpperCase())
const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-side">
      <a href="/admin" class="brand"><img src="/img/logo-light.svg" alt="TS EXCLUSIVE" width="174" height="40"><small>Espace de gestion</small></a>
      <template v-for="g in visible" :key="g.title">
        <div class="grp">{{ g.title }}</div>
        <NuxtLink v-for="n in g.items" :key="n.to" :to="n.to" :exact-active-class="n.exact ? 'router-link-active' : ''" :active-class="n.exact ? '' : 'router-link-active'">
          <Icon :name="n.icon" :size="17" /> {{ n.label }}
        </NuxtLink>
      </template>
      <div class="me">
        <div class="av">{{ initial }}</div>
        <div><b>{{ me?.name || me?.email }}</b><small>{{ me?.role === 'admin' ? 'Administrateur' : 'Éditeur' }}</small></div>
      </div>
      <div class="me-actions">
        <a href="/" target="_blank" rel="noopener">Voir le site</a>
        <button class="out" @click="logout">Quitter</button>
      </div>
    </aside>
    <main class="admin-main">
      <div class="topbar"><span class="hello">Tonga soa, {{ (me?.name || '').split(' ')[0] || 'bienvenue' }}</span><span>{{ today }}</span></div>
      <div class="content"><slot /></div>
    </main>
  </div>
</template>
