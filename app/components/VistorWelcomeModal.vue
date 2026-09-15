<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const dialog = ref<HTMLDialogElement | null>(null)
let previousOverflow = ''
let scrollLocked = false

function restoreScroll() {
  if (!scrollLocked) return
  document.body.style.overflow = previousOverflow
  scrollLocked = false
}

function continueToWebsite() {
  dialog.value?.close()
  restoreScroll()
}

onMounted(() => {
  // No cookies or saved preference: show on each fresh website load.
  if (!dialog.value || dialog.value.open) return
  previousOverflow = document.body.style.overflow
  dialog.value.showModal()
  document.body.style.overflow = 'hidden'
  scrollLocked = true
})

onBeforeUnmount(restoreScroll)
</script>

<template>
  <dialog
    ref="dialog"
    class="visitor-welcome"
    aria-labelledby="visitor-welcome-title"
    aria-describedby="visitor-welcome-description"
    @close="restoreScroll"
  >
    <div class="welcome-content">
      <p class="welcome-brand">The Michel Notary Group</p>
      <h2 id="visitor-welcome-title">Are you looking for legal advice or notary services?</h2>
      <p id="visitor-welcome-description" class="welcome-intro">
        Choose what you need so we can point you in the right direction.
      </p>

      <div class="welcome-options">
        <section class="welcome-option" aria-labelledby="notary-option-title">
          <h3 id="notary-option-title">Notary services</h3>
          <p>Need a document notarized? Explore our mobile notary services and schedule an appointment.</p>
          <button type="button" class="welcome-button welcome-primary" autofocus @click="continueToWebsite">
            Continue to Notary Services
          </button>
        </section>

        <section class="welcome-option" aria-labelledby="legal-option-title">
          <h3 id="legal-option-title">Legal advice</h3>
          <p>Need help understanding your legal rights or documents? We do not provide legal advice. Search for free legal advice on Google.</p>
          <a class="welcome-button welcome-secondary" href="https://www.google.com/search?q=free+legal+advice">
            Find Free Legal Advice
            <span class="welcome-sr-only"> on Google</span>
          </a>
        </section>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.visitor-welcome {
  --welcome-navy: #03132d;
  --welcome-gold: #f4c450;
  box-sizing: border-box;
  width: min(720px, calc(100% - 32px));
  max-height: calc(100dvh - 32px);
  margin: auto;
  padding: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid #d2a745;
  border-radius: 20px;
  background: #07101f;
  color-scheme: dark;
  color: #f6f3eb;
  box-shadow: 0 24px 90px #0006;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
.visitor-welcome::backdrop { background: rgb(0 0 0 / 92%); backdrop-filter: blur(5px); }
.visitor-welcome *, .visitor-welcome *::before, .visitor-welcome *::after { box-sizing: border-box; }
.welcome-content { padding: 36px; }
.welcome-brand { margin: 0 0 16px; color: #f4c450; text-transform: uppercase; letter-spacing: .12em; font-size: .875rem; font-weight: 700; text-align: center; }
.visitor-welcome h2 { margin: 0; font: 400 clamp(1.7rem, 4vw, 2.2rem)/1.15 Georgia, 'Times New Roman', serif; text-align: center; text-wrap: balance; }
.welcome-intro { margin: 16px 0 26px; color: #bdc6d5; font-size: 1rem; text-align: center; }
.welcome-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.welcome-option { display: flex; flex-direction: column; padding: 22px; border: 1px solid #29364b; border-radius: 12px; background: #0e1b2e; }
.welcome-option h3 { margin: 0 0 10px; font: 400 1.45rem/1.2 Georgia, 'Times New Roman', serif; }
.welcome-option p { margin: 0 0 24px; font-size: 1rem; color: #bdc6d5; }
.welcome-button { display: flex; align-items: center; justify-content: center; width: 100%; min-height: 48px; margin-top: auto; padding: 12px 14px; border: 1px solid var(--welcome-navy); border-radius: 9px; font: 700 .9375rem/1.35 Arial, Helvetica, sans-serif; text-align: center; text-decoration: none; cursor: pointer; }
.welcome-primary { background: linear-gradient(115deg, #ffe092, var(--welcome-gold)); color: var(--welcome-navy); border-color: #c99b35; }
.welcome-primary:hover { background: #ffdc80; }
.welcome-secondary { background: #162840; color: #fff; border-color: #536782; }
.welcome-secondary:hover { background: #12325b; }
.welcome-button:focus-visible { outline: 3px solid #276dd6; outline-offset: 4px; }
.welcome-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (max-width: 600px) {
  .welcome-content { padding: 26px 20px; }
  .welcome-options { grid-template-columns: 1fr; gap: 14px; }
  .welcome-option { padding: 18px; }
  .welcome-option p { margin-bottom: 18px; }
}
</style>
