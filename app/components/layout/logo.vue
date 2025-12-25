<!-- <template>
  <NuxtLink 
    to="/" 
    class="relative z-[100] inline-block cursor-pointer pointer-events-auto active:scale-95 transition-transform p-2 -m-2 bottom-2"
  >
    <img 
      src="/favicon.ico" 
      alt="HomPim Play"
      class="max-[390px]:w-[100px] w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 object-contain"
    />
  </NuxtLink>
</template> -->


<template>
  <ClientOnly>
    <NuxtLink 
      to="/#beranda" 
      class="relative z-[100] inline-flex items-center justify-center p-4 cursor-pointer active:scale-95 transition-transform"
    >
      <NuxtImg 
        src="/favicon.ico" 
        alt="HomPim Play"
        preload
        :modifiers="{ format: 'webp', quality: 80 }"
        class="max-[390px]:w-[100px] w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 object-contain"
      />
    </NuxtLink>
  </ClientOnly>
</template>