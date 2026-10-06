<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Tableau de bord | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const { data: stats } = await useFetch<any>('/api/admin/stats')
const count = (s: string) => stats.value?.byStatus.find((x: any) => x.status === s)?.n || 0
const fmt = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
</script>

<template>
  <h1>Tableau de bord</h1>
  <p class="sub">Vue d'ensemble de l'activité.</p>
  <div v-if="stats" class="stats">
    <div class="stat"><b>{{ stats.total }}</b><span>Demandes au total</span></div>
    <div class="stat"><b>{{ stats.week }}</b><span>Cette semaine</span></div>
    <div class="stat"><b>{{ count('Nouveau') }}</b><span>À traiter (nouveau)</span></div>
    <div class="stat"><b>{{ stats.vehicles }}</b><span>Véhicules actifs</span></div>
  </div>
  <div v-if="stats" class="box">
    <div class="toolbar"><h3 style="margin:0">Dernières demandes</h3><NuxtLink to="/admin/devis" class="link-arrow">Tout voir <Icon name="arrow" :size="16" /></NuxtLink></div>
    <table class="tbl">
      <thead><tr><th>Date</th><th>Client</th><th>Services</th><th>Statut</th></tr></thead>
      <tbody>
        <tr v-for="q in stats.recent" :key="q.id">
          <td>{{ fmt(q.created_at) }}</td>
          <td>{{ q.name }}<span v-if="q.company" class="muted"> · {{ q.company }}</span></td>
          <td>{{ (q.services || []).join(', ') || '-' }}</td>
          <td><span class="badge" :class="q.status">{{ q.status }}</span></td>
        </tr>
        <tr v-if="!stats.recent.length"><td colspan="4" class="muted">Aucune demande pour le moment.</td></tr>
      </tbody>
    </table>
  </div>
</template>
