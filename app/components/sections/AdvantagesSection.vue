<script setup lang="ts">
const clinic = useClinic()

</script>

<template>
  <section id="advantages" class="section advantages">
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
  background: var(--color-surface);
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
  background: #cffafe;
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
