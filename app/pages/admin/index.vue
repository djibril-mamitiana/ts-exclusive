<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Tableau de bord | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const { data: stats } = await useFetch<any>('/api/admin/stats')
const { data: me } = await useFetch<any>('/api/admin/me', { key: 'me' })

const statuses = [
  { s: 'Nouveau', c: '#8aa4bd' }, { s: 'En cours', c: '#d4b872' }, { s: 'Devis envoyé', c: '#6f5aa8' },
  { s: 'Accepté', c: '#2f8f63' }, { s: 'Refusé', c: '#b0463a' }
]
const count = (s: string) => stats.value?.byStatus.find((x: any) => x.status === s)?.n || 0
const total = computed(() => statuses.reduce((a, x) => a + count(x.s), 0))
const fmt = (d: string) => new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
const first = computed(() => (me.value?.name || '').split(' ')[0] || 'vous')
const hour = new Date().getHours()
const hello = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir'
</script>

<template>
  <section class="dash-hero">
    <div>
      <h1>{{ hello }} {{ first }}, <em>tonga soa.</em></h1>
      <p v-if="count('Nouveau')">Vous avez {{ count('Nouveau') }} nouvelle{{ count('Nouveau') > 1 ? 's' : '' }} demande{{ count('Nouveau') > 1 ? 's' : '' }} de devis à traiter.</p>
      <p v-else>Aucune demande en attente. Le site est à jour, profitez-en pour enrichir le contenu.</p>
    </div>
    <div class="acts">
      <NuxtLink to="/admin/devis" class="btn fill">Voir les devis</NuxtLink>
      <a href="/" target="_blank" rel="noopener" class="btn">Voir le site</a>
    </div>
  </section>

  <div v-if="stats" class="stats">
    <div class="stat todo"><b>{{ count('Nouveau') }}</b><Icon name="inbox" :size="26" /><span>À traiter</span></div>
    <div class="stat"><b>{{ stats.week }}</b><Icon name="clock" :size="26" /><span>Demandes cette semaine</span></div>
    <div class="stat"><b>{{ stats.total }}</b><Icon name="chat" :size="26" /><span>Demandes au total</span></div>
    <div class="stat"><b>{{ stats.vehicles }}</b><Icon name="car" :size="26" /><span>Véhicules actifs</span></div>
  </div>

  <div v-if="stats" class="two">
    <div class="box">
      <div class="toolbar" style="margin-bottom:6px"><h3 style="margin:0">Dernières demandes</h3><NuxtLink to="/admin/devis" class="icon-btn">Tout voir</NuxtLink></div>
      <table v-if="stats.recent.length" class="tbl">
        <thead><tr><th>Date</th><th>Client</th><th>Services</th><th>Statut</th></tr></thead>
        <tbody>
          <tr v-for="q in stats.recent" :key="q.id">
            <td>{{ fmt(q.created_at) }}</td>
            <td><b style="color:var(--adm-ink)">{{ q.name }}</b><span v-if="q.company" class="muted"> · {{ q.company }}</span></td>
            <td>{{ (q.services || []).join(', ') || '-' }}</td>
            <td><span class="badge" :class="q.status">{{ q.status }}</span></td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty"><b>Pas encore de demande</b>Elles apparaîtront ici dès qu'un client remplit le formulaire de devis.</div>
    </div>

    <div style="display:grid;gap:20px;align-content:start">
      <div class="box">
        <h3>Suivi des devis</h3>
        <div class="statusbar" :title="total + ' demande(s)'">
          <i v-for="x in statuses" :key="x.s" :style="{ width: total ? (count(x.s) / total * 100) + '%' : '0%', background: x.c }" />
        </div>
        <div class="legend"><span v-for="x in statuses" :key="x.s" :style="{ '--c': x.c }">{{ x.s }} · {{ count(x.s) }}</span></div>
      </div>
      <div class="box quick">
        <h3 style="margin-bottom:8px">Raccourcis</h3>
        <NuxtLink to="/admin/flotte">Ajouter un véhicule <small>Flotte</small></NuxtLink>
        <NuxtLink to="/admin/textes">Modifier un titre du site <small>Textes</small></NuxtLink>
        <NuxtLink to="/admin/temoignages">Publier un témoignage <small>Avis clients</small></NuxtLink>
        <NuxtLink to="/admin/mediatheque">Ajouter des photos <small>Médiathèque</small></NuxtLink>
        <a href="/api/admin/quotes/export">Exporter les devis <small>CSV</small></a>
      </div>
    </div>
  </div>
</template>
