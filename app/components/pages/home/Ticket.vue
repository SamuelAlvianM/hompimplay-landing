<template>
  <section id="tiket" class="py-12 sm:py-16 md:py-20 lg:py-24 font-['Nunito']">
    <UContainer>
      <div class="mb-8 sm:mb-10 px-4 sm:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-4xl text-white font-bold flex items-center gap-2 sm:gap-3 leading-none">
          <IconTriangle size="24" />
          <span class="inline-block">Harga Tiket</span>
        </h2>
        <p class="text-white/70 mt-2 text-base sm:text-lg md:text-xl">
          Beli tiketnya sekarang dan mainkan Wahananya
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
        <div 
          v-for="(item, index) in ticketData" 
          :key="index"
          class="relative h-[200px] sm:h-[200px] md:h-[220px] w-full max-w-[340px] md:max-w-[400px] mx-auto group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        >
          <NuxtImg 
            :src="item.bgImage" 
          format="webp"
          quality="80"
          sizes="xs:100vw sm:100vw md:20vw"
          loading="lazy"
          alt="background gambar tiket"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[340px] md:w-[400px] h-[340px] md:h-[400px] min-[1px]:max-[390px]:w-[120px] object-contain"
          />

          <div class="relative z-10 h-full w-full flex items-center  min-[1px]:max-[390px]:gap-8">
            
            <div class="w-[42%] h-[50%] flex items-center justify-center">
                <NuxtImg 
                  src="/assets/logoPutih.png" 
                  class="w-[100%] h-auto rotate-90 object-contain opacity-40 drop-shadow-md 
                        translate-x-[-15%]
                        min-[335px]:translate-x-[2%]
                        min-[425px]:translate-x-[-5%]
                        md:translate-x-[-25%] 
                        lg:translate-x-[-50%] 
                        xl:translate-x-[-30%]" 
                  format="webp"
                  quality="80"
                  sizes="xs:100vw sm:100vw md:20vw"
                  loading="lazy"
                  alt="logo hompimplay putih"
                />
            </div>

            <div class="w-[90%] h-full flex flex-col justify-center items-center text-center px-8 md:px-4 translate-x-[-5%] min-[1px]:max-[390px]:ml-[-20px] min-[1px]:max-[390px]:px-0 ">

              
              <div class="mb-1 md:mb-2  ">
                <h3 class="text-[18px] xs:text-[16px] md:text-lg font-extrabold leading-tight whitespace-nowrap min-[1px]:max-[390px]:text-[14px]  " :style="{ color: item.color }">
                  {{ item.name }}
                </h3>
              </div>

              <!-- <div class="flex items-center gap-2 md:gap-4 border-y py-1 md:py-2 w-full justify-center" :style="{ borderColor: item.color + '33' }">
                <div class="flex flex-col items-center">
                  <p class="text-[10px] md:text-[12px] uppercase font-bold opacity-70 mb-0" :style="{ color: item.color }">Weekday</p>
                  <p class="font-black text-[11px] md:text-sm whitespace-nowrap" :style="{ color: item.color }">{{ item.weekday }}</p>
                </div>
                
                <div class="h-6 w-[1px]" :style="{ backgroundColor: item.color + '44' }" /> 
                
                <div class="flex flex-col items-center">
                  <p class="text-[10px] md:text-[12px] uppercase font-bold opacity-70 mb-0" :style="{ color: item.color }">Weekend</p>
                  <p class="font-black text-[11px] md:text-sm whitespace-nowrap" :style="{ color: item.color }">{{ item.weekend }}</p>
                </div> -->
              <!-- </div> -->

              <button 
                @click="beli(item.name)"
                class="mt-2 md:mt-4 text-[10px] md:text-[12px] font-black px-6 md:px-8 py-1.5 md:py-2 rounded-full active:scale-95 transition-all tracking-wider uppercase"
                :style="{ 
                  backgroundColor: item.color + '22', 
                  color: item.color,
                  border: `1px solid ${item.color}44`
                }"
              >
                Beli tiket
              </button>
            </div>

          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">

  const beli = (packageName: string) => {
  navigateTo({
    path: '/checkout',
    query: { paket: packageName }
  })
}
const ticketData = [
  {
    name: 'Paket Family Day - 1',
    weekday: 'Rp 420.000',
    weekend: 'Rp 470.000',
    bgImage: '/assets/ticket/t3.png', 
    color: '#41A893' 
  },
  {
    name: 'Outbond Komunitas',
    weekday: 'Rp 5.000.000',
    weekend: 'Rp 6.000.000',
    bgImage: '/assets/ticket/t2.png',
    color: '#8C862B' 
  },
  {
    name: 'Paket Sekolah Dasar',
    weekday: 'Rp 105.000',
    weekend: 'Rp 105.000',
    bgImage: '/assets/ticket/t1.png', 
    color: '#971923'
  }
]
</script>

<style scoped>
.font-nunito {
  font-family: 'Nunito', sans-serif;
}

/* Smooth animations for mobile */
@media (max-width: 640px) {
  .group:active {
    transform: scale(0.98);
  }
}
</style>