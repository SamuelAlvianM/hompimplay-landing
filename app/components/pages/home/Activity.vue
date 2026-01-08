<template>
  <UContainer class="py-20">
    <div class="mb-10">
              <h2 class="text-2xl sm:text-4xl text-white font-bold flex items-center gap-3 leading-none">
        <IconTriangle />
        <span class="inline-block">Ragam Aktivitas</span>
      </h2>
        <p class="text-white/70 mt-2 text-md sm:text-xl">Temukan beragam aktivitas seru di luar lintasan, mulai dari tantangan ketinggian, taman bermain air, hingga edukasi satwa</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(act, index) in activities" 
        :key="index"
        @click="toggleActive(index)"
        class="group relative h-[433px] overflow-hidden rounded-3xl bg-gray-900 cursor-pointer"
      >
        <NuxtImg :src="act.image" class="absolute inset-0 w-full h-full object-cover z-0" 
          format="webp"
          quality="80"
          sizes="xs:100vw sm:100vw md:50vw"
          loading="lazy"
          alt="aktivitas"                  
        />
        
        <div 
          class="absolute inset-0 bg-black/[70%] transition-opacity z-10"
          :class="{'opacity-0': activeIndex === index, 'group-hover:opacity-0': true}"
        />

        <div class="relative z-20 h-full flex flex-col items-center justify-between py-12 px-6 pointer-events-none">
          <div 
            class="transition-all duration-500 transform"
            :class="{
              'scale-75 -translate-y-17': activeIndex === index,
              'group-hover:scale-75 group-hover:-translate-y-17': true
            }"
          >
            <NuxtImg :src="act.logo" class="h-28 w-auto object-contain" 
          format="webp"
          quality="80"
          sizes="xs:100vw sm:100vw md:50vw"
          loading="lazy"
          alt="logo aktivitas" 
            />
          </div>

          <div 
            class="transition-all duration-500 transform origin-top"
            :class="{
              'opacity-0 translate-y-10 scale-125': activeIndex === index,
              'group-hover:opacity-0 group-hover:translate-y-10 group-hover:scale-125': true
            }"
          >
            <NuxtImg :src="act.maskot" :class="['w-auto object-contain', act.maskotClass || 'h-44']" 
          format="webp"
          quality="80"
          sizes="xs:100vw sm:100vw md:50vw"
          loading="lazy"
          alt="maskot" 
            />
          </div>
        </div>

        <div 
          class="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
          :class="{
            'opacity-100 translate-y-0': activeIndex === index,
            'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0': true
          }"
        >
          <LayoutLihatDetail to="/blog" class="pointer-events-auto" />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const toggleActive = (index: number) => {
  // Jika klik kartu yang sudah terbuka, tutup kartu tersebut
  // Jika klik kartu lain, buka kartu tersebut dan otomatis menutup yang lama
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}

const activities = [
  {image: '/assets/ra/gplanet.png', logo: '/assets/ra/planet.png', maskot: '/assets/ra/iplanet.png' },
  {image: '/assets/ra/gkart.png', logo: '/assets/ra/kart.png', maskot: '/assets/ra/ikart.png', maskotClass: 'h-65 mt-2' },
  {image: '/assets/ra/gjungle.png', logo: '/assets/ra/jungle.png', maskot: '/assets/ra/ijungle.png', maskotClass: 'h-60 mt-4 mr-4' },
  {image: '/assets/ra/gfarm.png', logo: '/assets/ra/farm.png', maskot: '/assets/ra/ifarm.png', maskotClass: 'h-60 mt-4 mr-2' },
  {image: '/assets/ra/gisland.png', logo: '/assets/ra/island.png', maskot: '/assets/ra/iisland.png' },
  {image: '/assets/ra/gcity.png', logo: '/assets/ra/city.png', maskot: '/assets/ra/icity.png' },
]
</script>