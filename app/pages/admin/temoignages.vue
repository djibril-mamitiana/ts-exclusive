<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Témoignages | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'name', label: 'Nom' },
  { key: 'role', label: 'Fonction', tr: true },
  { key: 'org', label: 'Organisation' },
  { key: 'quote', label: 'Témoignage', type: 'textarea', tr: true, hint: 'Uniquement de vrais témoignages clients' }
]
</script>

<template>
  <AdminCrud table="testimonials" title="Témoignages" :fields="fields" :columns="['name', 'role', 'org']" />
</template>
