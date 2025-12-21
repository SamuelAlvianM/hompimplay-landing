<template>
  <section class="py-24 overflow-hidden font-['Nunito']">
    <UContainer>
      <div class="mb-10">
        <h2 class="text-3xl md:text-4xl text-white font-bold flex items-center gap-3 leading-none">
          <IconTriangle size="32" />
          <span class="inline-block">Sudah Siap Berpetualang?</span>
        </h2>
        <p class="text-white/70 mt-2 text-lg md:text-xl">
          Buat akun dan jelajahi berbagai macam wahana dengan keunikannya masing-masing
        </p>
      </div>

      <div class="relative mt-10 md:mt-20">
        <div class="p-8 md:p-16 flex flex-col md:flex-row items-center justify-start md:justify-end min-h-[500px] md:min-h-[400px]">
          
          <div class="md:w-1/2 space-y-6 z-30 text-center md:text-left mb-[220px] md:mb-0">
            <p class="text-gray-300 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Tidak hanya bermain, namun juga mengedukasi. Scan QR-Code di setiap wahana dan temukan keajaibannya!
            </p>
            
            <div class="flex flex-col gap-4 max-w-xs mx-auto md:mx-0">
              <UButton
                class="rounded-lg py-3 px-6 flex justify-center items-center gap-3 shadow-lg text-black bg-white hover:bg-gray-100 transition-all font-bold"
              >
                <template #leading>
                  <NuxtImg src="/assets/googleIcon.png" class="w-5 h-5" />
                </template>
                Masuk dengan Google
              </UButton>

              <UButton
                variant="outline"
                color="white"
                class="rounded-lg py-3 px-6 flex justify-center items-center gap-3 border-2 hover:bg-white hover:text-black transition-all font-bold"
              >
                <template #leading>
                  <UIcon name="i-heroicons-user-circle" class="w-6 h-6" />
                </template>
                Buat akun kamu
              </UButton>
            </div>
          </div>
        </div>

        <div class="absolute inset-0 pointer-events-none z-20">
          <div class="relative h-full w-full">
            
            <NuxtImg 
              src="/assets/ad.png" 
              class="absolute bottom-[-30%] left-[-5%] h-[80%] xs:h-[90%] md:h-[130%] w-auto object-contain object-bottom drop-shadow-2xl"
            />

            <div class="absolute -bottom-[20%] md:translate-y-[-24px] left-[5%] md:left-[10%] md:bottom-[-30%] flex gap-2 items-end">
              <NuxtImg 
                src="/assets/ad2.png" 
                class="w-28 xs:w-24 md:w-36 h-auto object-contain drop-shadow-lg"
              />
              <NuxtImg 
                src="/assets/ad3.png" 
                class="w-28 xs:w-24 md:w-36 h-auto object-contain drop-shadow-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.bg-white\/5 {
  background: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%);
}
</style>