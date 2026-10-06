<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Services | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'title', label: 'Titre', tr: true },
  { key: 'slug', label: 'Adresse (slug)', hint: 'Sans espaces ni accents, ex : transferts-aeroport' },
  { key: 'subtitle', label: 'Sous-titre', tr: true },
  { key: 'description', label: 'Description', type: 'textarea', tr: true },
  { key: 'bullets', label: 'Points inclus', type: 'list', tr: true },
  { key: 'icon', label: 'Icône', hint: 'plane, car, briefcase, people, key, compass' },
  { key: 'image', label: 'Image (facultatif)', type: 'image', hint: "Remplace l'icône sur les cartes" }
]
</script>

<template>
  <AdminCrud table="services" title="Services" :fields="fields" :columns="['title', 'slug', 'subtitle']" :defaults="{ icon: 'car' }" />
</template>
