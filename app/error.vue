<template>
  <UApp>
    <NuxtLayout name="background">
      <UMain class="min-h-screen flex items-center justify-center py-[80px]">
        <div class="text-center px-4 w-full max-w-4xl mx-auto">
          <NuxtImg 
            src="/assets/404.png" 
            alt="Coming Soon"
            sizes="xs:100vw sm:100vw md:50vw"
            format="webp"
            loading="lazy"
            class="mx-auto mb-8 animate-bounce-slow w-full max-w-[500px] h-auto object-contain"
          />
  
          <h1 class="text-4xl md:text-6xl font-black text-white mb-4">
            Coming Soon
          </h1>
          
          <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Maaf, sepertinya halaman yang Anda cari sedang dalam tahap pengembangan atau pembaruan oleh tim developer kami. Tunggu kejutan selanjutnya!
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 text-center">
  
            <UButton
              label="Kembali ke Beranda"
              size="xl"
              class="bg-[#A0D033] hover:bg-[#8eb82b] text-black font-bold px-10 py-4 rounded-md transition-transform hover:scale-105"
              @click="handleHome"
            />
            <UButton
              label="Halaman Sebelumnya"
              size="xl"
              class="bg-[#A0D033] hover:bg-[#8eb82b] text-black font-bold px-10 py-4 rounded-md transition-transform hover:scale-105"
              @click="handleBack"
            />
          </div>
        </div>
      </UMain>
    </NuxtLayout>

  </UApp>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

const router = useRouter()

const handleBack = () => {
  router.back()
}

const handleHome = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>

</style>