<template>
  <div class="relative min-h-screen">
    <PagesHomeHeroCarousel />
    <PagesHomeAdventureGrid />
    <PagesHomeActivity /> 
    <PagesHomeAreaLocation />
    <PagesHomeTicket />
    <PagesHomeAdSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'background'
})
</script>