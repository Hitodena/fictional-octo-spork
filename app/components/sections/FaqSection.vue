<script setup lang="ts">
const clinic = useClinic()

</script>

<template>
  <section id="faq" class="section faq">
    <div class="container">
      <div class="section-heading">
        <h2>Частые вопросы</h2>
      </div>
      <div class="faq__list">
        <details v-for="item in clinic.seo.faq" :key="item.q">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__list {
  display: grid;
  gap: 0.75rem;
  max-width: 48rem;
}

details {
  interpolate-size: allow-keywords;
  border-radius: var(--radius-md);
  transition: border-color 200ms ease, box-shadow 200ms ease;
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
}

summary {
  cursor: pointer;
  list-style: none;
  padding: 1rem 1.25rem;
  font-family: var(--font-heading);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

details:hover,
details[open] {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

/* Плавное раскрытие: Chrome/Edge 131+, в остальных браузерах просто открывается */
details::details-content {
  block-size: 0;
  overflow: hidden;
  opacity: 0;
  transition: block-size 300ms ease, opacity 300ms ease, content-visibility 300ms allow-discrete;
}

details[open]::details-content {
  block-size: auto;
  opacity: 1;
}

summary {
  transition: color 200ms ease;
}

summary:hover {
  color: var(--color-primary-dark);
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: '+';
  font-size: 1.3rem;
  line-height: 1;
  color: var(--color-primary);
  transition: transform 200ms ease;
}

details[open] summary::after {
  transform: rotate(45deg);
}

summary:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}

details p {
  padding: 0 1.25rem 1.1rem;
  color: var(--color-text-muted);
}
</style>
