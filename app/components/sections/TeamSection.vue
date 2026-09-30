<script setup lang="ts">
const clinic = useClinic()
const el = ref<HTMLElement | null>(null)
const page = ref(0)
const isMobile = ref(false)

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

let mq: MediaQueryList | null = null
const syncMobile = () => {
  isMobile.value = !!mq?.matches
}

onMounted(() => {
  mq = window.matchMedia('(max-width: 699px)')
  syncMobile()
  mq.addEventListener('change', syncMobile)

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

onBeforeUnmount(() => {
  mq?.removeEventListener('change', syncMobile)
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
          <button type="button" class="nav-btn" aria-label="Предыдущая страница" :disabled="page <= 0" @click="prev">
            <UiIcon name="chevron-left" :size="20" />
          </button>
          <button type="button" class="nav-btn" aria-label="Следующая страница" :disabled="page >= pageCount - 1"
            @click="next">
            <UiIcon name="chevron-right" :size="20" />
          </button>
        </div>
      </div>

      <div class="carousel" aria-roledescription="carousel" aria-label="Специалисты клиники">
        <div class="carousel__track" :style="{ transform: `translateX(-${page * 100}%)` }">
          <div v-for="(group, pageIndex) in pages" :key="pageIndex" class="carousel__page" role="group"
            :aria-label="`Страница ${pageIndex + 1} из ${pageCount}`"
            :aria-hidden="isMobile ? undefined : pageIndex !== page">
            <article v-for="member in group" :key="member.name" class="member">
              <div class="member__avatar" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="52%" fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
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
        <button v-for="(_, i) in pages" :key="i" type="button" class="dot" :class="{ 'is-active': i === page }"
          :aria-label="`Страница ${i + 1}`" :aria-selected="i === page" role="tab" @click="goTo(i)" />
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

.member {
  text-align: center;
}

.member__avatar {
  display: grid;
  place-items: center;
  width: min(100%, 180px);
  aspect-ratio: 1;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(160deg, #a5f3fc, #67e8f9);
  color: rgba(255, 255, 255, 0.95);
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

@media (max-width: 699px) {

  .team__controls,
  .team__dots {
    display: none;
  }

  .carousel__track {
    transform: none !important;
    transition: none;
    overflow-x: auto;
    gap: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
  }

  .carousel__track::-webkit-scrollbar {
    display: none;
  }

  .carousel__page {
    display: contents;
  }

  .member {
    flex: 0 0 78%;
    scroll-snap-align: start;
  }
}
</style>
