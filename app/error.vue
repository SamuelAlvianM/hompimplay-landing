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
const props = defineProps({
  error: Object
})

const handleClearError = () => {
  clearError({ redirect: '/' })
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