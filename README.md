# Dental Clinic Landing (Nuxt)

Шаблон современного лендинга стоматологии по структуре [medstar.by](http://medstar.by/), с дизайн-системой **UI UX Pro Max** (medical teal + Figtree / Noto Sans).

Все тексты, телефоны, услуги, врачи и картинки меняются в **одном файле**: [`clinic.config.ts`](./clinic.config.ts).

---

## Как запустить

```bash
cd dental-clinic-landing
npm install
npm run dev
```

Откройте http://localhost:3000

Сборка статики (для хостинга без Node):

```bash
npm run generate
```

Готовые файлы появятся в `.output/public`.

---

## Как переиспользовать под другую клинику

1. Откройте `clinic.config.ts`
2. Замените `brand`, `contacts`, `hero`, `about`, `team`, `services`, `reviews`
3. Положите свои фото в `public/images/` (см. таблицу ниже)
4. Вставьте код карты в `map.embedUrl`
5. По желанию смените логотип: `public/images/logo.svg`

---

## Куда класть картинки

| Файл | Назначение | Рекомендуемый размер |
|------|------------|----------------------|
| `public/images/logo.svg` | Логотип в шапке | ~180×40 |
| `public/images/favicon.svg` | Иконка вкладки | 32×32 |
| `public/images/hero.svg` → `.jpg` | Главный баннер (full-bleed) | 1920×1080 |
| `public/images/about.svg` → `.jpg` | Блок «О клинике» | 1200×960 |
| `public/images/team/doctor-1.svg` … `doctor-4.svg` | Фото врачей | 800×1000 |
| `public/images/services/*.svg` | Фото услуг | 1200×750 |

Сейчас стоят SVG-заглушки. Чтобы поставить настоящие фото:

1. Скачайте/сфотографируйте и сохраните, например, `public/images/hero.jpg`
2. В `clinic.config.ts` поменяйте путь: `image: '/images/hero.jpg'`

### Где взять бесплатные стоковые фото (стоматология)

- [Unsplash - dental](https://unsplash.com/s/photos/dental-clinic)
- [Pexels - dentist](https://www.pexels.com/search/dentist/)
- [Freepik](https://www.freepik.com/) (проверяйте лицензию)

Ключевые запросы: `dental clinic interior`, `dentist patient smile`, `dental chair`, `teeth whitening`.

---

## Карты: Яндекс и Google

В `clinic.config.ts`:

```ts
map: {
  provider: 'yandex', // или 'google' | 'none'
  embedUrl: 'СЮДА_SRC_ИЗ_IFRAME',
  height: 420,
}
```

### Яндекс.Карты (удобно для BY/RU)

1. Откройте [Конструктор карт Яндекса](https://yandex.ru/map-constructor/)
2. Найдите адрес клиники → поставьте метку
3. «Сохранить и продолжить» → «Получить код карты»
4. В коде iframe скопируйте только значение **`src="..."`**
5. Вставьте в `map.embedUrl`

Пример (координаты можно заменить своими):

```
https://yandex.ru/map-widget/v1/?ll=27.5395%2C53.8901&z=16&pt=27.5395,53.8901,pm2rdm&l=map
```

API-ключ для простого **embed-виджета не нужен**.  
Ключ нужен только если подключаете [JS API](https://developer.tech.yandex.ru/) (кастомные маркеры, маршруты).

### Google Maps

1. Откройте [Google Maps](https://www.google.com/maps)
2. Найдите адрес → **Поделиться** → **Встроить карту**
3. Скопируйте `src` из iframe
4. Вставьте в `map.embedUrl`, поставьте `provider: 'google'`

Пример вида:

```
https://www.google.com/maps/embed?pb=!1m18!1m12!...
```

Для обычного embed API-ключ **не требуется**.  
Ключ (`GOOGLE_MAPS_API_KEY`) нужен для Maps JavaScript API / Places.

Чтобы скрыть карту: `provider: 'none'`.

---

## Форма записи

По умолчанию `booking.submitMode: 'mailto'` - открывает письмо на `contacts.email`.

Варианты:

- `'mailto'` - без бэкенда
- `'console'` - только лог в DevTools (для тестов)
- `'telegram'` - заготовка; добавьте свой Nuxt server route с `telegramBotToken` / `telegramChatId`

---

## Структура проекта

```
clinic.config.ts          ← ВСЁ содержимое клиники
app/
  app.vue                 ← сборка секций
  assets/css/main.css     ← дизайн-токены
  components/
    AppHeader.vue
    AppFooter.vue
    UiIcon.vue
    sections/             ← Hero, About, Advantages, Team, Services, Reviews, Booking, Contacts
  composables/useClinic.ts
public/images/            ← картинки
```

Секции как у MedStar: шапка → герой → о клинике → преимущества → специалисты → услуги → отзывы → запись → контакты + карта → футер.

---

## Дизайн (UI UX Pro Max)

- Primary `#0891B2`, Secondary `#22D3EE`, CTA `#16A34A`, фон `#F0FDFA`, текст `#134E4A`
- Шрифты: Figtree (заголовки) + Noto Sans (текст)
- Стиль: Accessible & Ethical (healthcare)
- Анти-паттерны: неон, фиолетовые AI-градиенты, тяжёлые анимации

---

## Стек

Nuxt 4 + Vue 3, без лишних UI-библиотек - проще кастомизировать под каждый сайт.
