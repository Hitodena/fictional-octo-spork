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
  <section id="advantages" ref="el" class="section advantages reveal">
    <div class="container">
      <div class="section-heading">
        <h2>{{ clinic.advantages.title }}</h2>
      </div>

      <ul class="advantages__list">
        <li v-for="item in clinic.advantages.items" :key="item.title">
          <span class="icon-wrap">
            <UiIcon :name="item.icon" :size="22" />
          </span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.advantages {
  background: linear-gradient(180deg, rgba(236, 254, 255, 0.7), rgba(240, 253, 250, 0.35));
}

.advantages__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.5rem;
}

.advantages__list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
}

.icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: var(--color-primary-dark);
  background: linear-gradient(145deg, #cffafe, #a5f3fc);
}

h3 {
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  .advantages__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem 2rem;
  }
}

@media (min-width: 1100px) {
  .advantages__list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
