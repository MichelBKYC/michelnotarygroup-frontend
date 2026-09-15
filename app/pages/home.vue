<script setup lang="ts">
// Keep AppHeader in your existing app shell/layout; this page does not render a navbar.
// Change this destination if you use a dedicated booking page or scheduling provider.
const appointmentUrl = '/contact'
const { open: openContact } = useContactEnquiry()
const services = [
  { name: 'General Notarization', price: 45, description: 'Convenient mobile notarization for your everyday documents.', icon: 'document' },
  { name: 'Powers of Attorney', price: 65, description: 'Mobile appointments for your power of attorney documents.', icon: 'pen' },
  { name: 'Affidavits', price: 45, description: 'Notarization for affidavits and sworn statements.', icon: 'document' },
  { name: 'Hospital & Nursing Facility Visits', price: 85, description: 'Notary appointments at hospitals and nursing facilities.', icon: 'medical' },
  { name: 'Estate Document Notarization', price: 75, description: 'Convenient notarization for your estate documents.', icon: 'pen' },
  { name: 'Vehicle Documents', price: 45, description: 'Mobile notarization for your vehicle paperwork.', icon: 'vehicle' },
  { name: 'Consent Forms', price: 45, description: 'Notarization for consent and authorization forms.', icon: 'document' },
  { name: 'Business Documents', price: 45, description: 'Professional notarization for your business paperwork.', icon: 'business' },
]

const icons: Record<string, string> = {
  document: 'M7 3h10l4 4v22H7z M17 3v6h6 M11 14h8 M11 19h8 M11 24h5',
  pen: 'M18 5H5v24h21V17 M11 23l2-7L25 4l5 5-12 12-7 2z M22 7l5 5',
  medical: 'M3 14L16 3l13 11 M6 12v17h20V12 M13 16h6v4h4v5h-4v4h-6v-4H9v-5h4z',
  vehicle: 'M5 14l3-8h16l3 8 M3 14h26v11H3z M7 25v4 M25 25v4 M7 19h3 M22 19h3',
  business: 'M3 10h26v19H3z M11 10V5h10v5 M3 18h26 M13 17v4h6v-4',
}

useSeoMeta({
  title: 'Mobile Notary Services | The Michel Notary Group',
  description: 'Notary services that come to you. Serving Vinings, Smyrna, Marietta, Cobb County & surrounding areas. Mobile appointments starting at $45.',
})
</script>

<template>
  <main class="notary-home">
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-image" src="../assets/images/notary-hero.png" alt="" width="1536" height="1024" fetchpriority="high" decoding="async" />
      <div class="hero-shade" aria-hidden="true" />
      <div class="container hero-content">
        <div class="hero-copy">
          <h1 id="hero-title">Notary Services<br />That <em>Come to You</em></h1>
          <p class="hero-values">Professional <span>·</span> Convenient <span>·</span> Reliable</p>
          <p class="hero-description">Mobile notary services throughout Vinings, Smyrna, Marietta, Cobb County &amp; surrounding areas.</p>
          <button type="button" class="gold-button" @click="openContact()">
  Contact Us
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 5 7 7-7 7" />
  </svg>
</button>
        </div>
        <p class="hero-motto">People<br />Documents<br />Communities<br />Trusted</p>
      </div>
    </section>

    <section class="services" aria-labelledby="services-title" aria-describedby="pricing-disclaimer">
      <div class="container">
        <div class="section-heading">
          <h2 id="services-title">Mobile Notary Services</h2>
          <p class="service-values">Professional · Convenient · We Come to You</p>
          <p class="service-area">Serving Vinings, Smyrna, Marietta, Cobb County &amp; Surrounding Areas</p>
        </div>
        <ul class="services-grid">
          <li v-for="service in services" :key="service.name" class="service-card">
            <div class="service-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32"><path :d="icons[service.icon]" /></svg>
            </div>
            <h3>{{ service.name }}</h3>
            <p class="service-price"><span>Starting at</span><strong>${{ service.price }}</strong></p>
            <p class="service-description">{{ service.description }}</p>
          </li>
        </ul>
        <div class="services-footer">
          <NuxtLink to="/services" class="gold-button">
            View All Services
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </NuxtLink>
          <p id="pricing-disclaimer">Final pricing varies by service, location and appointment.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.notary-home {
  --navy: #03113c;
  --gold: #f4c450;
  color: var(--navy);
  background: transparent;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
.notary-home *, .notary-home *::before, .notary-home *::after { box-sizing: border-box; }
.notary-home :where(h1, h2, h3, p) { margin: 0; }
.container { width: min(100% - 4rem, 1280px); margin-inline: auto; }
.hero { position: relative; overflow: hidden; background: var(--navy); color: white; }
.hero-image, .hero-shade { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero-image { object-fit: cover; object-position: center 58%; }
.hero-shade { background: linear-gradient(90deg, #03113cf5 0%, #03113ce0 30%, #03113c4d 62%, #03113c0d 100%); }
.hero-content { position: relative; min-height: 440px; padding-block: 44px 58px; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
.hero-copy { max-width: 650px; }
h1 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(2.5rem, 4.4vw, 4.5rem); font-weight: 400; line-height: 1.04; letter-spacing: -.025em; text-wrap: balance; }
h1 em { color: var(--gold); font-weight: 400; }
.hero-values { margin-top: 1.25rem; font-size: .95rem; letter-spacing: .22em; text-transform: uppercase; }
.hero-values span { margin-inline: .4rem; }
.hero-description { max-width: 510px; margin-block: .75rem 1.5rem; font-size: 1.15rem; line-height: 1.5; text-wrap: pretty; }
.gold-button { display: inline-flex; align-items: center; justify-content: center; gap: 1rem; min-height: 56px; padding: .9rem 1.8rem; border: 1px solid #e7b53c; border-radius: 25px; background: linear-gradient(115deg, #ffdb77, #edb840); box-shadow: 0 3px 0 #b88b31, 0 6px 16px #0002; color: #071334; font-size: 1rem; font-weight: 700; line-height: 1.35; letter-spacing: .025em; text-transform: uppercase; text-decoration: none; transition: box-shadow .2s, background .2s; }
.gold-button:hover { background: #ffda78; box-shadow: 0 3px 0 #b88b31, 0 8px 20px #0004; }
.gold-button:focus-visible { outline: 3px solid #3081ff; outline-offset: 5px; }
.gold-button svg { width: 24px; height: 24px; flex: 0 0 24px; fill: none; stroke: currentColor; stroke-width: 2.5; }
.hero-motto { align-self: flex-end; font-size: .75rem; letter-spacing: .25em; line-height: 2; text-transform: uppercase; text-shadow: 0 2px 4px #000; }
.services {
  position: relative;
  padding: 35px 0 60px;
  background: transparent;
  color: #ffffff;
}
.services::before { content: ''; position: absolute; top: -18px; left: 0; width: 100%; height: 28px; background: var(--paper); clip-path: ellipse(65% 100% at 50% 100%); }
.section-heading { position: relative; text-align: center; }
h2 { display: flex; align-items: center; justify-content: center; gap: 2rem; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.8rem, 3vw, 2.7rem); font-weight: 700; line-height: 1.15; text-transform: uppercase; }
h2::before, h2::after { content: ''; height: 1px; width: 80px; flex-shrink: 0; background: #c69b39; }
.service-values, .service-area { color: #45454d; font-size: 1.05rem; }
.service-values { margin-top: .4rem; letter-spacing: .055em; }
.services-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 3rem 1.3rem; margin: 3.8rem 0 1.5rem; padding: 0; list-style: none; }
.service-card { position: relative; display: flex; flex-direction: column; align-items: center; padding: 3.1rem 1.15rem 1.35rem; border: 1.5px solid #d8a832; border-radius: 13px; background: linear-gradient(135deg, #020b28, #061d56 65%, #030c2b); box-shadow: 0 5px 14px #07112e26; color: white; text-align: center; }
.service-icon { position: absolute; top: -29px; left: calc(50% - 32px); display: grid; place-items: center; width: 64px; height: 64px; border: 2px solid #e8b439; border-radius: 50%; background: #031238; box-shadow: 0 3px 9px #0003; color: var(--gold); }
.service-icon svg { width: 34px; height: 34px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
h3 { font-family: Georgia, 'Times New Roman', serif; font-size: 1.28rem; font-weight: 400; line-height: 1.25; min-height: 3.2em; display: flex; align-items: center; justify-content: center; text-wrap: balance; }
.service-price { margin-top: .5rem; }
.service-price span { display: block; color: #e0e2ed; font-size: 1rem; font-style: italic; }
.service-price strong { display: block; color: var(--gold); font-family: Georgia, 'Times New Roman', serif; font-size: 3rem; font-weight: 400; line-height: 1.1; }
.service-description { width: 100%; margin-top: .7rem; padding-top: .85rem; font-size: 1rem; line-height: 1.45; text-wrap: pretty; }
.service-description::before { content: ''; display: block; width: 52%; height: 1px; margin: -.85rem auto .85rem; background: #c89e40; }
.services-footer { text-align: center; }
#pricing-disclaimer { margin-top: 1.1rem; color: #45454d; font-size: .875rem; font-style: italic; }
@media (max-width: 1100px) {
  .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 800px; margin-inline: auto; }
  .hero-copy { max-width: 600px; }
  .hero-motto { display: none; }
  h2 { gap: 1rem; }
  h2::before, h2::after { width: 40px; }
}
@media (max-width: 600px) {
  .container { width: calc(100% - 2rem); }
  .hero-content { min-height: 560px; padding-block: 36px 160px; align-items: flex-start; }
  .hero-image { object-position: 65% center; }
  .hero-shade { background: linear-gradient(180deg, #03113cf5 0%, #03113ceb 40%, #03113c50 78%, #03113c35); }
  h1 { font-size: clamp(2.15rem, 8.3vw, 3rem); }
  .hero-values { font-size: .875rem; letter-spacing: .075em; }
  .hero-values span { margin-inline: .1rem; }
  .hero-description { font-size: 1rem; }
  .gold-button { padding-inline: 1rem; font-size: .875rem; gap: .6rem; max-width: 100%; }
  .hero-copy .gold-button { width: 100%; }
  .services { padding-block: 22px 28px; }
  h2 { font-size: 1.85rem; }
  h2::before, h2::after { display: none; }
  .service-values, .service-area { font-size: 1rem; }
  .service-area { margin-top: .5rem; }
  .services-grid { grid-template-columns: minmax(0, 1fr); max-width: 400px; gap: 3rem; }
  .service-card { padding-inline: 1.5rem; }
  h3 { min-height: auto; font-size: 1.4rem; }
}
@media (prefers-reduced-motion: reduce) { .gold-button { transition: none; } }

.services::before {
  display: none;
}
</style>
