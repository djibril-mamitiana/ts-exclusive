<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Destinations | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'name', label: 'Nom' },
  { key: 'slug', label: 'Identifiant', hint: 'Sans espaces ni accents, ex : nosy-be. Les repères de la carte existent pour antananarivo, nosy-be, morondava et antsirabe.' },
  { key: 'description', label: 'Courte description', type: 'textarea', tr: true, hint: 'Trois phrases courtes, par exemple : Private transfers. Executive mobility. Island experiences.' },
  { key: 'image', label: 'Grande image', type: 'image', hint: 'Format paysage, plein écran' }
]
</script>

<template>
  <AdminCrud table="destinations" title="Destinations" :fields="fields" :columns="['name', 'slug', 'description']" />
</template>
