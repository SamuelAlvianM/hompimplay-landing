<template>
  <section id="beranda" class="w-full relative group">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ 
        item: 'basis-full',
        container: 'relative',
        arrows: { 
          wrapper: 'flex items-center justify-between absolute inset-x-0 inset-y-0 !z-50 pointer-events-none px-2 sm:px-4' 
        }
      }"
      :prev-button="{
        icon: 'i-heroicons-chevron-left-20-solid',
        class: 'pointer-events-auto !flex bg-gray-500/50 hover:bg-gray-600/70 text-white rounded-full p-1.5 w-8 h-8 sm:p-2 sm:w-10 sm:h-10 items-center justify-center shadow-sm',
        variant: 'link'
      }"
      :next-button="{
        icon: 'i-heroicons-chevron-right-20-solid',
        class: 'pointer-events-auto !flex bg-gray-500/50 hover:bg-gray-600/70 text-white rounded-full p-1.5 w-8 h-8 sm:p-2 sm:w-10 sm:h-10 items-center justify-center shadow-sm',
        variant: 'link'
      }"
      class="overflow-hidden"
      indicators
      arrows
    >
      <div class="relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-[800px] xl:h-[1020px] w-full">
        <NuxtImg 
          :src="item.image" 
          class="w-full h-full object-cover object-top" 
          :sizes="sizes"
          format="webp"
          quality="80"
          widths="640 1024 1920 2560"
          loading="lazy"
        />
      </div>
    </UCarousel>
  </section>
</template>

<script setup lang="ts">
const items = [
  { image: '/assets/carousel1.png' },
  // { image: '/assets/404.png' }
]

// Optimasi gambar untuk berbagai ukuran layar
const sizes = 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw'
</script>