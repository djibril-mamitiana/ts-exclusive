<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Services | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'title', label: 'Titre', tr: true },
  { key: 'slug', label: 'Adresse (slug)', hint: 'Sans espaces ni accents, ex : transferts-aeroport' },
  { key: 'subtitle', label: 'Accroche (sous le titre, sur les cartes)', tr: true },
  { key: 'tagline', label: 'Deuxième accroche (facultatif)', tr: true },
  { key: 'description', label: 'Texte du service', type: 'textarea', tr: true, hint: 'Séparez les paragraphes par une ligne vide.' },
  { key: 'bullets_title', label: 'Titre de la liste', tr: true, hint: 'Ex : Votre expérience comprend :' },
  { key: 'bullets', label: 'Points de la liste', type: 'list', tr: true, hint: 'Un point par ligne. Format « Titre : détail » pour afficher un titre et un texte.' },
  { key: 'note', label: 'Note sous la liste (facultatif)', type: 'textarea', tr: true },
  { key: 'closing', label: 'Phrase de clôture', type: 'textarea', tr: true, hint: 'Une deuxième ligne est possible.' },
  { key: 'cta', label: 'Texte du bouton', tr: true, hint: 'Ex : Organiser mon transfert' },
  { key: 'apart', label: 'Service à part (sans numéro, présenté dans son propre bloc)', type: 'bool' },
  { key: 'icon', label: 'Icône', hint: 'plane, car, briefcase, people, key, compass, diamond' },
  { key: 'image', label: 'Image (facultatif)', type: 'image', hint: "Remplace l'image par défaut du service" }
]
</script>

<template>
  <AdminCrud table="services" title="Services" :fields="fields" :columns="['title', 'slug', 'subtitle']" :defaults="{ icon: 'car' }" />
</template>
