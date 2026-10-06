<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Flotte | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'name', label: 'Nom du véhicule' },
  { key: 'category', label: 'Catégorie', tr: true, hint: 'Ex : Premium SUV, Executive Sedan, Executive Van, 4×4 / Field Mobility' },
  { key: 'tagline', label: 'Accroche', tr: true },
  { key: 'description', label: 'Description', type: 'textarea', tr: true },
  { key: 'passengers', label: 'Passagers', type: 'number' },
  { key: 'bags', label: 'Bagages', type: 'number' },
  { key: 'usage', label: 'Usage recommandé', tr: true },
  { key: 'image', label: 'Photo du véhicule', type: 'image', hint: 'Idéalement un détourage sur fond blanc ou transparent' },
  { key: 'dark_bg', label: 'La photo a un fond noir', type: 'bool', hint: 'Cochez si la photo a un fond noir : elle sera affichée sur un fond sombre' }
]
</script>

<template>
  <AdminCrud table="vehicles" title="Flotte" :fields="fields" :columns="['name', 'category', 'passengers', 'bags']" :defaults="{ passengers: 4, bags: 2 }" />
</template>
