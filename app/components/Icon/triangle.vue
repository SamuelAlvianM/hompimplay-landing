<template>
  <svg 
    :width="props.size" 
    :height="props.size" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="flex-shrink-0 transition-all duration-300"
  >
    <path 
      d="M20.5 10.3L6.5 2.3C5.2 1.5 3.5 2.5 3.5 4V20C3.5 21.5 5.2 22.5 6.5 21.7L20.5 13.7C21.8 13 21.8 11 20.5 10.3Z" 
      fill="#FF9D00" 
      stroke="black" 
      stroke-width="1.5" 
      stroke-linejoin="round"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  size: 24
})
</script>