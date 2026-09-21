<script setup lang="ts">
const clinic = useClinic()
const open = ref(false)

const links = [
  { href: '#about', label: 'О клинике' },
  { href: '#services', label: 'Услуги' },
  { href: '#booking', label: 'Запись' },
  { href: '#contacts', label: 'Контакты' },
]

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled }">
    <div class="container header__inner">
      <a class="brand" href="#top" @click="closeMenu">
        <img :src="clinic.brand.logo" :alt="clinic.brand.name" width="148" height="36" />
      </a>

      <nav class="nav" aria-label="Основная навигация">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="header__phones">
        <a
          v-for="phone in clinic.contacts.phones"
          :key="phone.href"
          class="phone"
          :href="phone.href"
        >
          {{ phone.display }}
        </a>
      </div>

      <a class="btn btn-primary header__cta" href="#booking">Запись</a>

      <button
        class="burger"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Закрыть меню' : 'Открыть меню'"
        @click="open = !open"
      >
        <UiIcon :name="open ? 'close' : 'menu'" :size="24" />
      </button>
    </div>

    <div
      id="mobile-menu"
      class="mobile"
      :class="{ 'is-open': open }"
      :hidden="!open"
    >
      <nav aria-label="Мобильная навигация">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">
          {{ link.label }}
        </a>
      </nav>
      <div class="mobile__phones">
        <a
          v-for="phone in clinic.contacts.phones"
          :key="phone.href"
          :href="phone.href"
        >
          {{ phone.display }}
        </a>
      </div>
      <a class="btn btn-primary" href="#booking" @click="closeMenu">Записаться</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--header-h);
  backdrop-filter: blur(12px);
  background: rgba(240, 253, 250, 0.82);
  border-bottom: 1px solid transparent;
  transition: background 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.header.is-scrolled {
  background: rgba(255, 255, 255, 0.92);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand img {
  height: 36px;
  width: auto;
}

.nav {
  display: none;
  gap: 1.35rem;
  margin-left: 1.5rem;
}

.nav a {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--color-text);
  opacity: 0.85;
  transition: color 180ms ease, opacity 180ms ease;
}

.nav a:hover {
  color: var(--color-primary-dark);
  opacity: 1;
}

.header__phones {
  display: none;
  flex-direction: column;
  margin-left: auto;
  line-height: 1.25;
}

.phone {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-primary-dark);
}

.header__cta {
  display: none;
  margin-left: 0.75rem;
  min-height: 42px;
  padding-inline: 1rem;
}

.burger {
  margin-left: auto;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  border-radius: var(--radius-sm);
}

.burger:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}

.mobile {
  display: grid;
  gap: 1rem;
  padding: 1rem 1.25rem 1.5rem;
  background: #fff;
  border-bottom: 1px solid var(--color-border);
}

.mobile[hidden] {
  display: none;
}

.mobile nav {
  display: grid;
  gap: 0.25rem;
}

.mobile nav a {
  font-family: var(--font-heading);
  font-weight: 600;
  padding: 0.75rem 0.25rem;
  border-bottom: 1px solid var(--color-border);
}

.mobile__phones {
  display: grid;
  gap: 0.35rem;
}

.mobile__phones a {
  font-weight: 600;
  color: var(--color-primary-dark);
}

@media (min-width: 960px) {
  .nav {
    display: flex;
  }

  .header__phones {
    display: flex;
  }

  .header__cta {
    display: inline-flex;
  }

  .burger,
  .mobile {
    display: none !important;
  }
}
</style>
