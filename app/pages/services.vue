<script setup lang="ts">
import heroImage from '../assets/images/services/hero.webp'
import generalImage from '../assets/images/services/general.webp'
import powerOfAttorneyImage from '../assets/images/services/power-of-attorney.webp'
import affidavitsImage from '../assets/images/services/affidavits.webp'
import hospitalImage from '../assets/images/services/hospital.webp'
import estateImage from '../assets/images/services/estate.webp'
import vehicleImage from '../assets/images/services/vehicle.webp'
import consentImage from '../assets/images/services/consent.webp'
import businessImage from '../assets/images/services/business.webp'

const { open: openContact } = useContactEnquiry()

// Navigation and the site footer remain the responsibility of the existing layout.
const appointmentUrl = '/contact'
const services = [
  {
    "id": "general",
    image: generalImage,
    "name": "General Notarization",
    "price": 45,
    "description": "For individuals who need common documents notarized at a convenient location.",
    "documents": [
      "Acknowledgments",
      "Agreements and contracts",
      "Authorization forms",
      "Sworn statements",
      "And other general documents"
    ],
    "details": "Tell us how many documents and signers will be present so we can plan your appointment.",
    "icon": "M7 3h10l5 5v21H7z M17 3v7h5 M11 15h7 M11 20h7 M11 25h7"
  },
  {
    "id": "power-of-attorney",
    image: powerOfAttorneyImage,
    "name": "Powers of Attorney",
    "price": 65,
    "description": "Notarization for durable, medical, and limited powers of attorney.",
    "documents": [
      "Durable power of attorney",
      "Medical/healthcare power of attorney",
      "Limited power of attorney",
      "Financial power of attorney",
      "And related documents"
    ],
    "details": "Have your completed documents available and let us know about any witness requirements before your visit.",
    "icon": "m6 25 3-8L23 3l6 6-14 14-9 2z M19 7l6 6 M9 17l6 6"
  },
  {
    "id": "affidavits",
    image: affidavitsImage,
    "name": "Affidavits",
    "price": 45,
    "description": "Notarization for affidavits and sworn statements.",
    "documents": [
      "Affidavits of residency",
      "Affidavits of no income",
      "Sworn statements",
      "Name change affidavits",
      "And other oath-based documents"
    ],
    "details": "Share the type of affidavit and the number of signers when requesting your appointment.",
    "icon": "M7 3h10l5 5v21H7z M17 3v7h5 M11 15h7 M11 20h7 M11 25h7"
  },
  {
    "id": "hospital",
    image: hospitalImage,
    "name": "Hospital & Nursing Facility Visits",
    "price": 85,
    "description": "We travel to hospitals, nursing homes, rehabilitation centers, and assisted living facilities.",
    "documents": [
      "Medical powers of attorney",
      "Advance directives",
      "Hospital consent forms",
      "Estate planning documents",
      "And other time-sensitive documents"
    ],
    "details": "Please provide the facility name, visiting hours, access instructions and a contact for coordinating the visit.",
    "icon": "M12 3h8v9h9v8h-9v9h-8v-9H3v-8h9z"
  },
  {
    "id": "estate",
    image: estateImage,
    "name": "Estate Document Notarization",
    "price": 75,
    "description": "Notarization for estate and end-of-life planning documents.",
    "documents": [
      "Wills and trusts",
      "Advance directives",
      "Living wills",
      "Beneficiary designation forms",
      "And related estate documents"
    ],
    "details": "Ask your document preparer about signing and witness instructions, then share those requirements with us.",
    "icon": "M12 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M8 29v-5a8 8 0 0 1 16 0v5z M3 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M23 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0 M2 24v-5q0-5 6-5 M30 24v-5q0-5-6-5"
  },
  {
    "id": "vehicle",
    image: vehicleImage,
    "name": "Vehicle Documents",
    "price": 45,
    "description": "Notarization for vehicle-related documents.",
    "documents": [
      "Title transfers",
      "Bill of sale",
      "Odometer disclosure statements",
      "Lien releases",
      "And other DMV-related documents"
    ],
    "details": "Let us know the document type and issuing state so we can confirm your appointment needs.",
    "icon": "M5 14 8 6h16l3 8 M3 14h26v11H3z M7 25v4 M25 25v4 M7 19h3 M22 19h3"
  },
  {
    "id": "consent",
    image: consentImage,
    "name": "Consent Forms",
    "price": 45,
    "description": "Notarization for consent and authorization forms.",
    "documents": [
      "Minor travel consent forms",
      "Medical consent for minors",
      "School and activity consent forms",
      "Parental authorization forms",
      "And other consent documents"
    ],
    "details": "Let us know who needs to sign and any instructions supplied with the form.",
    "icon": "M7 3h10l5 5v21H7z M17 3v7h5 M11 15h7 M11 20h7 M11 25h7"
  },
  {
    "id": "business",
    image: businessImage,
    "name": "Business Documents",
    "price": 45,
    "description": "Notarization for business and corporate documents.",
    "documents": [
      "Operating agreements",
      "Articles of incorporation",
      "Business contracts",
      "Vendor agreements",
      "And other business paperwork"
    ],
    "details": "Share the number of documents, signers and your preferred office location when you contact us.",
    "icon": "M3 10h26v19H3z M11 10V5h10v5 M3 18h26 M13 17v4h6v-4"
  }
]
useSeoMeta({ title: 'Our Services | The Michel Notary Group', description: 'Professional mobile notary services in Vinings, Smyrna, Marietta, Cobb County and surrounding areas. Explore our services and starting prices.' })
</script>
<template>
<main class="mng-services">
  <section class="mng-hero" aria-labelledby="services-title">
    <img class="mng-hero-image" :src="heroImage" width="1536" height="1024" alt="" fetchpriority="high" />
    <div class="mng-hero-shade" aria-hidden="true"></div>
    <div class="mng-container mng-hero-content">
      <div class="mng-hero-copy"><p class="mng-eyebrow">Trusted. Convenient. Professional.</p><h1 id="services-title">Our Services</h1><span class="mng-rule" aria-hidden="true"></span><p>More than a signature. We provide professional notary services that bring convenience and peace of mind to your most important documents.</p></div>
      <p class="mng-motto">People<br />Documents<br />Communities<br />Trusted</p>
    </div>
  </section>
  <section class="mng-container mng-catalog" aria-labelledby="catalog-title">
    <div class="mng-heading"><h2 id="catalog-title">Our Notary Services</h2><p class="mng-subtitle">Professional. Convenient. We Come to You.</p><p>Explore our services below to learn more about what each service includes, common documents, and how we can help.<br />If you don't see what you need, contact us — we're happy to assist.</p></div>
    <div class="mng-grid">
      <article v-for="service in services" :id="service.id" :key="service.id" class="mng-card" :aria-labelledby="`${service.id}-title`">
        <img class="mng-card-image" :src="service.image" width="1536" height="1024" alt="" loading="lazy" decoding="async" />
        <div class="mng-card-body">
          <div class="mng-card-heading"><span class="mng-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path :d="service.icon" /></svg></span><div><h3 :id="`${service.id}-title`">{{ service.name }}</h3><p class="mng-price">Starting at ${{ service.price }}</p></div></div>
          <p class="mng-description">{{ service.description }}</p>
          <p class="mng-list-label">Common documents include:</p><ul><li v-for="document in service.documents" :key="document">{{ document }}</li></ul>
          <div class="mng-actions">
            <details class="mng-details">
                <summary>Learn More<span class="mng-sr-only"> about {{ service.name }}</span>
                </summary><p>{{ service.details }}</p></details>

<button
    type="button"
    class="mng-button mng-book"
    @click="openContact(service.name)"
  >
    Contact Us
    <span class="mng-sr-only">: {{ service.name }}</span>
  </button>            </div>
        </div>
      </article>
    </div>
    <div class="mng-info-grid">
      <section class="mng-info" aria-labelledby="document-title">
        <span class="mng-info-icon" aria-hidden="true">?</span>
        <div><h2 id="document-title">Don't See Your Document?</h2>
            <p>These are some of the most common documents we notarize, 
                but the list is not exhaustive. If you have a document 
                that's not listed, contact us and we'll be happy to confirm if we can assist.</p>
                <button
  type="button"
  class="mng-contact"
  @click="openContact('Not sure / Other')"
>
  Contact Us
</button>
            </div></section>
      <section class="mng-info" aria-labelledby="area-title">
        <span class="mng-info-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M16 29S5 17 5 12a11 11 0 0 1 22 0c0 5-11 17-11 17Z"/>
                <circle cx="16" cy="12" r="4"/></svg></span><div>
                    <h2 id="area-title">Service Areas &amp; Travel Information</h2>
                    <p>We provide mobile notary services throughout Vinings, Smyrna, 
                        Marietta, Cobb County and surrounding areas. Travel fees may 
                        apply based on distance and location.</p><details class="mng-travel">
                            <summary>View Service Areas &amp; Travel Fees</summary>
                            <p>Share your appointment address and preferred time with 
                                us to confirm availability. Prices shown are starting 
                                mobile-service prices; final pricing varies by service, 
                                location and appointment.</p>
                               <button
  type="button"
  class="mng-contact"
  @click="openContact()"
>
  Contact us for pricing
</button>
                            
                            </details></div></section>
    </div>
  </section>
  <section class="mng-final" aria-labelledby="ready-title"><div class="mng-final-image" :style="{ backgroundImage: `linear-gradient(#07101d40,#07101d40), url(${heroImage})` }" aria-hidden="true"></div><div class="mng-container mng-final-content"><div><h2 id="ready-title">Ready to Schedule Your Notary Appointment?</h2><p>Let us make notarization simple and convenient.</p>
</div>
<button
  type="button"
  class="mng-button mng-appointment"
  @click="openContact()"
>
  Contact Us
  <span aria-hidden="true">›</span>
</button>

<p class="mng-benefits"><span><svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3 M16 7v10l7 4" /></svg><b>Quick Response</b></span><span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 7h24v22H4z M4 13h24 M10 3v8 M22 3v8 M10 18h2 M20 18h2 M10 23h2 M20 23h2" /></svg><b>Flexible Scheduling</b></span><span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 14 8 6h16l3 8 M3 14h26v11H3z M7 25v4 M25 25v4 M7 19h3 M22 19h3" /></svg><b>We Come to You</b></span></p></div></section>
</main>
</template>
<style scoped>
.displaynone { display: none; }
.mng-services{--mng-navy:#03132d;--mng-gold:#f4c450;color:var(--mng-navy);background:radial-gradient(ellipse at 50% 30%,#fff,#faf9f6);font-family:"Open Sans",Arial,sans-serif;line-height:1.42}
.mng-services *,.mng-services *::before,.mng-services *::after{box-sizing:border-box}.mng-services :where(h1,h2,h3,p){margin:0}.mng-container{width:min(1280px,calc(100% - 58px));margin-inline:auto}
.mng-hero{position:relative;overflow:hidden;background:#081321;color:white}.mng-hero-image,.mng-hero-shade{position:absolute;inset:0;width:100%;height:100%}.mng-hero-image{object-fit:cover;object-position:center 50%}.mng-hero-shade{background:linear-gradient(90deg,#050e18eb,#08101d96 45%,#07101a10 85%)}.mng-hero-content{position:relative;min-height:225px;padding:30px 34px 26px;display:flex;align-items:center;gap:20px}.mng-hero-copy{width:440px;max-width:100%;flex-shrink:0}.mng-eyebrow{text-transform:uppercase;letter-spacing:.13em;font-size:.68rem;color:#fff1cc}.mng-services h1,.mng-services h2{font-family:Georgia,"Times New Roman",serif}.mng-services h1{white-space:nowrap;font-size:clamp(2.8rem,5.3vw,4.25rem);line-height:1.06;letter-spacing:.015em;font-weight:700}.mng-rule{display:block;width:55px;height:2px;background:#d7aa42;margin:12px 0}.mng-hero-copy>p:last-child{font-size:.96rem;line-height:1.5;max-width:400px}.mng-motto{font-weight:400;font-family:Georgia,serif;font-size:1.4rem;font-style:italic;line-height:1.2;letter-spacing:.04em;margin-left:auto!important;margin-right:20%!important;align-self:flex-end}
.mng-catalog{padding-top:13px;padding-bottom:14px}.mng-heading{text-align:center;margin-bottom:16px}.mng-heading h2{display:flex;align-items:center;justify-content:center;gap:15px;font-size:1.9rem;font-variant:small-caps;line-height:1.2}.mng-heading h2::before,.mng-heading h2::after{content:"";width:43px;height:1px;background:#c99526}.mng-subtitle{font-weight:600;font-size:.76rem;margin:2px 0 8px!important}.mng-heading>p:last-child{font-size:.75rem;line-height:1.55}.mng-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px 12px}.mng-card{border:1px solid #e4e0d7;border-radius:7px;overflow:hidden;background:linear-gradient(120deg,#fff,#faf9f6);box-shadow:0 2px 5px #00132a09;display:flex;flex-direction:column;scroll-margin-top:100px}.mng-card-image{width:100%;height:96px;object-fit:cover;display:block}.mng-card-body{padding:12px 12px 14px;display:flex;flex-direction:column;flex:1}.mng-card-heading{display:flex;align-items:flex-start;gap:10px;min-height:50px;margin-bottom:7px}.mng-icon{display:grid;place-items:center;flex:0 0 55px;height:55px;border:2px solid #fff;border-radius:50%;background:#00152a;box-shadow:0 1px 0 #c79732;margin-top:-32px;color:var(--mng-gold)}.mng-icon svg{width:32px;height:32px;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}.mng-services h3{font:700 .88rem/1.12 "Open Sans",Arial,sans-serif;margin:1px 0 5px}.mng-price{font:600 .88rem/1.15 Georgia,serif;letter-spacing:.025em;color:#765119}.mng-description{font-size:.75rem;min-height:50px;margin-bottom:10px!important}.mng-list-label{font-weight:700;font-size:.72rem}.mng-card ul{padding-left:19px;margin:5px 0 12px;font-size:.735rem;line-height:1.42}.mng-actions{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-top:auto;position:relative}.mng-button,.mng-details summary,.mng-travel summary,.mng-contact{display:inline-flex;justify-content:center;align-items:center;min-height:33px;border:1px solid #cba04a;border-radius:12px;padding:7px 12px;color:#03132d;font-size:.65rem;line-height:1.25;text-decoration:none;font-weight:700;cursor:pointer}.mng-button{background:linear-gradient(115deg,#ffe49a,#d8a53e);white-space:nowrap}.mng-button:hover{background:#ffe19a}.mng-details summary,.mng-travel summary{border-color:#03132d;background:transparent;list-style:none}.mng-details summary::-webkit-details-marker,.mng-travel summary::-webkit-details-marker{display:none}.mng-details{font-size:.74rem}.mng-details[open]{flex:1}.mng-details[open]+.mng-book{position:absolute;right:0;top:0}.mng-details[open] summary{width:fit-content}.mng-details p{padding-top:13px}.mng-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:13px}.mng-info{display:flex;align-items:flex-start;gap:15px;padding:12px 20px 11px;background:#f2f2f0;border-radius:10px}.mng-info-icon{display:grid;place-items:center;flex:0 0 41px;height:41px;border-radius:50%;background:#00152a;color:var(--mng-gold);font:bold 30px Georgia,serif}.mng-info-icon svg{width:27px;height:27px;fill:var(--mng-gold)}.mng-info-icon circle{fill:#00152a}.mng-info h2{font-size:1.15rem;line-height:1.25;margin-bottom:7px}.mng-info p{font-size:.68rem;line-height:1.4;margin-bottom:8px}.mng-contact{color:white;background:#00152a;border-color:#00152a;padding-inline:18px}.mng-travel summary{padding-inline:18px;min-height:31px}.mng-travel p{margin-top:10px}.mng-travel>a{font-size:.75rem;color:#03132d}
.mng-final{position:relative;background:radial-gradient(ellipse at center,#031932,#001020);color:white;overflow:hidden;border-bottom:1px solid #647080}.mng-final-image{position:absolute;inset:0 auto 0 0;width:25%;background-position:center;background-size:cover;clip-path:polygon(0 0,100% 0,70% 100%,0 100%)}.mng-final-image::after{content:"";position:absolute;inset:0;background:#ebbd56;clip-path:polygon(94% 0,100% 0,70% 100%,64% 100%)}.mng-final-content{position:relative;min-height:136px;padding:24px 8px 20px 24%;display:grid;grid-template-columns:1fr auto;gap:8px 25px;align-items:start}.mng-final h2{font-size:1.42rem;line-height:1.25;font-weight:400}.mng-final-content>div>p{color:#c7ced7;font-size:.84rem;margin-top:10px}.mng-appointment{font-size:.8rem;border-radius:24px;padding:11px 24px;gap:20px;min-height:42px}.mng-appointment span{font-size:1.4rem;line-height:.6}.mng-benefits{grid-column:1/-1;display:flex;justify-content:flex-end;gap:20px;color:var(--mng-gold);font-size:1.4rem;align-items:center}.mng-benefits svg{width:23px;height:23px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.mng-benefits span{display:flex;align-items:center;gap:6px}.mng-benefits b{font:400 .65rem Arial,sans-serif;color:white}.mng-services a:focus-visible,.mng-services summary:focus-visible{outline:3px solid #317ddd;outline-offset:3px}.mng-sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
@media(min-width:1200px){.mng-card-image{height:125px}.mng-card-body{padding:16px}.mng-services h3{font-size:1rem}.mng-description,.mng-card ul{font-size:.84rem}.mng-list-label{font-size:.8rem}.mng-card-heading{min-height:57px}.mng-button,.mng-details summary{font-size:.72rem}.mng-hero-content{min-height:270px}.mng-info p{font-size:.8rem}.mng-info{padding:18px}.mng-heading>p:last-child{font-size:.85rem}.mng-heading{margin-bottom:20px}.mng-catalog{padding-top:20px}}
@media(max-width:950px){.mng-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.mng-card-image{height:145px}.mng-description,.mng-card ul{font-size:.88rem}.mng-list-label{font-size:.85rem}.mng-services h3{font-size:1rem}.mng-card-body{padding:16px}.mng-button,.mng-details summary{font-size:.75rem}.mng-info-grid{gap:15px}.mng-info{padding:16px;gap:10px}.mng-info h2{font-size:1.1rem}.mng-info p{font-size:.8rem}.mng-final-content{padding-left:20%;grid-template-columns:1fr}.mng-benefits{justify-content:flex-start;flex-wrap:wrap;gap:12px}.mng-appointment{width:fit-content}.mng-motto{margin-right:10%!important}}
@media(max-width:560px){.mng-container{width:calc(100% - 30px)}.mng-hero-content{padding:29px 7px;min-height:250px}.mng-hero-copy{max-width:330px;width:100%}.mng-hero-copy>p:last-child{font-size:.88rem}.mng-motto{display:none}.mng-hero-shade{background:linear-gradient(90deg,#05101aec,#081321aa)}.mng-hero-image{object-position:65% center}.mng-services h1{font-size:2.7rem}.mng-heading h2{font-size:1.6rem;gap:8px}.mng-heading h2::before,.mng-heading h2::after{width:20px}.mng-heading>p:last-child{font-size:.8rem}.mng-subtitle{font-size:.77rem}.mng-catalog{padding-top:19px}.mng-grid,.mng-info-grid{grid-template-columns:1fr}.mng-card-image{height:150px}.mng-card-heading{min-height:42px}.mng-description{min-height:0}.mng-card ul{margin-bottom:17px}.mng-actions{justify-content:flex-start;gap:12px}.mng-details[open]+.mng-book{right:0}.mng-info{padding:18px 13px}.mng-final-image{width:20%;opacity:.5}.mng-final-content{padding:26px 5px 23px 15%;gap:15px}.mng-final h2{font-size:1.4rem}.mng-benefits{gap:9px}.mng-benefits b{font-size:.6rem}.mng-benefits span{gap:4px}}
</style>
