<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    :to="to"
    class="inline-flex items-center justify-center w-fit whitespace-nowrap backdrop-blur-md border border-white/30 rounded-full text-white font-medium transition-all duration-300 group/btn"
    :class="[
      to ? 'hover:bg-white/30 hover:border-white cursor-pointer' : 'opacity-80 cursor-default',
      responsiveClasses 
    ]"
  >
    <span class="leading-none">{{ label }}</span>
    
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      class="transition-transform duration-300 flex-shrink-0"
      :class="[
        { 'group-hover/btn:translate-x-1': to },
        responsiveIconClasses
      ]"
    >
      <path 
        d="M5 12H19M19 12L13 6M19 12L13 18" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  label?: string;
  to?: string | object | null;
  size?: string; 
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Lihat lebih detail',
  to: null,
  size: 'md'
})

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1 gap-1 text-[10px] border-[1px]', 
  md: 'px-5 py-2 sm:py-3 gap-2 text-xs sm:text-sm border-1', 
  lg: 'px-7 py-3.5 gap-3 text-sm border-2'
};

const iconSizeClasses: Record<string, string> = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-5 h-5'
};

const processResponsive = (mapping: Record<string, string>) => {
  if (!props.size) return mapping['md']; // fallback ke default

  return props.size.split(' ').map(s => {
    if (s.includes(':')) {
      const [bp, sz] = s.split(':');
      const classValue = mapping[sz as keyof typeof mapping] || '';
      return classValue ? `${bp}:${classValue}` : '';
    }
    
    return mapping[s as keyof typeof mapping] || '';
  }).join(' ');
};
const responsiveClasses = computed(() => processResponsive(sizeClasses));
const responsiveIconClasses = computed(() => processResponsive(iconSizeClasses));
</script>