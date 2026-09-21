<script setup lang="ts">
const clinic = useClinic()
const el = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)

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

function scrollBy(dir: number) {
  track.value?.scrollBy({ left: dir * 280, behavior: 'smooth' })
}
</script>

<template>
  <section id="team" ref="el" class="section team reveal">
    <div class="container">
      <div class="team__head">
        <div class="section-heading" style="margin-bottom: 0">
          <h2>{{ clinic.team.title }}</h2>
          <p>{{ clinic.team.subtitle }}</p>
        </div>
        <div class="team__controls">
          <button type="button" aria-label="Предыдущий" @click="scrollBy(-1)">‹</button>
          <button type="button" aria-label="Следующий" @click="scrollBy(1)">›</button>
        </div>
      </div>

      <div ref="track" class="team__track" tabindex="0">
        <article v-for="member in clinic.team.members" :key="member.name" class="member">
          <img :src="member.photo" :alt="member.name" width="320" height="400" />
          <div class="member__info">
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="desc">{{ member.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}

.team__controls {
  display: flex;
  gap: 0.5rem;
}

.team__controls button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: #fff;
  color: var(--color-text);
  font-size: 1.35rem;
  cursor: pointer;
  transition: background 180ms ease, border-color 180ms ease;
}

.team__controls button:hover {
  background: var(--color-bg-soft);
  border-color: var(--color-primary);
}

.team__controls button:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}

.team__track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 280px);
  gap: 1.25rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
}

.member {
  scroll-snap-align: start;
}

.member img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-lg);
  margin-bottom: 1rem;
  background: linear-gradient(160deg, #a5f3fc, #67e8f9);
}

.member__info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.role {
  color: var(--color-primary-dark);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}

.desc {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
</style>
