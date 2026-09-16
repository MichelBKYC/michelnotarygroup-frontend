<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const { open: openContact } = useContactEnquiry()
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <!-- Georgia Certified -->
    <div class="certified">
      <img
      src="../assets/images/peach.png"
        alt="Georgia Certified Notary Public"
        class="certified-bg">
    </div>

    <!-- Main Header -->
    <div class="header-main">

      <!-- Logo -->
      <NuxtLink
        to="/"
        class="logo"
        @click="closeMenu"
      >
        <img
          src="../assets/images/logo.png"
          alt="The Michel Notary Group"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <NuxtLink to="/home" class="shadow-text">HOME</NuxtLink>
        <NuxtLink to="/about" class="shadow-text">ABOUT US</NuxtLink>
        <NuxtLink to="/services" class="shadow-text">SERVICES</NuxtLink>
        <button type="button" class="shadow-text" @click="openContact()">CONTACT US</button>
      </nav>

      <!-- Mobile Hamburger -->
      <button
        class="menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <nav
      v-if="menuOpen"
      class="mobile-nav"
    >
      <!-- <NuxtLink to="/about" @click="closeMenu">
        THE TEAM
      </NuxtLink> -->
        <NuxtLink to="/about"  class="shadow-text">ABOUT</NuxtLink>

      <NuxtLink to="/services" @click="closeMenu">
        SERVICES
      </NuxtLink>

      <button type="button" @click="openContact()">CONTACT US</button>
    </nav>
  </header>
</template>

<style scoped>/* =========================
   DESKTOP + TABLET
   ========================= */

.header {
  width: 100%;
  position: relative;
}

.header-main {
  width: 100%;
  height: 70px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  padding: 0 36px;
  box-sizing: border-box;
}

/* LOGO */

.logo {
  justify-self: start;
  display: flex;
  align-items: center;
}

.logo img {
  width: 180px;
  height: auto;
  display: block;
   filter:
    drop-shadow(0 0 4px rgba(0, 0, 0, 1))
    drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
}

/* GEORGIA CERTIFIED */

.certified {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 440px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  z-index: 10;
}

.certified-bg {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
}

/* NAVIGATION */

.desktop-nav {
  grid-column: 3;

  justify-self: end;

  display: flex;
  align-items: center;
  gap: 27px;
}

.desktop-nav a {
  color: #ffffff;
  text-decoration: none;

  font-size: 15px;
  font-weight: 400;

  white-space: nowrap;
}

.desktop-nav a:hover,
.desktop-nav a.router-link-active {
  color: #d5a846;
}


/* MOBILE ELEMENTS OFF */

.menu-button,
.mobile-nav {
  display: none;
}


/* =========================
   TABLET
   ========================= */

@media (min-width: 769px) and (max-width: 1024px) {

  .header-main {
    padding: 0 24px;
  }

  .logo img {
    width: 155px;
  }

  .desktop-nav {
    gap: 18px;
  }

  .desktop-nav a {
    font-size: 15px;
  }

  .certified {
    font-size: 13px;
  }

  .peach {
    font-size: 19px;
  }
}


/* =========================
   MOBILE
   ========================= */

@media (max-width: 768px) {

  .header {
    width: 100%;
  }


  /* BLACK CERTIFICATION BAR */

  .certified {
    position: static;
    transform: none;

    width: 100%;
    height: 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: #000000;

    color: #e4934a;
    font-size: 18px;

    box-sizing: border-box;
  }

  .peach {
    font-size: 24px;
  }


  /* BLUE HEADER */

  .header-main {
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 24px;
    box-sizing: border-box;
  }


  /* LOGO */

  .logo img {
    width: 175px;
  }


  /* DESKTOP NAV OFF */

  .desktop-nav {
    display: none;
  }


  /* HAMBURGER */

  .menu-button {
    width: 40px;
    height: 34px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 4px 0;

    border: none;
    background: transparent;

    cursor: pointer;
  }

  .menu-button span {
    width: 40px;
    height: 5px;

    display: block;

    background: #ffffff;
  }


  /* MOBILE DROPDOWN */

  .mobile-nav {
    position: absolute;
    z-index: 1000;

    top: 124px;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;

    padding: 20px 24px;

    background: #050B36;

    box-sizing: border-box;
  }

  .mobile-nav a {
    padding: 16px 0;

    color: #ffffff;
    text-decoration: none;
    font-size: 16px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  .mobile-nav a:hover,
  .mobile-nav a.router-link-active {
    color: #d5a846;
  }
}
.certified {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 400px;
  height: 80px;

  z-index: 10;
}

.certified-bg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 0;
}

.certified-bg path {
  fill: rgba(1, 8, 28, 0.94);
}

.certified-content {
  position: relative;
  z-index: 1;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #f28c38;
}

.header {
  position: relative;
  width: 100%;
  z-index: 100;

  box-shadow:
    0 3px 5px rgba(0, 0, 0, 0.45),
    0 8px 18px rgba(0, 0, 0, 0.35),
    0 15px 35px rgba(0, 0, 0, 0.20);
}

@media (max-width: 768px) {
  .certified {
    display: none;
  }

  .mobile-nav {
    top: 100%;
  }
}

/* =========================
   DESKTOP + TABLET LOGO OVERRIDE
   ========================= */

@media (min-width: 769px) {

  .logo {
    position: relative;
    z-index: 20;
    transform: translateY(3px);
  }

  .logo img {
    width: 230px;
    height: auto;
  }
}
</style>