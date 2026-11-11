<script setup lang="ts">
const clinic = useClinic()

</script>

<template>
  <section id="prices" class="section prices">
    <div class="container">
      <div class="section-heading">
        <h2>{{ clinic.prices.title }}</h2>
        <p>{{ clinic.prices.subtitle }}</p>
      </div>

      <div class="prices__card">
        <ul class="prices__list">
          <li v-for="item in clinic.prices.items" :key="item.name">
            <span class="prices__name">
              {{ item.name }}
              <small v-if="item.hint">{{ item.hint }}</small>
            </span>
            <span class="prices__dots" aria-hidden="true" />
            <strong>{{ item.price }}</strong>
          </li>
        </ul>
        <div class="prices__foot">
          <p>{{ clinic.prices.note }}</p>
          <a class="btn btn-primary" href="#booking">Узнать точную стоимость</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prices__card {
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.prices__list {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
}

.prices__list li {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.95rem 1.4rem;
  transition: background 180ms ease;
}

.prices__list li + li {
  border-top: 1px solid var(--color-border);
}

.prices__list li:hover {
  background: var(--color-bg-soft);
}

.prices__name {
  font-weight: 500;
}

.prices__name small {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.prices__dots {
  flex: 1;
  min-width: 1rem;
  border-bottom: 1px dotted var(--color-border);
}

.prices__list strong {
  font-family: var(--font-heading);
  color: var(--color-primary-dark);
  white-space: nowrap;
}

.prices__foot {
  display: grid;
  gap: 1rem;
  padding: 1.25rem 1.4rem;
  background: var(--color-bg-soft);
}

.prices__foot p {
  color: var(--color-text-muted);
  font-size: 0.92rem;
}

@media (min-width: 720px) {
  .prices__foot {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
}
</style>
