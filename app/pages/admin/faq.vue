<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'FAQ | Admin', meta: [{ name: 'robots', content: 'noindex' }] })
const fields = [
  { key: 'question', label: 'Question', tr: true },
  { key: 'answer', label: 'Réponse', type: 'textarea', tr: true }
]
</script>

<template>
  <AdminCrud table="faqs" title="FAQ" :fields="fields" :columns="['question']" />
</template>
