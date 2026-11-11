<script setup lang="ts">
const clinic = useClinic()

</script>

<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="section-heading">
        <h2>{{ clinic.services.title }}</h2>
        <p>{{ clinic.services.subtitle }}</p>
      </div>

      <div class="services__grid">
        <a
          v-for="item in clinic.services.items"
          :key="item.title"
          class="service"
          :href="item.href"
         
        >
          <img :src="item.image" :alt="item.title" width="560" height="360" />
          <div class="service__body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <span class="more">
              Подробнее
              <UiIcon name="arrow" :size="18" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__grid {
  display: grid;
  gap: 1.25rem;
}

.service {
  display: grid;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  transition: transform 220ms ease, box-shadow 220ms ease;
  cursor: pointer;
}

.service:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.service:hover img {
  transform: scale(1.03);
}

.service:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 3px;
}

.service img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: var(--color-bg-soft);
  transition: transform 400ms ease;
}

.service__body {
  padding: 1.25rem 1.35rem 1.4rem;
}

h3 {
  font-size: 1.15rem;
  margin-bottom: 0.45rem;
}

p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-bottom: 0.9rem;
}

.more {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-primary-dark);
}

@media (min-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
