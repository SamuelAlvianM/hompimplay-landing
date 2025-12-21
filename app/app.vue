<template>
  <UApp>
    <LayoutHeader /> 
    <LayoutStickyTicket />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <LayoutFooter class="relative z-[10]" />
  </UApp>
</template>