<template>
  <UContainer class="pt-16">
      <div class="mb-10">
        <h2 class="text-2xl sm:text-4xl text-white font-bold flex items-center gap-3 leading-none">
          <IconTriangle  size="24"/>
          <span class="inline-block">Jelajahi Petualangan</span>
        </h2>
        <p class="text-white/70 mt-2 text-md sm:text-xl">Uji ketangkasanmu di zona tantangan atau bersantai menikmati wisata edukasi. Satu destinasi, ribuan keseruan</p>
      </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">    
    <div class="relative group overflow-hidden rounded-3xl h-full">
        <NuxtImg 
          src="/assets/pt/1.png" 
          class="w-full h-full object-cover translate-y-[-20%] transition-transform duration-700 group-hover:scale-110"
              format="webp"
              quality="80" 
              sizes="sm:100vw md:50vw lg:800px"          
        />
        <NuxtImg 
          src="/assets/pt/blue.png" 
          class="absolute inset-0 w-full h-full translate-y-[50%] sm:translate-y-[55%]" 
              format="webp"
              quality="80"          
        />
        <div class="absolute inset-x-0 bottom-0 h-[50%] w-[110%] sm:h-[40%] p-6 flex flex-col justify-start">
          <div class="mb-2 sm:mb-4">
            <h3 class="text-xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
              Wahana Utama
            </h3>
            <p class="text-white/90 text-[10px] leading-relaxed max-w-[90%] 
          max-h-[40px] 
          min-[360px]:max-h-[60px]
          min-[400px]:text-[14px]  
          min-[421px]:max-h-[90px]
          sm:max-h-none md:max-h-[90px]
          lg:max-h-none
          overflow-y-auto pr-2 
          sm:pr-0">
            Rasakan sensasi meluncur dari ketinggian dengan kecepatan penuh di Flying Fox Dewasa! Wahana ini dirancang khusus untuk remaja hingga orang dewasa yang menyukai tantangan dan adrenalin. Dengan lintasan panjang dan panorama indah, pengalaman ini akan memberi Anda keberanian sekaligus keseruan tak terlupakan.
            </p>
          </div>
          <LayoutLihatDetail size="sm sm:md" to="/blog" />
        </div>
      </div>

      <div class="flex flex-col gap-6 h-full">
        <div class="relative group overflow-hidden rounded-2xl flex-1">
            <NuxtImg 
              src="/assets/pt/2.png" 
              class="w-full h-full object-cover translate-x-[-25%] transition-transform duration-700 group-hover:scale-110" 
              format="webp"
              quality="80"              
            />
            <NuxtImg 
              src="/assets/pt/pink.png" 
              class="absolute inset-0 w-full h-full translate-x-[38%]" 
              format="webp"
              quality="80"              
            />
            <div class="absolute inset-x-0 top-0 left-[38%] h-[45%] px-6 py-2 sm:py-6 flex flex-col justify-start">
              <div class="mb-2 sm:mb-4 gap-4">
                <h3 class="text-xl sm:text-3xl font-bold text-white py-2 sm:py-4 tracking-tight">
                  Gokart Anak
                </h3>
                <p class="text-white/90 text-[10px] leading-relaxed max-w-[100%] 
                max-h-[100px] 
                min-[360px]:max-h-[60px]
                min-[400px]:text-[14px]  
                min-[421px]:max-h-[90px]
                sm:max-h-none md:max-h-[90px]
                lg:max-h-none
                overflow-y-auto pr-2 
                sm:pr-0">
                Biarkan si kecil merasakan sensasi balapan seru di Gokart Anak! Dengan kendaraan berukuran mini yang aman dan ramah anak, wahana ini memberikan pengalaman menyenangkan sekaligus melatih koordinasi, konsentrasi, dan sportivitas sejak dini.
                </p>
              </div>
              <LayoutLihatDetail size="sm sm:md" to="/blog" class=" !z-99"/>
            </div>
          </div>

          <div class="relative group overflow-hidden rounded-2xl flex-1">
            <NuxtImg 
              src="/assets/pt/3.png" 
              class="w-full h-full object-cover translate-x-[-25%] transition-transform duration-700 group-hover:scale-110" 
              format="webp"
              quality="80"              
            />
            <NuxtImg 
              src="/assets/pt/green.png" 
              class="absolute inset-0 w-full h-full translate-x-[38%]" 
              format="webp"
              quality="80"              
            />
            <div class="absolute inset-x-0 top-0 left-[40%] h-[35%] px-6 py-2 sm:py-6 flex flex-col justify-start">
              <div class="mb-2 sm:mb-4 gap-4">
                <h3 class="text-xl sm:text-3xl font-bold text-white py-2 sm:py-4 tracking-tight">
                  Taman Bermain Air
                </h3>
                <p class="text-white/90 text-[10px] leading-relaxed max-w-[100%] 
                max-h-[90px] 
                min-[360px]:max-h-[60px]
                min-[400px]:text-[14px]  
                min-[421px]:max-h-[90px]
                sm:max-h-none md:max-h-[80px]
                lg:max-h-none
                overflow-y-auto pr-2 
                sm:pr-0">
                Nikmati keseruan bermain air bersama keluarga di Taman Bermain Air! Dilengkapi dengan kolam, seluncuran, dan permainan seru lainnya, wahana ini cocok untuk anak-anak maupun orang dewasa yang ingin melepas penat dengan cara yang menyegarkan.
                </p>
              </div>
              <LayoutLihatDetail size="sm sm:md" to="/blog"/>
            </div>
          </div>
        

      </div>

    </div>
  </UContainer>
</template>