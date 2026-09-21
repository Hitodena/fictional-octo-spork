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
  <section id="reviews" ref="el" class="section reviews reveal">
    <div class="container">
      <div class="section-heading">
        <h2>{{ clinic.reviews.title }}</h2>
      </div>

      <div class="reviews__grid">
        <blockquote v-for="item in clinic.reviews.items" :key="item.name">
          <div class="stars" :aria-label="`Оценка ${item.rating} из 5`">
            <UiIcon v-for="n in item.rating" :key="n" name="star" :size="16" />
          </div>
          <p>{{ item.text }}</p>
          <footer>{{ item.name }}</footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews__grid {
  display: grid;
  gap: 1.25rem;
}

blockquote {
  margin: 0;
  padding: 1.5rem;
  border-left: 3px solid var(--color-primary);
  background: rgba(255, 255, 255, 0.72);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.stars {
  display: flex;
  gap: 0.2rem;
  color: var(--color-star);
  margin-bottom: 0.85rem;
}

p {
  color: var(--color-text);
  font-size: 1rem;
  margin-bottom: 1rem;
}

footer {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-primary-dark);
}

@media (min-width: 900px) {
  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
