<script setup lang="ts">
const clinic = useClinic()
const el = ref<HTMLElement | null>(null)

const messengerMeta: Record<string, { className: string }> = {
  telegram: { className: 'is-telegram' },
  whatsapp: { className: 'is-whatsapp' },
  viber: { className: 'is-viber' },
}

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
  <section id="contacts" ref="el" class="section contacts reveal">
    <div class="container">
      <div class="section-heading">
        <h2>Контакты</h2>
      </div>

      <div class="messengers" aria-label="Мессенджеры">
        <div class="messengers__copy">
          <p class="messengers__eyebrow">Мессенджеры</p>
          <h3>{{ clinic.contacts.messengers.title }}</h3>
          <p>{{ clinic.contacts.messengers.subtitle }}</p>
        </div>
        <div class="messengers__links">
          <a
            v-for="item in clinic.contacts.messengers.items"
            :key="item.id"
            class="messenger"
            :class="messengerMeta[item.id]?.className"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="messenger__icon">
              <UiIcon :name="item.id" :size="22" />
            </span>
            <span class="messenger__label">{{ item.label }}</span>
          </a>
        </div>
      </div>

      <div class="contacts__grid">
        <div class="contacts__info">
          <div class="item">
            <span class="icon"><UiIcon name="mail" /></span>
            <div>
              <h3>Связаться с нами</h3>
              <a :href="`mailto:${clinic.contacts.email}`">{{ clinic.contacts.email }}</a>
              <a
                v-for="phone in clinic.contacts.phones"
                :key="phone.href"
                :href="phone.href"
              >
                {{ phone.display }}
              </a>
            </div>
          </div>

          <div class="item">
            <span class="icon"><UiIcon name="map" /></span>
            <div>
              <h3>Адрес клиники</h3>
              <p>{{ clinic.contacts.address.country }}</p>
              <p>{{ clinic.contacts.address.city }}, {{ clinic.contacts.address.street }}</p>
              <p v-if="clinic.contacts.address.metro">{{ clinic.contacts.address.metro }}</p>
            </div>
          </div>

          <div class="item">
            <span class="icon"><UiIcon name="clock" /></span>
            <div>
              <h3>Время работы</h3>
              <p v-for="row in clinic.contacts.hours" :key="row.days">
                <strong>{{ row.days }}:</strong> {{ row.time }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="clinic.map.provider !== 'none' && clinic.map.embedUrl" class="map">
          <iframe
            title="Карта клиники"
            :src="clinic.map.embedUrl"
            :style="{ height: `${clinic.map.height}px` }"
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.messengers {
  display: grid;
  gap: 1.25rem;
  margin-bottom: 2.25rem;
  padding: 1.35rem 1.4rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(8, 145, 178, 0.18);
  background:
    radial-gradient(500px 180px at 100% 0%, rgba(34, 211, 238, 0.28), transparent 55%),
    linear-gradient(135deg, #ecfeff 0%, #f0fdfa 55%, #ffffff 100%);
  box-shadow: var(--shadow-md);
}

.messengers__eyebrow {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.35rem;
}

.messengers__copy h3 {
  font-size: 1.35rem;
  margin-bottom: 0.35rem;
  color: var(--color-text);
}

.messengers__copy p {
  color: var(--color-text-muted);
  margin: 0;
}

.messengers__links {
  display: grid;
  gap: 0.75rem;
}

.messenger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 52px;
  padding: 0.65rem 0.9rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(8, 145, 178, 0.12);
  box-shadow: var(--shadow-sm);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  cursor: pointer;
}

.messenger:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: rgba(8, 145, 178, 0.28);
}

.messenger:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 2px;
}

.messenger__icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: #fff;
  flex-shrink: 0;
}

.messenger.is-telegram .messenger__icon {
  background: #229ed9;
}

.messenger.is-whatsapp .messenger__icon {
  background: #25d366;
}

.messenger.is-viber .messenger__icon {
  background: #7360f2;
}

.messenger__label {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-text);
}

.contacts__grid {
  display: grid;
  gap: 1.5rem;
}

.contacts__info {
  display: grid;
  gap: 1.35rem;
}

.item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
}

.icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: #cffafe;
  color: var(--color-primary-dark);
}

h3 {
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

a,
p {
  display: block;
  color: var(--color-text-muted);
  margin-bottom: 0.2rem;
}

.item a:hover {
  color: var(--color-primary-dark);
}

.map {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: #e0f2fe;
  width: 100%;
}

.map iframe {
  display: block;
  width: 100%;
  border: 0;
  min-height: 320px;
}

@media (min-width: 720px) {
  .messengers {
    grid-template-columns: 1.1fr 1fr;
    align-items: center;
    padding: 1.5rem 1.75rem;
  }

  .messengers__links {
    grid-template-columns: repeat(3, 1fr);
  }

  .messenger {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 0.55rem;
    padding: 1rem 0.75rem;
  }
}

@media (min-width: 960px) {
  .contacts__grid {
    grid-template-columns: 1fr;
  }
}
</style>
