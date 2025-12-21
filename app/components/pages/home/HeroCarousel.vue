<template>
  <section id="beranda" class="w-full relative group">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ 
        item: 'basis-full',
        container: 'relative',
        arrows: { 
          wrapper: 'flex items-center justify-between absolute inset-x-0 inset-y-0 !z-50 pointer-events-none px-4' 
        }
      }"
      :prev-button="{
        icon: 'i-heroicons-chevron-left-20-solid',
        class: 'pointer-events-auto !flex bg-gray-500/50 hover:bg-gray-600/70 text-white rounded-full p-2 w-10 h-10 items-center justify-center shadow-sm',
        variant: 'link'
      }"
      :next-button="{
        icon: 'i-heroicons-chevron-right-20-solid',
        class: 'pointer-events-auto !flex bg-gray-500/50 hover:bg-gray-600/70 text-white rounded-full p-2 w-10 h-10 items-center justify-center shadow-sm',
        variant: 'link'
      }"
      class="overflow-hidden"
      indicators
      arrows
    >
      <div class="relative h-[1020px] w-full">
        <NuxtImg 
          :src="item.image" 
          class="w-full h-full object-cover object-top" 
        />
      </div>
    </UCarousel>
  </section>
</template>

<script setup lang="ts">
const items = [
  { image: '/assets/carousel1.png' },
  { image: '/assets/404.png' }
]
</script>