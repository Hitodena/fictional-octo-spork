/**
 * ============================================================
 *  КОНФИГ КЛИНИКИ - меняйте этот файл под каждый устаревший сайт
 * ============================================================
 *  Картинки кладите в /public/images/ (см. README.md)
 *  Карты: вставьте embed-URL от Яндекс или Google ниже
 */

export type MapProvider = 'yandex' | 'google' | 'none'

export interface ClinicConfig {
  brand: {
    name: string
    shortName: string
    tagline: string
    logo: string
    favicon: string
  }
  seo: {
    siteUrl: string
    title: string
    description: string
    geo: { lat: number; lng: number; region: string }
    faq: { q: string; a: string }[]
  }
  contacts: {
    phones: { label: string; href: string; display: string }[]
    email: string
    address: {
      country: string
      city: string
      street: string
      metro?: string
      full: string
    }
    hours: { days: string; time: string }[]
    messengers: {
      title: string
      subtitle: string
      items: {
        id: 'telegram' | 'whatsapp' | 'viber'
        label: string
        href: string
      }[]
    }
  }
  hero: {
    headline: string
    subheadline: string
    image: string
    imageAlt: string
    ctaPrimary: string
    ctaSecondary: string
    eyebrow: string
    trust: { value: string; label: string }[]
  }
  about: {
    title: string
    text: string
    image: string
    imageAlt: string
    years: string
    yearsLabel: string
  }
  advantages: {
    title: string
    items: { icon: string; title: string; text: string }[]
  }
  team: {
    title: string
    subtitle: string
    members: {
      name: string
      role: string
      description: string
      photo: string
    }[]
  }
  services: {
    title: string
    subtitle: string
    items: {
      title: string
      text: string
      image: string
      href: string
    }[]
  }
  reviews: {
    title: string
    rating: string
    ratingCount: number
    reviewCount: number
    yandexUrl: string
    widgetUrl: string
    items: {
      name: string
      date: string
      text: string
      rating: number
    }[]
  }
  prices: {
    title: string
    subtitle: string
    note: string
    items: { name: string; hint?: string; price: string }[]
  }
  booking: {
    title: string
    subtitle: string
    submitLabel: string
    successMessage: string
    /** Куда отправлять заявку: 'mailto' | 'telegram' | 'console' */
    submitMode: 'mailto' | 'telegram' | 'console'
    telegramBotToken?: string
    telegramChatId?: string
  }
  map: {
    provider: MapProvider
    /**
     * Embed URL:
     * Яндекс: Конструктор карт → «Получить код» → скопируйте src из iframe
     * Google: Maps → Поделиться → Встроить карту → src из iframe
     */
    embedUrl: string
    /** Ссылка «Как добраться» под картой */
    linkUrl: string
    height: number
  }
  social?: { name: string; href: string }[]
  footerNote?: string
}

const config: ClinicConfig = {
  brand: {
    name: 'MedStar',
    shortName: 'MedStar',
    tagline: 'Ваша улыбка - наша забота',
    logo: '/images/logo.svg',
    favicon: '/images/favicon.svg',
  },

  seo: {
    siteUrl: 'https://medstar.by',
    title: 'Стоматология MedStar в Минске у м. Институт культуры | рейтинг 5,0',
    description:
      'Стоматология MedStar в центре Минска (ул. Московская, 12): лечение, протезирование, имплантация, удаление зубов. 15+ лет, рейтинг 5,0 на Яндекс Картах. Цены на сайте, запись онлайн.',
    geo: { lat: 53.889523, lng: 27.539049, region: 'BY-HM' },
    faq: [
      {
        q: 'Сколько стоит удаление зуба в MedStar?',
        a: 'Удаление однокорневого зуба стоит от 100 до 130 руб., многокорневого от 110 до 160 руб., атипично расположенного от 160 до 250 руб. Точную стоимость назовёт врач после осмотра.',
      },
      {
        q: 'Больно ли удалять зуб?',
        a: 'Мы используем современную анестезию: процедура проходит комфортно, а десна быстро восстанавливается. После удаления делаем контрольный рентген.',
      },
      {
        q: 'Где находится клиника?',
        a: 'Минск, ул. Московская, 12, несколько минут пешком от станции метро «Институт культуры» и железнодорожного вокзала.',
      },
      {
        q: 'Когда работает клиника?',
        a: 'С понедельника по пятницу с 9:00 до 20:00. Суббота и воскресенье выходные.',
      },
      {
        q: 'Какие услуги оказывает MedStar?',
        a: 'Терапия (лечение кариеса и каналов), профгигиена, протезирование в собственной зуботехнической лаборатории, имплантация и хирургия. Есть цифровая рентген-диагностика.',
      },
    ],
  },

  contacts: {
    phones: [
      { label: 'Городской', display: '+375 17 365-05-94', href: 'tel:+375173650594' },
      { label: 'Мобильный', display: '+375 29 356-05-94', href: 'tel:+375293560594' },
    ],
    email: 'hello.medstar@gmail.com',
    address: {
      country: 'Республика Беларусь',
      city: 'г. Минск',
      street: 'ул. Московская, 12',
      metro: 'ст. метро «Институт Культуры»',
      full: 'г. Минск, ул. Московская, 12, ст. метро «Институт Культуры»',
    },
    hours: [
      { days: 'Понедельник - Пятница', time: '9:00 - 20:00' },
      { days: 'Суббота - Воскресенье', time: 'Выходной' },
    ],
    messengers: {
      title: 'Напишите нам',
      subtitle: 'Быстрая связь в мессенджерах - ответим в рабочее время',
      items: [
        {
          id: 'telegram',
          label: 'Telegram',
          href: 'https://t.me/username',
        },
        {
          id: 'whatsapp',
          label: 'WhatsApp',
          href: 'https://wa.me/375293560594',
        },
        {
          id: 'viber',
          label: 'Viber',
          href: 'viber://chat?number=%2B375293560594',
        },
      ],
    },
  },

  hero: {
    eyebrow: '5 минут от метро «Институт культуры»',
    headline: 'Стоматология в центре Минска, где лечат без боли и лишних трат',
    subheadline: 'Врачи 1-й и высшей категории, своя зуботехническая лаборатория и цены на сайте до первого визита.',
    trust: [
      { value: '5,0', label: 'рейтинг на Яндекс Картах' },
      { value: '95', label: 'оценок пациентов' },
      { value: '15+', label: 'лет работы' },
    ],
    image: '/images/hero.webp',
    imageAlt: 'Молодая пациентка на приёме у стоматолога',
    ctaPrimary: 'Записаться на приём',
    ctaSecondary: 'Смотреть цены',
  },

  about: {
    title: 'О клинике',
    text: 'Клиника MedStar вот уже более пятнадцати лет оказывает полный комплекс стоматологических услуг. Квалифицированные врачи и сертифицированные материалы, отвечающие мировым стандартам, помогают решать имеющиеся проблемы полости рта, а внимание к деталям и заботливое отношение персонала - справиться со всеми страхами и сомнениями. Убедиться в этом вы можете уже на бесплатной консультации, а затем получить самый широкий спектр услуг: по терапии, ортопедии, хирургии. Собственная зуботехническая лаборатория и цифровая рентген-диагностика позволяют существенно сократить сроки протезирования.',
    image: '/images/about.webp',
    imageAlt: 'Кабинет стоматолога с профессиональным оборудованием',
    years: '15+',
    yearsLabel: 'лет заботы об улыбках',
  },

  advantages: {
    title: 'Преимущества',
    items: [
      {
        icon: 'users',
        title: 'Квалифицированные стоматологи',
        text: 'Врачи первой и высшей категории с большим опытом оказания помощи пациентам.',
      },
      {
        icon: 'monitor',
        title: 'Современное оборудование',
        text: 'Оборудование отвечает требованиям качества и безопасности.',
      },
      {
        icon: 'puzzle',
        title: 'Сложные случаи',
        text: 'Комплексный подход: план лечения разрабатывают несколько специалистов.',
      },
      {
        icon: 'shield',
        title: 'Гарантия качества',
        text: 'Гарантируем качество услуг, материалов и используемого оборудования.',
      },
      {
        icon: 'wallet',
        title: 'Доступные цены',
        text: 'Минимизируем расходы, чтобы сохранить доступность услуг.',
      },
      {
        icon: 'map',
        title: 'Удобное расположение',
        text: 'Центр города, несколько минут до метро «Институт Культуры» и вокзала.',
      },
    ],
  },

  team: {
    title: 'Специалисты',
    subtitle: 'Команда, которой можно доверить здоровье улыбки',
    members: [
      {
        name: 'Ольга Стуопелис',
        role: 'Директор',
        description: 'Заведующая терапевтическим отделением, врач стоматолог-терапевт 1-й категории',
        photo: '/images/team/doctor-1.webp',
      },
      {
        name: 'Виктория Паршута',
        role: 'Терапевт',
        description: 'Врач стоматолог-терапевт 1-й категории',
        photo: '/images/team/doctor-2.webp',
      },
      {
        name: 'Евгений Мацкель',
        role: 'Ортопед',
        description: 'Врач стоматолог-ортопед 1-й категории',
        photo: '/images/team/doctor-3.webp',
      },
      {
        name: 'Сергей Викторов',
        role: 'Ортопед',
        description: 'Врач стоматолог-ортопед 1-й категории',
        photo: '/images/team/doctor-4.webp',
      },
      {
        name: 'Анна Ковальчук',
        role: 'Хирург',
        description: 'Врач стоматолог-хирург 1-й категории',
        photo: '/images/team/doctor-1.webp',
      },
      {
        name: 'Дмитрий Савельев',
        role: 'Имплантолог',
        description: 'Врач стоматолог-хирург высшей категории',
        photo: '/images/team/doctor-2.webp',
      },
    ],
  },

  services: {
    title: 'Услуги',
    subtitle: 'Полный комплекс стоматологической помощи',
    items: [
      {
        title: 'Терапевтическая стоматология',
        text: 'Профессиональная диагностика и выбор лечения персонально для каждого клиента.',
        image: '/images/services/therapy.webp',
        href: '#booking',
      },
      {
        title: 'Протезирование зубов',
        text: 'Если вы столкнулись с потерей зуба, вернуть красоту поможет протезирование.',
        image: '/images/services/prosthetics.webp',
        href: '#booking',
      },
      {
        title: 'Имплантация зубов',
        text: 'Отсутствие зуба доставляет массу неудобств. Решение есть: имплантация.',
        image: '/images/services/implant.webp',
        href: '#booking',
      },
      {
        title: 'Хирургическая стоматология',
        text: 'Быстрое и бережное удаление зубов с вниманием к комфорту пациента.',
        image: '/images/services/surgery.webp',
        href: '#booking',
      },
    ],
  },

  reviews: {
    title: 'Отзывы пациентов на Яндекс Картах',
    rating: '5,0',
    ratingCount: 95,
    reviewCount: 57,
    yandexUrl: 'https://yandex.by/maps/org/medstar/1116421904/reviews/',
    widgetUrl: 'https://yandex.ru/maps-reviews-widget/1116421904?comments',
    items: [
      {
        name: 'Светлана Л.',
        date: '14 мая 2025',
        text: 'В этой стоматологии всегда качественно позаботятся о вашей улыбке. Лечила здесь зубы, два зуба мудрости удалила и один коренной отреставрировала, когда он откололся. Всегда чувствуешь себя здесь комфортно и с полным доверием к врачам. Осложнений никогда не было, все процедуры выполнялись профессионально и на совесть.',
        rating: 5,
      },
      {
        name: 'Екатерина Ч.',
        date: '11 июня 2026',
        text: 'Ходила на профгигиену, очень понравилось, врач Виктория Олеговна очень деликатно всё сделала, вот к таким врачам приятно идти. Также проконсультировали по состоянию моих зубов, буду обращаться ещё, спасибо.',
        rating: 5,
      },
      {
        name: 'Сергей С.',
        date: '21 марта 2026',
        text: 'Хорошее обслуживание, поверьте на слово, есть с чем сравнивать. Достаточно быстро лечат, удаляют, изготавливают протез. Что не характерно, предложили более дешёвый, т.к. он более удобный и долговечнее.',
        rating: 5,
      },
    ],
  },

  prices: {
    title: 'Цены на хирургическую стоматологию',
    subtitle: 'Без скрытых доплат: стоимость известна до начала лечения',
    note: 'Итоговую стоимость лечения уточняйте у администратора после осмотра врача.',
    items: [
      { name: 'Консультация врача-стоматолога-хирурга', price: '26,09 руб.' },
      { name: 'Удаление однокорневого зуба', price: '100 – 130 руб.' },
      { name: 'Удаление многокорневого зуба', price: '110 – 160 руб.' },
      { name: 'Удаление атипично расположенного зуба', price: '160 – 250 руб.' },
      { name: 'Операция по удалению кисты зуба', price: '350 – 450 руб.' },
      {
        name: 'Подготовка к имплантации',
        hint: 'удаление зуба с очагом воспаления и применение остеогенного препарата',
        price: '250 – 350 руб.',
      },
      {
        name: 'Альвеолэктомия',
        hint: 'удаление костных выступов и острых краёв челюсти перед съёмным протезированием',
        price: '150 – 160 руб.',
      },
    ],
  },

  booking: {
    title: 'Запись на приём',
    subtitle: 'Оставьте заявку - администратор перезвонит и подберёт удобное время',
    submitLabel: 'Отправить заявку',
    successMessage: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    submitMode: 'mailto',
  },

  map: {
    provider: 'yandex',
    // Только src из iframe Конструктора (не весь <iframe>...</iframe>)
    embedUrl:
      'https://yandex.ru/map-widget/v1/?ll=27.539049%2C53.889523&z=16&pt=27.539049%2C53.889523%2Cpm2rdl&scroll=false',
    linkUrl: 'https://yandex.by/maps/org/medstar/1116421904/',
    height: 480,
  },

  social: [{ name: 'Instagram', href: 'https://www.instagram.com/medstar.by/' }],

  footerNote: '© MedStar. Стоматологическая клиника.',
}

export default config
