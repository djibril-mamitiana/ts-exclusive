<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Partenaires | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'name', label: 'Catégorie ou nom du partenaire', tr: true, hint: 'Ex : Hotels & Resorts, Travel agencies, DMCs' }
]
</script>

<template>
  <AdminCrud table="partners" title="Partenaires et clients" :fields="fields" :columns="['name']" />
</template>
