<script setup lang="ts">
const { data: me } = await useFetch('/api/admin/me', { key: 'me' })
if (!me.value) await navigateTo('/admin/login')

async function logout() {
  await $fetch('/api/admin/logout', { method: 'POST' })
  await navigateTo('/admin/login')
}
const nav = [
  { to: '/admin', label: 'Tableau de bord', icon: 'grid', exact: true },
  { to: '/admin/devis', label: 'Demandes de devis', icon: 'inbox' },
  { to: '/admin/flotte', label: 'Flotte', icon: 'car' },
  { to: '/admin/services', label: 'Services', icon: 'briefcase' },
  { to: '/admin/offres', label: 'Offres', icon: 'diamond' },
  { to: '/admin/temoignages', label: 'Témoignages', icon: 'star' },
  { to: '/admin/faq', label: 'FAQ', icon: 'help' },
  { to: '/admin/mediatheque', label: 'Médiathèque', icon: 'image' },
  { to: '/admin/utilisateurs', label: 'Utilisateurs', icon: 'user', adminOnly: true },
  { to: '/admin/parametres', label: 'Paramètres', icon: 'settings' }
]
const visibleNav = computed(() => nav.filter(n => !n.adminOnly || me.value?.role === 'admin'))
</script>

<template>
  <div class="admin-shell">
    <aside class="admin-side">
      <div class="logo"><b>T<span>S</span> EXCLUSIVE</b><small>Administration</small></div>
      <NuxtLink v-for="n in visibleNav" :key="n.to" :to="n.to" :exact-active-class="n.exact ? 'router-link-active' : ''" :active-class="n.exact ? '' : 'router-link-active'">
        <Icon :name="n.icon" :size="18" /> {{ n.label }}
      </NuxtLink>
      <NuxtLink to="/" class="push"><Icon name="home" :size="18" /> Voir le site</NuxtLink>
      <button class="out" @click="logout"><Icon name="out" :size="18" /> Déconnexion</button>
    </aside>
    <main class="admin-main"><slot /></main>
  </div>
</template>
