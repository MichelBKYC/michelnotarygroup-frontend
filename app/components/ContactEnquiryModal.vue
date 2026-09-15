<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

const { isOpen, suggestedService, close } = useContactEnquiry()
const dialog = ref<HTMLDialogElement | null>(null)
const legalNotice = ref<HTMLElement | null>(null)
const selected = ref<string[]>([])
const services = [
  'General Notarization', 'Powers of Attorney', 'Affidavits',
  'Hospital & Nursing Facility Visits', 'Estate Document Notarization',
  'Vehicle Documents', 'Consent Forms', 'Business Documents', 'Not sure / Other',
]
const form = reactive({ name: '', email: '', phone: '', contactMethod: 'email', city: '', preferredDate: '', message: '', website: '' })
const legalSelected = computed(() => selected.value.includes('Legal advice'))
const sending = ref(false)
const sent = ref(false)
const error = ref('')
const seconds = ref(10)
const searchUrl = 'https://www.google.com/search?q=free+legal+advice'
let timer: ReturnType<typeof setInterval> | undefined
let previousOverflow = ''
let locked = false

function stopTimer() {
  if (timer) clearInterval(timer)
  timer = undefined
}
function unlock() {
  if (locked) document.body.style.overflow = previousOverflow
  locked = false
}
function dismiss() {
  stopTimer()
  close()
  dialog.value?.close()
  unlock()
}
function googleSearch() {
  stopTimer()
  window.location.assign(searchUrl)
}
function returnToNotary() {
  selected.value = selected.value.filter(service => service !== 'Legal advice')
}
function syncCountdown() {
  stopTimer()
  if (!isOpen.value || !legalSelected.value) return
  seconds.value = 10
  const deadline = Date.now() + 10000
  timer = setInterval(() => {
    seconds.value = Math.max(0, Math.ceil((deadline - Date.now()) / 1000))
    if (seconds.value === 0) googleSearch()
  }, 250)
}
async function syncDialog() {
  if (!isOpen.value) {
    stopTimer()
    dialog.value?.close()
    unlock()
    return
  }
  await nextTick()
  if (!isOpen.value || !dialog.value || dialog.value.open) return
  if (services.includes(suggestedService.value) && !selected.value.includes(suggestedService.value)) {
    selected.value.push(suggestedService.value)
  }
  previousOverflow = document.body.style.overflow
  dialog.value.showModal()
  document.body.style.overflow = 'hidden'
  locked = true
  syncCountdown()
}
watch(isOpen, syncDialog)
watch(legalSelected, async () => {
  error.value = ''
  syncCountdown()
  if (legalSelected.value) {
    await nextTick()
    legalNotice.value?.focus()
  }
})
onMounted(syncDialog)
onBeforeUnmount(() => { stopTimer(); unlock() })

async function submit() {
  if (legalSelected.value || sending.value) return
  error.value = ''
  if (!selected.value.length) { error.value = 'Please select a service or “Not sure / Other”.'; return }
  if (!form.email.trim() && !form.phone.trim()) { error.value = 'Please provide an email address or phone number.'; return }
  if (form.contactMethod === 'email' && !form.email.trim()) { error.value = 'Please enter an email address for your preferred contact method.'; return }
  if (form.contactMethod === 'phone' && !form.phone.trim()) { error.value = 'Please enter a phone number for your preferred contact method.'; return }
  sending.value = true
  try {
    await $fetch('/api/contact-enquiry', { method: 'POST', body: { ...form, services: [...selected.value] } })
    sent.value = true
    selected.value = []
    Object.assign(form, { name: '', email: '', phone: '', contactMethod: 'email', city: '', preferredDate: '', message: '', website: '' })
    await nextTick()
    dialog.value?.querySelector<HTMLButtonElement>('.enquiry-done')?.focus()
  } catch {
    error.value = 'Your enquiry could not be sent. Your details are still here—please try again.'
  } finally { sending.value = false }
}
function finish() { dismiss(); sent.value = false }
</script>

<template>
  <dialog ref="dialog" class="enquiry-modal" aria-labelledby="enquiry-title" @cancel.prevent="dismiss" @close="dismiss">
    <div class="enquiry-content">
      <button class="enquiry-close" type="button" aria-label="Close enquiry" @click="dismiss">×</button>
      <p class="enquiry-brand">The Michel Notary Group</p>
      <template v-if="sent">
        <h2 id="enquiry-title">Thank you—we’ve received your enquiry.</h2>
        <p class="enquiry-intro">We’ll contact you using the details you provided. An appointment is confirmed separately.</p>
        <button type="button" class="enquiry-button enquiry-gold enquiry-done" @click="finish">Done</button>
      </template>
      <template v-else>
        <h2 id="enquiry-title">How can we help?</h2>
        <p class="enquiry-intro">Tell us what you need. We’ll follow up with next steps.</p>
        <form @submit.prevent="submit">
          <fieldset class="enquiry-services" :disabled="sending">
            <legend>What do you need help with? <span>Select all that apply.</span></legend>
            <div class="enquiry-checks">
              <label v-for="service in [...services, 'Legal advice']" :key="service">
                <input v-model="selected" type="checkbox" :value="service" />
                <span>{{ service }}</span>
              </label>
            </div>
          </fieldset>

          <section v-if="legalSelected" ref="legalNotice" class="enquiry-legal" tabindex="-1" aria-labelledby="legal-notice-title" role="region">
            <h3 id="legal-notice-title">Looking for legal advice?</h3>
            <p>We provide notarization services. We cannot offer legal advice or interpret your documents.</p>
            <p>Redirecting to Google for “free legal advice” in <strong>{{ seconds }} seconds</strong>.</p>
            <div class="enquiry-legal-actions">
              <button type="button" class="enquiry-button enquiry-gold" @click="googleSearch">Search Google Now</button>
              <button type="button" class="enquiry-button enquiry-outline" @click="returnToNotary">I need notarization instead</button>
            </div>
          </section>

          <fieldset class="enquiry-fields" :disabled="legalSelected || sending" :aria-busy="sending">
            <legend class="enquiry-sr">Your contact details</legend>
            <div class="enquiry-row">
              <label>Full name <span aria-hidden="true">*</span><input v-model="form.name" autocomplete="name" required maxlength="100" /></label>
              <label>Email<input v-model="form.email" type="email" autocomplete="email" :required="form.contactMethod === 'email'" maxlength="254" /></label>
              <label>Phone<input v-model="form.phone" type="tel" autocomplete="tel" :required="form.contactMethod === 'phone'" maxlength="40" /></label>
              <label>Preferred contact method<select v-model="form.contactMethod"><option value="email">Email</option><option value="phone">Phone</option></select></label>
              <label>City / ZIP code<input v-model="form.city" autocomplete="address-level2" maxlength="100" /></label>
              <label>Preferred date <span class="enquiry-optional">(optional)</span><input v-model="form.preferredDate" type="date" /></label>
            </div>
            <label class="enquiry-message">Tell us what you need <span aria-hidden="true">*</span><textarea v-model="form.message" rows="4" required maxlength="5000" placeholder="Document type, number of signers, timing, and any questions." aria-describedby="enquiry-privacy" /></label>
            <p id="enquiry-privacy" class="enquiry-note">Please don’t include Social Security numbers, ID images, or sensitive document details.</p>
            <div class="enquiry-trap" aria-hidden="true"><label>Website<input v-model="form.website" tabindex="-1" autocomplete="off" /></label></div>
            <button class="enquiry-button enquiry-gold enquiry-submit" type="submit">{{ sending ? 'Sending…' : 'Send Inquiry' }}</button>
          </fieldset>
          <p v-if="error" class="enquiry-error" role="alert">{{ error }}</p>
          <p class="enquiry-note enquiry-confirmation">An inquiry does not confirm an appointment.</p>
        </form>
      </template>
    </div>
  </dialog>
</template>

<style scoped>
.enquiry-modal { color-scheme: dark; width: min(760px, calc(100% - 28px)); max-height: calc(100dvh - 28px); margin: auto; padding: 0; overflow-y: auto; overscroll-behavior: contain; border: 1px solid #bd943b; border-radius: 16px; background: #071426; color: #f7f5ef; box-shadow: 0 24px 100px #000a; font: 16px/1.5 Arial, Helvetica, sans-serif; }
.enquiry-modal::backdrop { background: rgb(0 0 0 / 92%); backdrop-filter: blur(5px); }
.enquiry-modal *, .enquiry-modal *::before, .enquiry-modal *::after { box-sizing: border-box; }
.enquiry-content { position: relative; padding: 32px; }
.enquiry-close { position: absolute; top: 12px; right: 12px; display: grid; place-items: center; width: 44px; height: 44px; border: 0; border-radius: 8px; background: transparent; color: #fff; font: 32px/1 Arial, sans-serif; cursor: pointer; }
.enquiry-close:hover { background: #ffffff12; }
.enquiry-brand { margin: 0 38px 24px 0; color: #f4c450; font: 14px/1.5 Georgia, serif; letter-spacing: .08em; text-transform: uppercase; }
.enquiry-modal h2 { margin: 0; text-align: center; color: #fff; font: 400 clamp(28px, 5vw, 38px)/1.2 Georgia, serif; text-wrap: balance; }
.enquiry-intro { margin: 12px 0 28px; color: #bdc6d5; text-align: center; }
.enquiry-modal fieldset { min-width: 0; border: 0; padding: 0; margin: 0; }
.enquiry-services legend { padding: 0; margin-bottom: 12px; font-weight: 700; }
.enquiry-services legend span { display: block; color: #bdc6d5; font-size: 14px; font-weight: 400; }
.enquiry-checks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px 20px; }
.enquiry-checks label { display: flex; gap: 10px; align-items: center; min-height: 44px; cursor: pointer; font-size: 14px; }
.enquiry-checks input { flex: 0 0 19px; width: 19px; height: 19px; margin: 0; accent-color: #f4c450; }
.enquiry-fields { margin-top: 22px !important; padding-top: 22px !important; border-top: 1px solid #354052 !important; }
.enquiry-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 20px; }
.enquiry-row label, .enquiry-message { display: block; color: #e0e5ed; font-size: 14px; }
.enquiry-row input, .enquiry-row select, .enquiry-message textarea { display: block; width: 100%; min-width: 0; min-height: 46px; margin-top: 6px; padding: 10px 12px; border: 1px solid #48556a; border-radius: 5px; background: #091a30; color: #f7f5ef; font: 16px/1.4 Arial, sans-serif; }
.enquiry-message { margin-top: 20px; }
.enquiry-message textarea { resize: vertical; }
.enquiry-modal ::placeholder { color: #9fabbc; opacity: 1; }
.enquiry-optional, .enquiry-note { color: #acb8ca; }
.enquiry-note { font-size: 13px; margin: 10px 0 0; }
.enquiry-button { display: inline-flex; align-items: center; justify-content: center; min-height: 46px; padding: 12px 18px; border: 1px solid #bd943b; border-radius: 6px; font: 700 15px/1.4 Arial, sans-serif; cursor: pointer; text-align: center; }
.enquiry-gold { background: linear-gradient(115deg, #f8d477, #dba93f); color: #071426; }
.enquiry-gold:hover { background: #ffdc80; }
.enquiry-outline { background: #071426; color: #f7f5ef; }
.enquiry-outline:hover { background: #162a44; }
.enquiry-submit { width: 100%; margin-top: 22px; text-transform: uppercase; letter-spacing: .08em; }
.enquiry-confirmation { text-align: center; }
.enquiry-fields:disabled { opacity: .42; }
.enquiry-modal :disabled, .enquiry-modal fieldset:disabled label { cursor: not-allowed; }
.enquiry-legal { margin-top: 20px; padding: 20px; border: 1px solid #bd943b; border-radius: 9px; background: #25231e; }
.enquiry-legal h3 { margin: 0; color: #f4c450; font: 700 18px/1.3 Arial, sans-serif; }
.enquiry-legal p { margin: 10px 0 0; }
.enquiry-legal-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; }
.enquiry-legal-actions button { flex: 1 1 210px; }
.enquiry-error { color: #ffc1bb; margin: 16px 0 0; }
.enquiry-modal :focus-visible { outline: 3px solid #80b7ff; outline-offset: 3px; }
.enquiry-trap, .enquiry-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (max-width: 560px) { .enquiry-content { padding: 24px 18px; } .enquiry-row, .enquiry-checks { grid-template-columns: 1fr; } .enquiry-brand { font-size: 12px; } .enquiry-legal { padding: 16px; } }
</style>
