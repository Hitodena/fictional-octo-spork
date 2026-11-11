<template>
  <div>
    <a class="skip-link" href="#main">Перейти к содержимому</a>
    <AppHeader />
    <!-- Порядок по пути пациента: обещание → доверие → что лечим → сколько стоит → соц. доказательство → кто лечит → действие -->
    <main id="main">
      <SectionsHeroSection />
      <SectionsAdvantagesSection />
      <SectionsServicesSection />
      <SectionsPricesSection />
      <SectionsReviewsSection />
      <SectionsTeamSection />
      <SectionsAboutSection />
      <SectionsBookingSection />
      <SectionsFaqSection />
      <SectionsContactsSection />
    </main>
    <AppFooter />
    <div class="mobile-cta">
      <a class="btn btn-ghost-dark" :href="clinic.contacts.phones[1]?.href ?? clinic.contacts.phones[0]?.href">
        <UiIcon name="phone" :size="18" /> Позвонить
      </a>
      <a class="btn btn-primary" href="#booking">Записаться</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const clinic = useClinic()
const { seo, contacts, brand, reviews, services, prices } = clinic

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Dentist',
            '@id': `${seo.siteUrl}/#clinic`,
            name: brand.name,
            url: seo.siteUrl,
            image: `${seo.siteUrl}${clinic.hero.image}`,
            logo: `${seo.siteUrl}${brand.logo}`,
            description: seo.description,
            telephone: contacts.phones.map((p) => p.href.replace('tel:', '')),
            email: contacts.email,
            priceRange: '26–450 BYN',
            currenciesAccepted: 'BYN',
            address: {
              '@type': 'PostalAddress',
              streetAddress: contacts.address.street.replace('ул. ', 'улица '),
              addressLocality: 'Минск',
              addressCountry: 'BY',
            },
            geo: { '@type': 'GeoCoordinates', latitude: seo.geo.lat, longitude: seo.geo.lng },
            hasMap: reviews.yandexUrl,
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '20:00',
            },
            sameAs: [reviews.yandexUrl, ...(clinic.social ?? []).map((s) => s.href)],
            knowsAbout: services.items.map((s) => s.title),
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: prices.title,
              itemListElement: prices.items.map((i) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'MedicalProcedure', name: i.name },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'BYN',
                  // shortcut: берём нижнюю границу диапазона; при новых форматах цен — хранить min/max числами в конфиге
                  minPrice: Number(i.price.replace(',', '.').match(/[\d.]+/)?.[0]),
                },
              })),
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: seo.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ],
      }),
    },
  ],
})
</script>
