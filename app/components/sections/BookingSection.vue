<script setup lang="ts">
const clinic = useClinic()
const el = ref<HTMLElement | null>(null)

const form = reactive({
  name: '',
  phone: '',
  service: '',
  comment: '',
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMsg = ref('')

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

async function onSubmit() {
  errorMsg.value = ''
  if (!form.name.trim() || !form.phone.trim()) {
    status.value = 'error'
    errorMsg.value = 'Укажите имя и телефон'
    return
  }

  status.value = 'loading'

  try {
    if (clinic.booking.submitMode === 'mailto') {
      const subject = encodeURIComponent(`Запись: ${form.name}`)
      const body = encodeURIComponent(
        `Имя: ${form.name}\nТелефон: ${form.phone}\nУслуга: ${form.service || '-'}\nКомментарий: ${form.comment || '-'}`,
      )
      window.location.href = `mailto:${clinic.contacts.email}?subject=${subject}&body=${body}`
    } else if (clinic.booking.submitMode === 'console') {
      // eslint-disable-next-line no-console
      console.log('Booking request', { ...form })
    }
    // telegram: подключите свой API endpoint / server route при необходимости

    await new Promise((r) => setTimeout(r, 400))
    status.value = 'success'
    form.name = ''
    form.phone = ''
    form.service = ''
    form.comment = ''
  } catch {
    status.value = 'error'
    errorMsg.value = 'Не удалось отправить заявку. Позвоните нам напрямую.'
  }
}
</script>

<template>
  <section id="booking" ref="el" class="section booking reveal">
    <div class="container booking__wrap">
      <div class="booking__intro">
        <h2>{{ clinic.booking.title }}</h2>
        <p>{{ clinic.booking.subtitle }}</p>
        <ul>
          <li v-for="phone in clinic.contacts.phones" :key="phone.href">
            <a :href="phone.href">{{ phone.display }}</a>
          </li>
        </ul>
      </div>

      <form class="booking__form" novalidate @submit.prevent="onSubmit">
        <div class="field">
          <label for="name">Имя</label>
          <input id="name" v-model="form.name" type="text" name="name" autocomplete="name" required />
        </div>

        <div class="field">
          <label for="phone">Телефон</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            name="phone"
            autocomplete="tel"
            placeholder="+375 __ ___-__-__"
            required
          />
        </div>

        <div class="field">
          <label for="service">Услуга</label>
          <select id="service" v-model="form.service" name="service">
            <option value="">Выберите услугу</option>
            <option v-for="s in clinic.services.items" :key="s.title" :value="s.title">
              {{ s.title }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="comment">Комментарий</label>
          <textarea id="comment" v-model="form.comment" name="comment" rows="3" />
        </div>

        <p v-if="status === 'error'" class="feedback feedback--error" role="alert">
          {{ errorMsg }}
        </p>
        <p v-if="status === 'success'" class="feedback feedback--ok" role="status">
          {{ clinic.booking.successMessage }}
        </p>

        <button class="btn btn-primary" type="submit" :disabled="status === 'loading'">
          {{ status === 'loading' ? 'Отправка…' : clinic.booking.submitLabel }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.booking {
  background:
    linear-gradient(135deg, rgba(8, 145, 178, 0.12), rgba(34, 211, 238, 0.08)),
    #e6fffa;
}

.booking__wrap {
  display: grid;
  gap: 2rem;
  align-items: start;
}

.booking__intro h2 {
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  margin-bottom: 0.65rem;
}

.booking__intro p {
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
}

.booking__intro ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.4rem;
}

.booking__intro a {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-primary-dark);
}

.booking__form {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  display: grid;
  gap: 1rem;
}

.field {
  display: grid;
  gap: 0.4rem;
}

label {
  font-weight: 600;
  font-size: 0.92rem;
}

input,
select,
textarea {
  width: 100%;
  min-height: 48px;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: #fff;
  color: var(--color-text);
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

textarea {
  min-height: 96px;
  resize: vertical;
}

input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 1px;
  border-color: var(--color-primary);
}

.feedback {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.feedback--error {
  color: #b91c1c;
}

.feedback--ok {
  color: var(--color-cta);
}

button:disabled {
  opacity: 0.7;
  cursor: wait;
}

@media (min-width: 900px) {
  .booking__wrap {
    grid-template-columns: 1fr 1.1fr;
    gap: 3rem;
  }
}
</style>
