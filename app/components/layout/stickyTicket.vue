<template>
  <NuxtLink 
    to="/tiket"
    class="fixed right-0 translate-x-[65px] sm:translate-x-[60px] top-[65%] z-[100] group flex items-center transition-all duration-500 hover:rotate-12"
  >
    <div class="relative w-[300px] h-[150px] flex items-center justify-center">
      
      <NuxtImg 
        src="/assets/tiket.png" 
        class="absolute inset-0 w-full h-full object-contain z-0"
      />


      <div class="relative z-20 w-full h-full flex items-center">
        
        <div class="flex-[1] flex justify-center items-center -translate-x-[-76%] rotate-90">
          <NuxtImg 
            src="/favicon.ico" 
            class="w-12 h-6 transition-all duration-500 transform rotate-0 group-hover:rotate-4 opacity-10 group-hover:opacity-100"
          />
        </div>

        <div class="flex-[2.5] flex flex-col justify-center items-center select-non -translate-x-[2.5%] ">
          <span class="text-white group-hover:text-[#FF9D00] bg-[#971923] text-[21px] md:text-md font-black tracking-tighter transition-colors duration-300 leading-none">
            Beli Tiket
          </span>
          <span class="text-white/80 group-hover:text-white text-[12px] bg-[#971923] font-bold transition-colors duration-300 mt-1">
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
}

@keyframes float {
  0% { transform: translateY(-50%) translateX(0); }
  50% { transform: translateY(-50%) translateX(-12px); }
  100% { transform: translateY(-50%) translateX(0); }
}

.fixed:hover {
  animation-play-state: paused;
}
</style>