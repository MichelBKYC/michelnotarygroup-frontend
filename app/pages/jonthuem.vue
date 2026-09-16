<script setup lang="ts">
const { open: openContact } = useContactEnquiry()

useSeoMeta({
  title: 'Jonthue Michel | Georgia Mobile Notary | The Michel Notary Group',
  description: 'Professional mobile notary services with Jonthue Michel, Georgia Notary Public, serving Vinings, Smyrna, Marietta, Cobb County, and surrounding Atlanta metro communities.'
})

const services = [
  { title: 'General Notarization', icon: 'document' },
  { title: 'Affidavits & Oaths', icon: 'pen' },
  { title: 'Consent Forms', icon: 'check' },
  { title: 'Hospital & Nursing Facility Visits', icon: 'care' },
  { title: 'Powers of Attorney', icon: 'authority' },
  { title: 'Business Documents', icon: 'business' },
  { title: 'Vehicle Documents', icon: 'vehicle' }
]
</script>

<template>
  <div class="jonthue-page">
    <section class="jonthue-hero" aria-labelledby="jonthue-title">
      <div class="jonthue-container hero-content">
        <p class="eyebrow light">Jonthue Michel</p>
        <p class="hero-role">Georgia Notary Public <span aria-hidden="true">/</span> Mobile Notary</p>
        <div class="gold-rule" aria-hidden="true" />
        <h1 id="jonthue-title"><span class="sr-only">Jonthue Michel — </span>Mobile Notary Services<br><em>That Come to You</em></h1>
        <p class="hero-description">Professional, convenient, and reliable mobile notary services throughout the Atlanta metro area.</p>
        <button class="jonthue-button gold-button" type="button" @click="openContact()">Schedule an Appointment <span aria-hidden="true">→</span></button>
        <p class="hero-locations">Vinings <span>·</span> Smyrna <span>·</span> Marietta <span>·</span> Cobb County</p>
      </div>
    </section>

    <section class="notary-section section-space" aria-labelledby="notary-heading">
      <div class="jonthue-container">
        <div class="section-heading">
          <p class="eyebrow">Your Mobile Notary</p>
          <h2 id="notary-heading">Professional. Reliable. Convenient.</h2>
        </div>
        <div class="notary-grid">
          <article class="commission-card" aria-label="Jonthue Michel commission details">
            <img class="monogram" src="/jonthue-michel/jm-monogram.svg" alt="" width="100" height="100">
            <h3>Jonthue Michel</h3>
            <p class="card-role">Notary Public</p>
            <div class="gold-rule" aria-hidden="true" />
            <dl>
              <div><dt>Commission No.</dt><dd>W-00762745</dd></div>
              <div><dt>Commission Expires</dt><dd><time datetime="2030-08-28">August 28, 2030</time></dd></div>
            </dl>
            <p class="card-state">Georgia Notary Public</p>
          </article>
          <div class="notary-copy">
            <p class="eyebrow">Personal service. Wherever you are.</p>
            <h3>Professional Mobile<br>Notary Service</h3>
            <p>Jonthue Michel is a Georgia Notary Public providing professional mobile notary services for individuals and businesses.</p>
            <div class="copy-detail"><span aria-hidden="true">✦</span><p>Appointments are designed to provide a convenient and professional notarization experience.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section section-space" aria-labelledby="services-heading">
      <div class="jonthue-container">
        <div class="section-heading"><p class="eyebrow">Notary Services</p><h2 id="services-heading">Professional Notarization<br>When You Need It</h2></div>
        <ul class="services-grid">
          <li v-for="service in services" :key="service.icon" class="service-card">
            <img :src="`jonthue-michel/${service.icon}.svg`" alt="" width="40" height="40" loading="lazy">
            <h3>{{ service.title }}</h3>
          </li>
        </ul>
        <div class="center"><NuxtLink class="jonthue-button outline-button" to="/services">View Services &amp; Pricing <span aria-hidden="true">→</span></NuxtLink></div>
      </div>
    </section>

    <section class="area-section section-space" aria-labelledby="area-heading">
      <div class="jonthue-container area-grid">
        <div class="area-emblem" aria-hidden="true"><span>GA</span><p>Georgia</p></div>
        <div class="area-copy">
          <p class="eyebrow light">Service Area</p>
          <h2 id="area-heading">Across Your Community.<br><em>At Your Convenience.</em></h2>
          <p>Mobile notary appointments are available throughout <strong>Vinings, Smyrna, Marietta, Cobb County, and surrounding Atlanta metro communities</strong>.</p>
          <p class="travel-note">Travel availability and fees vary by location.</p>
        </div>
      </div>
    </section>

    <section class="booking-section section-space" aria-labelledby="booking-heading">
      <div class="jonthue-container section-heading">
        <p class="eyebrow">Ready to Schedule?</p>
        <h2 id="booking-heading">Book With Jonthue Michel</h2>
        <p class="booking-description">Book a mobile notary appointment with Jonthue Michel.</p>
        <button class="jonthue-button gold-button" type="button" @click="openContact()">Schedule with Jonthue <span aria-hidden="true">→</span></button>
        <address class="contact-details"><a href="tel:+18135309965">813-530-9965</a><a href="mailto:themichelnotarygroup@gmail.com">themichelnotarygroup@gmail.com</a></address>
      </div>
    </section>
  </div>
</template>

<style scoped src="../assets/css/jonthue-michel.css"></style>
