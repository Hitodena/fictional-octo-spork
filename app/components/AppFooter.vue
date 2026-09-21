<script setup lang="ts">
const clinic = useClinic()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <img :src="clinic.brand.logo" :alt="clinic.brand.name" width="120" height="30" class="logo" />
        <p>{{ clinic.brand.tagline }}</p>
      </div>

      <div>
        <h3>Навигация</h3>
        <a href="#about">О клинике</a>
        <a href="#services">Услуги</a>
        <a href="#booking">Запись</a>
        <a href="#contacts">Контакты</a>
      </div>

      <div>
        <h3>Контакты</h3>
        <a :href="`mailto:${clinic.contacts.email}`">{{ clinic.contacts.email }}</a>
        <a
          v-for="phone in clinic.contacts.phones"
          :key="phone.href"
          :href="phone.href"
        >
          {{ phone.display }}
        </a>
        <p>{{ clinic.contacts.address.full }}</p>
      </div>
    </div>
    <div class="container footer__copy">
      <p>{{ clinic.footerNote }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f3d3a;
  color: rgba(255, 255, 255, 0.88);
  padding: 3rem 0 1.5rem;
}

.footer__inner {
  display: grid;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.logo {
  height: 30px;
  width: auto;
  margin-bottom: 0.75rem;
  filter: brightness(0) invert(1);
}

h3 {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  color: #fff;
}

a,
p {
  display: block;
  font-size: 0.92rem;
  margin-bottom: 0.35rem;
  color: rgba(255, 255, 255, 0.78);
}

a:hover {
  color: #fff;
}

.footer__copy {
  padding-top: 1.25rem;
  font-size: 0.85rem;
  opacity: 0.75;
}

@media (min-width: 800px) {
  .footer__inner {
    grid-template-columns: 1.2fr 0.8fr 1fr;
  }
}
</style>
