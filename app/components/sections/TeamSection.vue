<script setup lang="ts">
const clinic = useClinic()
const el = ref<HTMLElement | null>(null)
const page = ref(0)

const PAGE_SIZE = 3

const pages = computed(() => {
  const members = clinic.team.members
  const result = []
  for (let i = 0; i < members.length; i += PAGE_SIZE) {
    result.push(members.slice(i, i + PAGE_SIZE))
  }
  return result
})

const pageCount = computed(() => pages.value.length)

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

function goTo(next: number) {
  page.value = Math.min(Math.max(next, 0), pageCount.value - 1)
}

function prev() {
  goTo(page.value - 1)
}

function next() {
  goTo(page.value + 1)
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
          <button
            type="button"
            class="nav-btn"
            aria-label="Предыдущая страница"
            :disabled="page <= 0"
            @click="prev"
          >
            <UiIcon name="chevron-left" :size="20" />
          </button>
          <button
            type="button"
            class="nav-btn"
            aria-label="Следующая страница"
            :disabled="page >= pageCount - 1"
            @click="next"
          >
            <UiIcon name="chevron-right" :size="20" />
          </button>
        </div>
      </div>

      <div class="carousel" aria-roledescription="carousel" aria-label="Специалисты клиники">
        <div
          class="carousel__track"
          :style="{ transform: `translateX(-${page * 100}%)` }"
        >
          <div
            v-for="(group, pageIndex) in pages"
            :key="pageIndex"
            class="carousel__page"
            role="group"
            :aria-label="`Страница ${pageIndex + 1} из ${pageCount}`"
            :aria-hidden="pageIndex !== page"
          >
            <article v-for="member in group" :key="member.name" class="member">
              <img :src="member.photo" :alt="member.name" width="320" height="400" />
              <div class="member__info">
                <h3>{{ member.name }}</h3>
                <p class="role">{{ member.role }}</p>
                <p class="desc">{{ member.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="team__dots" role="tablist" aria-label="Страницы специалистов">
        <button
          v-for="(_, i) in pages"
          :key="i"
          type="button"
          class="dot"
          :class="{ 'is-active': i === page }"
          :aria-label="`Страница ${i + 1}`"
          :aria-selected="i === page"
          role="tab"
          @click="goTo(i)"
        />
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
  flex-shrink: 0;
}

.nav-btn {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: #fff;
  color: var(--color-text);
  line-height: 0;
  cursor: pointer;
  transition: background 180ms ease, border-color 180ms ease, opacity 180ms ease;
}

.nav-btn :deep(svg) {
  display: block;
}

.nav-btn:hover:not(:disabled) {
  background: var(--color-bg-soft);
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-btn:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}

.carousel {
  overflow: hidden;
  width: 100%;
}

.carousel__track {
  display: flex;
  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.carousel__page {
  flex: 0 0 100%;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
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

.team__dots {
  display: flex;
  justify-content: center;
  gap: 0.45rem;
  margin-top: 1.25rem;
}

.dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(8, 145, 178, 0.25);
  cursor: pointer;
  transition: width 180ms ease, background 180ms ease;
}

.dot.is-active {
  width: 22px;
  background: var(--color-primary);
}

.dot:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}

@media (min-width: 700px) {
  .carousel__page {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
