<template>
  <UApp>
    <LayoutHeader />

    <UMain class="min-h-screen flex items-center justify-center py-[80px] ">
      <div class="fixed inset-0 -z-10">
        <NuxtImg src="/bg/Background.png" class="w-full h-full object-cover" />
      </div>

      <div class="text-center px-4">
        <NuxtImg 
          src="/assets/404.png" 
          alt="404 Not Found"
          style="width: 8cm !important;"
          class="mx-auto mb-8 animate-bounce-slow"
        />

        <h1 class="text-4xl md:text-5xl font-black text-white mb-4">
          Halaman <span class="text-[#A0D033]">Belum Tersedia</span>
        </h1>
        
        <p class="text-gray-300 text-lg max-w-md mx-auto mb-8">
          Maaf, sepertinya halaman yang Anda cari sedang dalam perbaikan atau pengembangan dari tim developer web.
        </p>

        <UButton
          label="Kembali ke Beranda"
          size="xl"
          class="bg-[#A0D033] hover:bg-[#8eb82b] text-black font-bold px-10 py-4 rounded-md transition-transform hover:scale-105"
          @click="handleClearError"
        />
      </div>
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
const route = useRoute()
const slugParams = route.params.slug as string[]

// Ambil tipe dan ID dari URL (misal: /tiket/123)
const tipe = slugParams[0]
const id = slugParams[1]


const handleClearError = () => {
  clearError({ redirect: '/' })
}


// LOGIKA: Jika ID tidak ada (seperti di /tentang), 
// atau panjang array slug kurang dari 2, langsung lempar ke error.vue
if (!id || slugParams.length < 2) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Halaman Tidak Ditemukan',
    fatal: true // Ini akan memaksa Nuxt merender error.vue
  })
}

// Jika lolos validasi (ada ID), baru panggil API
const { data, error } = await useFetch(`/api/detail/${tipe}/${id}`)

// Jika di API pun tidak ada datanya, lempar ke error juga
if (error.value || !data.value) {
  throw showError({
    statusCode: 404,
    fatal: true
  })
}
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>