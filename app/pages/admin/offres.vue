<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Offres | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'name', label: "Nom de l'offre", tr: true },
  { key: 'price', label: 'Prix affiché', tr: true, hint: 'Ex : 250 000 Ar / jour' },
  { key: 'target', label: 'Cibles', tr: true },
  { key: 'options', label: 'Options incluses', type: 'list', tr: true },
  { key: 'highlight', label: 'Mettre en avant', type: 'bool' }
]
</script>

<template>
  <AdminCrud table="offers" title="Offres" :fields="fields" :columns="['name', 'price', 'highlight']" />
</template>
