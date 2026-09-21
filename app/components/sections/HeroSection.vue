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
  <section id="top" ref="el" class="hero reveal">
    <div class="hero__media" aria-hidden="true">
      <img
        :src="clinic.hero.image"
        :alt="clinic.hero.imageAlt"
        class="hero__img"
        width="1920"
        height="1080"
      />
      <div class="hero__scrim" />
    </div>

    <div class="container hero__content">
      <p class="hero__brand">{{ clinic.brand.name }}</p>
      <h1>{{ clinic.hero.headline }}</h1>
      <p class="hero__sub">{{ clinic.hero.subheadline }}</p>
      <div class="hero__actions">
        <a class="btn btn-primary" href="#booking">{{ clinic.hero.ctaPrimary }}</a>
        <a class="btn btn-ghost" href="#services">{{ clinic.hero.ctaSecondary }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(88vh, 760px);
  display: grid;
  align-items: end;
  overflow: hidden;
  color: #fff;
}

.hero__media {
  position: absolute;
  inset: 0;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  animation: heroZoom 14s ease-out forwards;
}

@keyframes heroZoom {
  to {
    transform: scale(1.08);
  }
}

.hero__scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(8, 70, 80, 0.35) 0%, rgba(8, 60, 70, 0.78) 70%, rgba(6, 45, 52, 0.9) 100%),
    linear-gradient(90deg, rgba(8, 60, 70, 0.55), transparent 55%);
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-bottom: clamp(3rem, 8vw, 5.5rem);
  padding-top: 6rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  width: min(100% - 2rem, var(--container));
}

.hero__brand {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
  color: #fff;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.25);
}

.hero h1 {
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  font-weight: 600;
  max-width: 18ch;
  margin-bottom: 0.85rem;
}

.hero__sub {
  font-size: 1.05rem;
  opacity: 0.92;
  max-width: 34ch;
  margin-bottom: 1.75rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (min-width: 900px) {
  .hero__content {
    margin-left: max(calc((100% - var(--container)) / 2), 1rem);
  }
}
</style>
