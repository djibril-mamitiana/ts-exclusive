<script setup lang="ts">
const route = useRoute()
const { m, lang } = useLang()
const f = computed(() => m.value.form)

const form = reactive<any>({
  name: '', company: '', email: '', phone: '', whatsapp: '',
  trip_date: '', trip_time: '', pickup: '', dropoff: '', passengers: '', bags: '',
  services: [] as string[], message: '', website: ''
})
// Les services sont enregistrés en français côté admin, quelle que soit la langue du formulaire
const frServices = ['Transfert aéroport', 'Executive Mobility', 'Corporate', 'Événement', 'Délégation', 'Long terme']
const options = computed(() => f.value.services.map((label, i) => ({ label, value: frServices[i] })))

if (route.query.vehicule) form.message = `${f.value.vehicle} : ${route.query.vehicule}\n`
if (route.query.service) {
  const q = String(route.query.service)
  const hit = frServices.find(s => s === q) || options.value.find(o => o.label === q)?.value
  if (hit) form.services = [hit]
}

const sending = ref(false)
const done = ref(false)
const error = ref('')

async function submit() {
  error.value = ''
  sending.value = true
  try {
    await $fetch('/api/quotes', { method: 'POST', body: { ...form, lang: lang.value } })
    done.value = true
  } catch (e: any) {
    error.value = e?.data?.statusMessage || f.value.err
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div v-if="done" class="ts-msg">
    <h3 class="ts-subtitle" style="margin-bottom:8px">{{ f.okTitle }}</h3>
    {{ f.okText.replace('{name}', form.name) }}
  </div>
  <form v-else class="ts-form" @submit.prevent="submit">
    <fieldset>
      <legend>{{ f.infoLegend }}</legend>
      <div class="r2">
        <label class="ts-field">{{ f.name }}<input v-model="form.name" required autocomplete="name"></label>
        <label class="ts-field">{{ f.company }}<input v-model="form.company" autocomplete="organization"></label>
      </div>
      <div class="r2">
        <label class="ts-field">{{ f.email }}<input v-model="form.email" type="email" autocomplete="email"></label>
        <label class="ts-field">{{ f.phone }}<input v-model="form.phone" type="tel" autocomplete="tel"></label>
      </div>
      <label class="ts-field">{{ f.whatsapp }}<input v-model="form.whatsapp" type="tel" :placeholder="f.whatsappHint"></label>
    </fieldset>

    <fieldset>
      <legend>{{ f.tripLegend }}</legend>
      <div class="r2">
        <label class="ts-field">{{ f.date }}<input v-model="form.trip_date" type="date"></label>
        <label class="ts-field">{{ f.time }}<input v-model="form.trip_time" type="time"></label>
      </div>
      <div class="r2">
        <label class="ts-field">{{ f.pickup }}<input v-model="form.pickup"></label>
        <label class="ts-field">{{ f.dropoff }}<input v-model="form.dropoff"></label>
      </div>
      <div class="r2">
        <label class="ts-field">{{ f.passengers }}<input v-model="form.passengers" type="number" min="1"></label>
        <label class="ts-field">{{ f.bags }}<input v-model="form.bags" type="number" min="0"></label>
      </div>
    </fieldset>

    <fieldset>
      <legend>{{ f.serviceLegend }}</legend>
      <div class="ts-checks">
        <label v-for="o in options" :key="o.value"><input v-model="form.services" type="checkbox" :value="o.value"><span>{{ o.label }}</span></label>
      </div>
    </fieldset>

    <label class="ts-field">{{ f.message }}<textarea v-model="form.message" :placeholder="f.messageHint" /></label>
    <input v-model="form.website" class="ts-hp" tabindex="-1" autocomplete="off" aria-hidden="true">

    <p v-if="error" class="ts-msg err">{{ error }}</p>
    <div><button class="ts-btn" :disabled="sending" type="submit">{{ sending ? f.sending : f.send }} <span class="ts-arr" /></button></div>
  </form>
</template>
