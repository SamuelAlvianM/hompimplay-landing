<template>
  <UApp>
    <LayoutStickyTicket />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <LayoutFooter class="relative z-[10]" />
  </UApp>
</template>

<script setup lang="ts">
  // definePageMeta({
  //     pageTransition: {
  //   name: 'page',
  //   mode: 'out-in'
  // }
  // })
</script>