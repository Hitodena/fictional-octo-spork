<script setup lang="ts">
const clinic = useClinic()
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        el.value?.classList.add('is-visible')
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  observer.observe(el.value)
})
</script>

<template>
  <section id="services" ref="el" class="section services reveal">
    <div class="container">
      <div class="section-heading">
        <h2>{{ clinic.services.title }}</h2>
        <p>{{ clinic.services.subtitle }}</p>
      </div>

      <div class="services__grid">
        <a
          v-for="(item, i) in clinic.services.items"
          :key="item.title"
          class="service"
          :href="item.href"
          :style="{ '--delay': `${i * 60}ms` }"
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
.services {
  background:
    radial-gradient(700px 300px at 80% 10%, rgba(34, 211, 238, 0.18), transparent 60%),
    transparent;
}

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
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.service:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 3px;
}

.service img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: linear-gradient(135deg, #67e8f9, #22d3ee);
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
