<script setup lang="ts">
const clinic = useClinic()
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__media" aria-hidden="true">
      <img
        :src="clinic.hero.image"
        :alt="clinic.hero.imageAlt"
        class="hero__img"
        fetchpriority="high"
        width="1920"
        height="1080"
      />
      <div class="hero__scrim" />
    </div>

    <div class="container hero__content">
      <p class="hero__eyebrow rise" style="--d: 0ms">
        {{ clinic.brand.name }} · {{ clinic.hero.eyebrow }}
      </p>
      <h1 class="rise" style="--d: 90ms">{{ clinic.hero.headline }}</h1>
      <p class="hero__sub rise" style="--d: 180ms">{{ clinic.hero.subheadline }}</p>
      <div class="hero__actions rise" style="--d: 270ms">
        <a class="btn btn-primary" href="#booking">{{ clinic.hero.ctaPrimary }}</a>
        <a class="btn btn-ghost" href="#prices">{{ clinic.hero.ctaSecondary }}</a>
      </div>
      <a
        class="hero__trust rise"
        style="--d: 360ms"
        :href="clinic.reviews.yandexUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Открыть отзывы на Яндекс Картах"
      >
        <div v-for="t in clinic.hero.trust" :key="t.label" class="hero__trust-item">
          <strong>{{ t.value }}</strong>
          <span>{{ t.label }}</span>
        </div>
      </a>
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

.hero__eyebrow {
  display: inline-block;
  padding: 0.4rem 0.85rem;
  margin-bottom: 1.1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(6px);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  max-width: 16ch;
  margin-bottom: 1rem;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.25);
}

.hero__sub {
  font-size: 1.08rem;
  opacity: 0.92;
  max-width: 44ch;
  margin-bottom: 1.75rem;
}

.hero__trust {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 2rem;
  max-width: 30rem;
  padding: 0.9rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
  transition: background 200ms ease;
}

.hero__trust:hover {
  background: rgba(255, 255, 255, 0.2);
}

.hero__trust-item strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  line-height: 1.1;
}

.hero__trust-item:first-child strong::after {
  content: ' ★';
  color: var(--color-star);
}

.hero__trust-item span {
  font-size: 0.78rem;
  opacity: 0.85;
  line-height: 1.3;
  display: block;
}

.rise {
  opacity: 0;
  transform: translateY(16px);
  animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) var(--d, 0ms) forwards;
}

@keyframes rise {
  to {
    opacity: 1;
    transform: none;
  }
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
