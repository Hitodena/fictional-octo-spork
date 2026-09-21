<template>
  <div>
    <a class="skip-link" href="#main">Перейти к содержимому</a>
    <AppHeader />
    <main id="main">
      <SectionsHeroSection />
      <SectionsAboutSection />
      <SectionsAdvantagesSection />
      <SectionsTeamSection />
      <SectionsServicesSection />
      <SectionsReviewsSection />
      <SectionsBookingSection />
      <SectionsContactsSection />
    </main>
    <AppFooter />
    <a
      class="fab-call"
      :href="clinic.contacts.phones[0]?.href"
      :aria-label="`Позвонить ${clinic.contacts.phones[0]?.display}`"
    >
      <UiIcon name="phone" :size="22" />
    </a>
  </div>
</template>

<script setup lang="ts">
const clinic = useClinic()
</script>
