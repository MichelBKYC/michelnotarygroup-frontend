<script setup lang="ts">
const { open: openContact } = useContactEnquiry()

useSeoMeta({
  title: 'About Us | The Michel Notary Group',
  description:
    'Meet Jonthue and Byrna Michel of The Michel Notary Group. Professional mobile notary services serving Georgia with integrity, accuracy, and care.'
})
</script>

<template>
  <main class="about-page">

    <!-- ==========================================
         HERO
    =========================================== -->
    <section class="about-hero">
      <div class="about-container hero-inner">

        <div class="hero-copy">
          <p class="eyebrow">ABOUT US</p>

          <h1>
            People Behind
            <br />
            <span>the Seal</span>
          </h1>

          <p class="hero-tagline">
            TWO PROFESSIONALS. ONE MISSION.
          </p>

          <p class="hero-description">
            The Michel Notary Group is more than a notary service —
            it’s a commitment to integrity, professionalism, and community.
            We are a husband-and-wife team serving individuals, families,
            and businesses across Georgia with reliable and convenient
            notary services.
          </p>
        </div>

        <div class="hero-statement">
          <div class="georgia-mark">GA</div>

          <blockquote>
            “More than notarizations. We're here to serve people,
            support communities, and help important moments move forward.”
          </blockquote>

          <span>The Michel Notary Group</span>
        </div>

      </div>
    </section>


    <!-- ==========================================
         OUR STORY + TEAM
    =========================================== -->
    <section class="story-section">
      <div class="about-container story-grid">

        <!-- Story -->
        <article class="story-copy">
          <p class="section-label">OUR STORY</p>

          <h2>
            Built on Trust.
            <br />
            Driven by Service.
          </h2>

          <p>
            The Michel Notary Group was created by Jonthue Michel and
            Byrna Michel, a husband-and-wife team with a shared commitment
            to service, accuracy, professionalism, and community.
          </p>

          <p>
            Our different professional backgrounds give us complementary
            perspectives, but our goal is the same: to make the notarization
            process professional, convenient, respectful, and easy to
            understand.
          </p>

          <p>
            We understand that behind every document is a person, a decision,
            a business need, or an important life moment. We approach every
            appointment with care, accuracy, and respect.
          </p>
        </article>


        <!-- Jonthue -->
        <article class="team-card">
          <div class="initial-badge">
            JM
          </div>

          <h3>Jonthue Michel</h3>
          <p class="role">NOTARY PUBLIC</p>

          <div class="small-gold-line"></div>

          <p>
            Jonthue brings a strong background in technology,
            problem solving, process improvement, and customer service.
            His focus is providing clients with an efficient,
            professional, and dependable notary experience.
          </p>
        </article>


        <!-- Byrna -->
        <article class="team-card">
          <div class="initial-badge">
            BM
          </div>

          <h3>Byrna Michel</h3>
          <p class="role">NOTARY PUBLIC</p>

          <div class="small-gold-line"></div>

          <p>
            Byrna's focus is helping clients
            feel informed, respected, and cared for throughout the
            notarization process.
          </p>
        </article>

      </div>
    </section>


    <!-- ==========================================
         VALUES
    =========================================== -->
    <section class="values-section">
      <div class="about-container">

        <div class="values-heading">
          <p class="section-label">OUR VALUES</p>

          <h2>What Guides Our Service</h2>

          <p>
            Professional service built around people, accuracy, and trust.
          </p>
        </div>


        <div class="values-grid">

          <article class="value-card">
            <div class="value-icon">♙</div>
            <h3>People First</h3>
            <p>
              We treat every client with professionalism,
              patience, dignity, and respect.
            </p>
          </article>


          <article class="value-card">
            <div class="value-icon">◇</div>
            <h3>Integrity</h3>
            <p>
              We conduct every appointment honestly and within
              the responsibilities of a Georgia notary public.
            </p>
          </article>


          <article class="value-card">
            <div class="value-icon">✓</div>
            <h3>Accuracy</h3>
            <p>
              We take care to properly complete the notarial act
              and required notarial certificate.
            </p>
          </article>


          <article class="value-card">
            <div class="value-icon">◎</div>
            <h3>Community</h3>
            <p>
              We are proud to provide convenient mobile notary
              services to communities throughout our service area.
            </p>
          </article>

        </div>
      </div>
    </section>


    <!-- ==========================================
         GEORGIA LAW / COMPLIANCE
    =========================================== -->
    <section class="law-section">

      <div class="about-container law-grid">

        <div class="georgia-emblem" aria-hidden="true">
          <div class="ga-outline">
            GA
          </div>

          <span>GEORGIA</span>
        </div>


        <div class="law-content">

          <p class="section-label light-label">
            GEORGIA NOTARY STANDARDS
          </p>

          <h2>
            Committed to Doing It
            <br />
            the Right Way
          </h2>

          <p>
            As Georgia notaries public, we perform notarial acts in
            accordance with applicable Georgia law and the duties of
            the office of notary public.
          </p>

          <p>
            Our responsibility is to properly perform the requested
            notarial act. We do not choose the notarial act for a
            customer, interpret legal documents, prepare legal documents,
            or provide legal advice.
          </p>

          <p class="legal-reference">
            Georgia notaries are governed by Georgia law, including
            O.C.G.A. Title 45, Chapter 17.
          </p>

        </div>


        <div class="law-points">

          <div class="law-point">
            <span>✓</span>

            <p>
              <strong>Georgia Notaries Public</strong>
              Serving within the State of Georgia
            </p>
          </div>


          <div class="law-point">
            <span>✓</span>

            <p>
              <strong>Identity Verification</strong>
              We follow applicable identification requirements.
            </p>
          </div>


          <div class="law-point">
            <span>✓</span>

            <p>
              <strong>Proper Notarial Acts</strong>
              Acknowledgments, jurats, oaths and other authorized acts.
            </p>
          </div>


          <div class="law-point">
            <span>✓</span>

            <p>
              <strong>No Legal Advice</strong>
              We are not attorneys and do not provide legal advice.
            </p>
          </div>

        </div>

      </div>
    </section>


    <!-- ==========================================
         CTA
    =========================================== -->
    <section class="about-cta">

      <div class="about-container cta-inner">

        <div>
          <p class="section-label">READY TO WORK WITH US?</p>

          <h2>We're Here to Help</h2>

          <p>
            Contact us to discuss your notary needs and arrange
            a convenient appointment.
          </p>
        </div>


        <button
          type="button"
          class="cta-button"
          @click="openContact()"
        >
          Contact Us

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>

      </div>

    </section>

  </main>
</template>


<style scoped>

/* ==========================================
   BASE
========================================== */

.about-page {
  --navy: #03113c;
  --navy-dark: #010a25;
  --navy-light: #08245c;

  --gold: #f4c450;
  --gold-dark: #c89227;

  --cream: #faf8f3;
  --text: #101b38;

  color: var(--text);
  background: var(--cream);

  font-family: "Open Sans", Arial, sans-serif;
}

.about-page *,
.about-page *::before,
.about-page *::after {
  box-sizing: border-box;
}

.about-page :where(h1, h2, h3, p, blockquote) {
  margin: 0;
}

.about-container {
  width: min(calc(100% - 4rem), 1280px);
  margin-inline: auto;
}


/* ==========================================
   HERO
========================================== */

.about-hero {
  position: relative;

  color: #fff;

  background:
    radial-gradient(
      circle at 75% 35%,
      rgba(23, 72, 151, 0.45),
      transparent 32%
    ),
    linear-gradient(
      115deg,
      #020b29 0%,
      #041847 55%,
      #010819 100%
    );

  border-bottom: 2px solid var(--gold);
}

.hero-inner {
  min-height: 420px;

  display: grid;
  grid-template-columns: 1.2fr .8fr;

  align-items: center;

  gap: 5rem;

  padding-block: 70px;
}


.eyebrow,
.section-label {
  color: var(--gold-dark);

  font-size: .8rem;
  font-weight: 700;

  letter-spacing: .28em;

  text-transform: uppercase;
}


.eyebrow::after,
.section-label::after {
  content: "";

  display: inline-block;

  width: 55px;
  height: 1px;

  margin-left: 15px;
  vertical-align: middle;

  background: var(--gold-dark);
}


.hero-copy h1 {
  margin-top: 15px;

  font-family: Georgia, "Times New Roman", serif;

  font-size: clamp(3.2rem, 6vw, 5.6rem);

  font-weight: 400;

  line-height: .98;
}


.hero-copy h1 span {
  color: var(--gold);
}


.hero-tagline {
  margin-top: 25px;

  font-size: .9rem;
  font-weight: 600;

  letter-spacing: .25em;
}


.hero-description {
  max-width: 650px;

  margin-top: 18px;

  font-size: 1.1rem;

  line-height: 1.75;

  color: #e7eaf3;
}


.hero-statement {
  text-align: center;
}


.georgia-mark {
  width: 130px;
  height: 130px;

  margin: 0 auto 25px;

  display: grid;
  place-items: center;

  border: 2px solid var(--gold);

  border-radius: 50%;

  color: var(--gold);

  font-family: Georgia, serif;

  font-size: 3rem;

  box-shadow:
    0 0 0 8px rgba(244, 196, 80, .05),
    0 0 40px rgba(244, 196, 80, .12);
}


.hero-statement blockquote {
  max-width: 430px;

  margin-inline: auto;

  font-family: Georgia, serif;

  font-size: 1.3rem;

  font-style: italic;

  line-height: 1.7;
}


.hero-statement span {
  display: block;

  margin-top: 20px;

  color: var(--gold);

  font-size: .85rem;

  letter-spacing: .14em;
}


/* ==========================================
   STORY + TEAM
========================================== */

.story-section {
  padding: 80px 0;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(219, 197, 151, .12),
      transparent 35%
    ),
    #faf8f3;
}


.story-grid {
  display: grid;

  grid-template-columns:
    1.15fr
    1fr
    1fr;

  gap: 28px;
}


.story-copy {
  padding-right: 25px;
}


.story-copy h2,
.values-heading h2,
.law-content h2,
.about-cta h2 {
  margin-top: 10px;

  font-family: Georgia, "Times New Roman", serif;

  font-size: clamp(2rem, 3vw, 3rem);

  line-height: 1.05;
}


.story-copy > p:not(.section-label) {
  margin-top: 22px;

  font-size: 1rem;

  line-height: 1.7;
}


.team-card {
  padding: 32px;

  border: 1px solid rgba(190, 145, 44, .4);

  border-radius: 12px;

  background: #fff;

  box-shadow:
    0 10px 30px rgba(3, 17, 60, .08);
}


.initial-badge {
  width: 86px;
  height: 86px;

  display: grid;
  place-items: center;

  margin-bottom: 25px;

  border: 2px solid var(--gold);

  border-radius: 50%;

  color: var(--gold);

  background:
    linear-gradient(
      145deg,
      #020b29,
      #09235b
    );

  font-family: Georgia, serif;

  font-size: 2rem;
}


.team-card h3 {
  color: var(--navy);

  font-family: Georgia, serif;

  font-size: 1.75rem;
}


.role {
  margin-top: 5px !important;

  color: var(--gold-dark);

  font-size: .75rem;

  font-weight: 700;

  letter-spacing: .25em;
}


.small-gold-line {
  width: 45px;
  height: 2px;

  margin: 16px 0;

  background: var(--gold-dark);
}


.team-card > p:last-child {
  line-height: 1.7;
}


/* ==========================================
   VALUES
========================================== */

.values-section {
  padding: 65px 0;

  background: #f3f0e9;

  border-top: 1px solid #e4ded2;
  border-bottom: 1px solid #e4ded2;
}


.values-heading {
  text-align: center;
}


.values-heading > p:last-child {
  margin-top: 12px;

  color: #596071;
}


.values-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  margin-top: 45px;
}


.value-card {
  padding: 15px 30px;

  text-align: center;

  border-right:
    1px solid rgba(190, 145, 44, .35);
}


.value-card:last-child {
  border-right: none;
}


.value-icon {
  color: var(--gold-dark);

  font-size: 2.7rem;

  line-height: 1;
}


.value-card h3 {
  margin-top: 18px;

  color: var(--navy);

  font-family: Georgia, serif;

  font-size: 1.2rem;

  text-transform: uppercase;
}


.value-card p {
  margin-top: 10px;

  color: #424a5c;

  line-height: 1.6;
}


/* ==========================================
   GEORGIA LAW
========================================== */

.law-section {
  padding: 75px 0;

  color: white;

  background:
    radial-gradient(
      circle at 15% 50%,
      rgba(22, 77, 151, .45),
      transparent 30%
    ),
    linear-gradient(
      120deg,
      #020a24,
      #041946 55%,
      #010719
    );
}


.law-grid {
  display: grid;

  grid-template-columns:
    .65fr
    1.4fr
    1fr;

  align-items: center;

  gap: 50px;
}


.georgia-emblem {
  text-align: center;

  color: var(--gold);
}


.ga-outline {
  width: 170px;
  height: 170px;

  margin-inline: auto;

  display: grid;
  place-items: center;

  border:
    2px solid var(--gold);

  border-radius:
    42% 58% 52% 48% /
    55% 42% 58% 45%;

  font-family: Georgia, serif;

  font-size: 3.5rem;

  background:
    rgba(244, 196, 80, .05);

  box-shadow:
    0 0 30px
    rgba(244, 196, 80, .1);
}


.georgia-emblem > span {
  display: block;

  margin-top: 15px;

  font-size: .8rem;

  letter-spacing: .3em;
}


.light-label {
  color: var(--gold);
}


.law-content h2 {
  color: #fff;
}


.law-content > p:not(.section-label) {
  margin-top: 18px;

  color: #e4e8f1;

  line-height: 1.7;
}


.legal-reference {
  color: var(--gold) !important;

  font-size: .9rem;
}


.law-points {
  padding-left: 35px;

  border-left:
    1px solid rgba(244, 196, 80, .55);
}


.law-point {
  display: flex;

  gap: 16px;

  padding: 13px 0;
}


.law-point > span {
  flex: 0 0 30px;

  width: 30px;
  height: 30px;

  display: grid;
  place-items: center;

  border: 1px solid var(--gold);

  border-radius: 50%;

  color: var(--gold);
}


.law-point strong {
  display: block;

  margin-bottom: 3px;

  color: var(--gold);

  font-size: .9rem;
}


.law-point p {
  color: #e4e8f1;

  line-height: 1.5;
}


/* ==========================================
   CTA
========================================== */

.about-cta {
  padding: 55px 0;

  background:
    linear-gradient(
      100deg,
      #faf8f3,
      #f1e7d4
    );
}


.cta-inner {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 40px;
}


.cta-inner > div > p:last-child {
  margin-top: 10px;

  color: #515866;
}


.cta-button {
  min-width: 210px;

  min-height: 58px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 15px;

  padding: 15px 28px;

  border: 1px solid #d8a52d;

  border-radius: 12px;

  background:
    linear-gradient(
      115deg,
      #ffdb77,
      #eeb640
    );

  color: #071334;

  font: inherit;

  font-weight: 700;

  text-transform: uppercase;

  cursor: pointer;

  box-shadow:
    0 7px 20px
    rgba(128, 88, 10, .2);
}


.cta-button svg {
  width: 21px;
  height: 21px;

  fill: none;

  stroke: currentColor;

  stroke-width: 2.5;
}


.cta-button:hover {
  background:
    linear-gradient(
      115deg,
      #ffe38d,
      #f5c553
    );
}


/* ==========================================
   TABLET
========================================== */

@media (max-width: 1000px) {

  .hero-inner {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  .hero-statement {
    display: none;
  }


  .story-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .story-copy {
    grid-column: 1 / -1;

    max-width: 750px;
  }


  .values-grid {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 35px 0;
  }


  .value-card:nth-child(2) {
    border-right: none;
  }


  .law-grid {
    grid-template-columns:
      1fr 2fr;
  }


  .law-points {
    grid-column: 1 / -1;

    padding-left: 0;
    padding-top: 25px;

    border-left: none;

    border-top:
      1px solid
      rgba(244, 196, 80, .4);

    display: grid;

    grid-template-columns:
      repeat(2, 1fr);
  }
}


/* ==========================================
   MOBILE
========================================== */

@media (max-width: 650px) {

  .about-container {
    width:
      calc(100% - 2rem);
  }


  .hero-inner {
    min-height: auto;

    padding-block: 55px;
  }


  .hero-copy h1 {
    font-size: 3rem;
  }


  .hero-description {
    font-size: 1rem;
  }


  .story-section {
    padding-block: 55px;
  }


  .story-grid {
    grid-template-columns: 1fr;
  }


  .story-copy {
    grid-column: auto;

    padding-right: 0;
  }


  .team-card {
    padding: 25px;
  }


  .values-grid {
    grid-template-columns: 1fr;
  }


  .value-card {
    padding-block: 25px;

    border-right: none;

    border-bottom:
      1px solid
      rgba(190, 145, 44, .3);
  }


  .value-card:last-child {
    border-bottom: none;
  }


  .law-grid {
    grid-template-columns: 1fr;
  }


  .georgia-emblem {
    display: none;
  }


  .law-points {
    grid-column: auto;

    grid-template-columns: 1fr;
  }


  .cta-inner {
    flex-direction: column;

    align-items: flex-start;
  }


  .cta-button {
    width: 100%;
  }
}

</style>