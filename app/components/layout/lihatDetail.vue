<template>
<NuxtLink 
        to="/detail" 
        class="inline-flex items-center gap-2 w-fit px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium transition-all duration-300 group/btn hover:border-white"
      >
        Lihat lebih detail
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          class="transition-transform duration-300 group-hover/btn:translate-x-1 "
        >
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
</NuxtLink>
</template>

<script lang="ts" setup>

</script>

<style>

</style>