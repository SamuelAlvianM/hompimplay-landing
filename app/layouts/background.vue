<template>
  <div class="layout-wrapper">
    <NuxtImg
      src="/assets/bg/Background.png" 
      class="background-image"
      format="webp"
      preload
      quality="80"
      alt="Background"
    />
    <LayoutHeader /> 
    <div class="content-layer relative z-10 flex flex-col min-h-screen">
    
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content-layer {
  position: relative;
  z-index: 1;
}
</style>