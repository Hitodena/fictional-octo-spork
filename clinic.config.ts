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
    title: string
    description: string
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
    items: {
      name: string
      text: string
      rating: number
    }[]
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
    title: 'MedStar | Стоматологическая клиника',
    description:
      'Стоматологическая клиника MedStar в Минске: терапия, протезирование, имплантация и хирургия. Опытные врачи, современное оборудование.',
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
    headline: 'Стоматологические услуги от опытных специалистов',
    subheadline: 'Минск, ул. Московская, 12 - рядом с метро «Институт Культуры»',
    image: '/images/hero.svg',
    imageAlt: 'Улыбающийся пациент стоматологической клиники',
    ctaPrimary: 'Записаться на приём',
    ctaSecondary: 'Посмотреть услуги',
  },

  about: {
    title: 'О клинике',
    text: 'Клиника MedStar вот уже более пятнадцати лет оказывает полный комплекс стоматологических услуг. Квалифицированные врачи и сертифицированные материалы, отвечающие мировым стандартам, помогают решать имеющиеся проблемы полости рта, а внимание к деталям и заботливое отношение персонала - справиться со всеми страхами и сомнениями. Убедиться в этом вы можете уже на бесплатной консультации, а затем получить самый широкий спектр услуг: по терапии, ортопедии, хирургии. Собственная зуботехническая лаборатория и цифровая рентген-диагностика позволяют существенно сократить сроки протезирования.',
    image: '/images/about.svg',
    imageAlt: 'Интерьер стоматологической клиники',
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
        photo: '/images/team/doctor-1.svg',
      },
      {
        name: 'Виктория Паршута',
        role: 'Терапевт',
        description: 'Врач стоматолог-терапевт 1-й категории',
        photo: '/images/team/doctor-2.svg',
      },
      {
        name: 'Евгений Мацкель',
        role: 'Ортопед',
        description: 'Врач стоматолог-ортопед 1-й категории',
        photo: '/images/team/doctor-3.svg',
      },
      {
        name: 'Сергей Викторов',
        role: 'Ортопед',
        description: 'Врач стоматолог-ортопед 1-й категории',
        photo: '/images/team/doctor-4.svg',
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
        image: '/images/services/therapy.svg',
        href: '#booking',
      },
      {
        title: 'Протезирование зубов',
        text: 'Если вы столкнулись с потерей зуба, вернуть красоту поможет протезирование.',
        image: '/images/services/prosthetics.svg',
        href: '#booking',
      },
      {
        title: 'Имплантация зубов',
        text: 'Отсутствие зуба доставляет массу неудобств. Решение есть: имплантация.',
        image: '/images/services/implant.svg',
        href: '#booking',
      },
      {
        title: 'Хирургическая стоматология',
        text: 'Быстрое и бережное удаление зубов с вниманием к комфорту пациента.',
        image: '/images/services/surgery.svg',
        href: '#booking',
      },
    ],
  },

  reviews: {
    title: 'Отзывы наших пациентов',
    items: [
      {
        name: 'Мария Сафронова',
        text: 'Я всегда волновалась и ожидала самого худшего перед посещением стоматолога, но визит в клинику прошёл спокойно и безболезненно.',
        rating: 5,
      },
      {
        name: 'Пётр Кирьянов',
        text: 'Лучшая клиника в городе! Обычно я сильно напрягаюсь, но врач всё объяснил и был очень аккуратен и внимателен.',
        rating: 5,
      },
      {
        name: 'Александр Бабыкин',
        text: 'Уже несколько лет ходим сюда всей семьёй. Приятно иметь личного врача, который знает ваши проблемы и быстро их решает.',
        rating: 5,
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
    // Вставьте свой embed src из Яндекс.Конструктора или Google Maps
    // Пример для ул. Московская 12, Минск (замените на свой код):
    embedUrl:
      'https://yandex.ru/map-widget/v1/?ll=27.5395%2C53.8901&z=16&pt=27.5395,53.8901,pm2rdm&l=map',
    height: 420,
  },

  social: [],

  footerNote: '© MedStar. Стоматологическая клиника.',
}

export default config
