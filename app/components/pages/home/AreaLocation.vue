<template>
  <section class="py-20">
    <UContainer>
      <div class="mb-10">
        <h2 class="text-4xl text-white font-bold flex items-center gap-3 leading-none">
          <IconTriangle />
          <span class="inline-block">Area, lokasi dan Jam Operasional Kami</span>
        </h2>
        <p class="text-white/70 mt-2 text-xl">Kami tidak hanya punya satu dunia, tapi kami punya banyak!</p>
      </div>


      <div class="relative overflow-hidden mb-16 group">
        <NuxtImg 
          src="/assets/map.png" 
          alt="Map Wisata"
          class="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105 cursor-zoom-in"
        />
        <div class="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        
        <div class="bg-white/2 backdrop-blur-xl p-8 rounded-3xl border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-colors">
          <div>
            <h3 class="text-2xl font-bold text-white mb-3">Lokasi</h3>
            <p class="text-gray-300">Jl. Rancakendal Luhur No.9, Ciburial, Kecamatan Cimenyan, Kabupaten Bandung, Jawa Barat 40191</p>
          </div>
          <NuxtLink 
            to="https://maps.app.goo.gl/6DXhqDWB6syrDa5U8" 
            target="_blank"
            class="mt-6 flex items-center text-[#A0D033] font-bold hover:underline"
          >

          <span class="text-[#A0D033]">   Buka Google Maps
          </span>
          </NuxtLink>
        </div>

        <div class="bg-white/2 backdrop-blur-xl p-8 rounded-3xl border border-white/20 flex flex-col hover:bg-white/15 transition-colors">
          <h3 class="text-2xl font-bold text-white mb-3">Wahana</h3>
          <p class="text-gray-300 mb-6">Nikmati keseruan wahana kami setiap hari mulai jam 10:00 - 17:00 WIB.</p>
          
          <div class="mt-auto pt-6 border-t border-white/10">
            <p class="text-white items-center ">
              Saat Ini: 
              <span 
                :class="isWahanaOpen ? 'text-[#A0D033]' : 'text-red-500'" 
                class="font-black px-3 py-1 text-md tracking-widest"
              >
                {{ isWahanaOpen ? 'Buka' : 'Tutup' }}
              </span>
            </p>
          </div>
        </div>

        <div class="bg-white/2 backdrop-blur-xl p-8 rounded-3xl border border-white/20 flex flex-col hover:bg-white/15 transition-colors">
          <h3 class="text-2xl font-bold text-white mb-3">Cafetaria</h3>
          <p class="text-gray-300 mb-6">Tersedia berbagai pilihan makanan lezat jam 13:00 - 21:00 WIB.</p>
          
          <div class="mt-auto pt-6 border-t border-white/10">
            <p class="text-white items-center ">
              Saat Ini: 
              <span 
                :class="isCafeOpen ? 'text-[#A0D033]' : 'text-red-500'" 
                class="font-black px-3 py-1 text-md tracking-widest"
              >
                {{ isCafeOpen ? 'Buka' : 'Tutup' }}
              </span>
            </p>
          </div>
        </div>

      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

// Reaktifitas waktu
const currentTime = ref(dayjs().tz("Asia/Jakarta"))
const isWahanaOpen = ref(false)
const isCafeOpen = ref(false)

const checkStatus = () => {
  const now = dayjs().tz("Asia/Jakarta")
  currentTime.value = now
  const currentHour = now.hour()

  // Status Wahana (10:00 - 17:00)
  isWahanaOpen.value = currentHour >= 10 && currentHour < 17

  // Status Cafe (13:00 - 21:00)
  isCafeOpen.value = currentHour >= 13 && currentHour < 21
}

// Update status setiap menit
onMounted(() => {
  checkStatus()
  setInterval(checkStatus, 60000)
})
</script>