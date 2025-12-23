<template>
  <NuxtLink 
    to="/#tiket"
    class="fixed right-0 translate-x-[40px] sm:translate-x-[50px] md:translate-x-[55px] lg:translate-x-[50px] top-[65%] sm:top-[60%] md:top-[65%] z-[100] group flex items-center transition-all duration-500 hover:rotate-12 active:rotate-12"
  >
    <div class="relative w-[200px] h-[100px] sm:w-[250px] sm:h-[125px] md:w-[300px] md:h-[150px] lg:w-[300px] lg:h-[175px] flex items-center justify-center">
      
      <NuxtImg 
        src="/assets/tiket.png" 
        class="absolute inset-0 w-full h-full object-contain z-0"
          format="webp"
          quality="80"      
        />

      <div class="relative z-20 w-full h-full flex items-center">
        
        <!-- Logo Icon -->
        <div class="flex-[1] flex justify-center items-center -translate-x-[-76%] rotate-90">
          <NuxtImg 
            src="/favicon.ico" 
            class="w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 transition-all duration-1000 transform rotate-0 group-hover:rotate-4 group-active:rotate-4 opacity-10 group-hover:opacity-100 group-active:opacity-100"
          format="webp"
          quality="80"          
            />
        </div>

        <!-- Text Content -->
        <div class="flex-[2.5] flex flex-col justify-center items-center select-none -translate-x-[2.5%] lg:translate-x-[0.7%]">
          <span class="text-white group-hover:text-[#FF9D00] group-active:text-[#FF9D00] bg-[#971923] text-[14px] sm:text-[18px] md:text-[21px] lg:text-[24px] font-black tracking-tighter transition-colors duration-300 leading-none">
            Beli Tiket
          </span>
          <span class="text-white/80 group-hover:text-white group-active:text-white text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] bg-[#971923] font-bold transition-colors duration-300 mt-0.5 sm:mt-1">
            KLIK DISINI
          </span>
        </div>

      </div>
      
    </div>
  </NuxtLink>
</template>

<style scoped>
.fixed {
  font-family: 'Nunito', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

@media (min-width: 768px) {
  
  .fixed:hover {
    animation-play-state: paused;
  }
}

/* Touch device optimization */
@media (hover: none) and (pointer: coarse) {
  .fixed:active {
    transform: rotate(12deg);
  }
}
</style>