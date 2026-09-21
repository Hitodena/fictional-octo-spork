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
    { threshold: 0.12 },
  )
  observer.observe(el.value)
})
</script>

<template>
  <section id="about" ref="el" class="section about reveal">
    <div class="container about__grid">
      <div class="about__visual">
        <img
          :src="clinic.about.image"
          :alt="clinic.about.imageAlt"
          width="720"
          height="560"
        />
        <div class="about__badge" aria-label="Опыт клиники">
          <strong>{{ clinic.about.years }}</strong>
          <span>{{ clinic.about.yearsLabel }}</span>
        </div>
      </div>

      <div>
        <div class="section-heading">
          <h2>{{ clinic.about.title }}</h2>
        </div>
        <p class="about__text">{{ clinic.about.text }}</p>
        <p class="about__tagline">{{ clinic.brand.tagline }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.about__visual {
  position: relative;
}

.about__visual img {
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.about__badge {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-radius: var(--radius-md);
  padding: 1rem 1.15rem;
  display: grid;
  gap: 0.15rem;
  max-width: 11rem;
  box-shadow: var(--shadow-md);
}

.about__badge strong {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-primary-dark);
  line-height: 1;
}

.about__badge span {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.about__text {
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
}

.about__tagline {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--color-primary-dark);
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-columns: 1.05fr 1fr;
    gap: 3.5rem;
  }
}
</style>
