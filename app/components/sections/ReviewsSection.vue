<script setup lang="ts">
const clinic = useClinic()

</script>

<template>
  <section id="reviews" class="section reviews">
    <div class="container">
      <div class="reviews__head">
        <div class="section-heading">
          <h2>{{ clinic.reviews.title }}</h2>
        </div>
        <a
          class="score"
          :href="clinic.reviews.yandexUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{{ clinic.reviews.rating }}</strong>
          <span class="stars" aria-hidden="true">
            <UiIcon v-for="n in 5" :key="n" name="star" :size="16" />
          </span>
          <span class="score__meta">
            {{ clinic.reviews.ratingCount }} оценок · {{ clinic.reviews.reviewCount }} отзывов
          </span>
        </a>
      </div>

      <div class="reviews__grid">
        <blockquote v-for="item in clinic.reviews.items" :key="item.name">
          <div class="stars" :aria-label="`Оценка ${item.rating} из 5`">
            <UiIcon v-for="n in item.rating" :key="n" name="star" :size="16" />
          </div>
          <p>«{{ item.text }}»</p>
          <footer>
            <span class="avatar" aria-hidden="true">{{ item.name[0] }}</span>
            <span>
              {{ item.name }}
              <small>{{ item.date }} · Яндекс Карты</small>
            </span>
          </footer>
        </blockquote>
      </div>

      <div class="widget">
        <iframe
          title="Все отзывы о MedStar на Яндекс Картах"
          :src="clinic.reviews.widgetUrl"
          loading="lazy"
        />
      </div>

      <div class="reviews__actions">
        <a
          class="btn btn-secondary"
          :href="clinic.reviews.yandexUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Все {{ clinic.reviews.reviewCount }} отзывов на Яндекс Картах
          <UiIcon name="arrow" :size="18" />
        </a>
        <a class="btn btn-primary" href="#booking">Записаться к этим врачам</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews__grid {
  display: grid;
  gap: 1.25rem;
}

.reviews__head {
  display: grid;
  gap: 1rem;
  align-items: end;
  margin-bottom: 2.5rem;
}

.reviews__head .section-heading {
  margin-bottom: 0;
}

.score {
  display: grid;
  justify-items: start;
  gap: 0.2rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  transition: transform 200ms ease;
}

.score:hover {
  transform: translateY(-2px);
}

.score strong {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  line-height: 1;
}

.score .stars {
  margin: 0;
}

.score__meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

blockquote {
  margin: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

blockquote:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stars {
  display: flex;
  gap: 0.2rem;
  color: var(--color-star);
  margin-bottom: 0.85rem;
}

blockquote p {
  color: var(--color-text);
  font-size: 1rem;
  margin-bottom: 1.25rem;
  flex: 1;
}

footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-primary-dark);
}

footer small {
  display: block;
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--color-text-muted);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  background: linear-gradient(145deg, #cffafe, #a5f3fc);
}

.widget {
  max-width: 760px;
  margin: 2rem auto 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: var(--color-surface);
}

.widget iframe {
  display: block;
  width: 100%;
  height: 520px;
  border: 0;
}

.reviews__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

@media (min-width: 900px) {
  .reviews__head {
    grid-template-columns: 1fr auto;
  }

  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
