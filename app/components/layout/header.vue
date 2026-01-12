<template>
  <header class="fixed top-0 left-0 right-0 z-[60] w-full bg-black/20 backdrop-blur-lg border-b border-white/5">
    <div class="w-full flex items-center justify-between h-[70px] md:h-[90px] px-4 sm:px-6 md:px-10 lg:px-20">
      
      <!-- Logo -->
      <div class="flex items-center shrink-0">
        <LayoutLogo class="h-[35px] sm:h-[40px] md:h-[50px] w-auto" />
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-8">
        <nav class="flex items-center">
          <UNavigationMenu 
            :items="menuItems" 
            orientation="horizontal"
            :ui="{
              list: 'gap-4 lg:gap-8',
              link: 'before:hidden transition-all duration-300 font-medium text-[15px] py-2 relative group whitespace-nowrap bg-transparent',
              active: 'text-white', 
              inactive: 'text-white'
            }"
          />
        </nav>

        <UButton
          to="https://member.hompimplay.id"
          label="Buat Akun"
          class="bg-[#A0D033] hover:bg-[#8eb82b] !text-black px-6 py-2 transition-colors"
        />
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-2 text-white hover:text-[#A0D033] transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="mobileMenuOpen"
        class="lg:hidden bg-black/25 backdrop-blur-lg border-b border-white/5"
      >
        <nav class="flex flex-col px-4 py-6 space-y-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="text-white hover:text-[#A0D033] hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200 font-medium text-[15px]"
          >
            {{ item.label }}
          </NuxtLink>
          
          <UButton
            to="/akun"
            label="Buat Akun"
            @click="mobileMenuOpen = false"
            class="bg-[#A0D033] hover:bg-[#8eb82b] !text-black px-6 py-3 mt-4 transition-colors w-full justify-center"
          />
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const activeSection = ref('')
const mobileMenuOpen = ref(false)

const menuItems = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Tiket', to: '/#tiket' },
  { label: 'HomPim Store', to: '/hompim-store' },
  { label: 'Farm', to: '/farm' },
  { label: 'Kontak', to: '/kontak' },
  { label: 'Tentang Kami', to: '/tentang' },
  { label: 'Blog', to: '/blog' },
])

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      mobileMenuOpen.value = false
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  // Intersection Observer for active sections
  const sectionIds = ['tiket', 'farm', 'kontak']
  
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -70% 0px', 
    threshold: 0
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      } else {
        if (activeSection.value === entry.target.id) {
          activeSection.value = ''
        }
      }
    });
  }, observerOptions)

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  // Cleanup
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscape)
    observer.disconnect()
  })
})

// Prevent body scroll when mobile menu is open
watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth !important;
}

:global(#tiket), :global(#farm), :global(#kontak) {
  scroll-margin-top: 90px;
}

@media (max-width: 768px) {
  :global(#tiket), :global(#farm), :global(#kontak) {
    scroll-margin-top: 70px;
  }
}

/* Desktop Navigation Styles */
nav :deep(a) {
  position: relative !important;
  color: white !important;
  padding-bottom: 4px; 
}

nav :deep(a)::after {
  content: '';
  position: absolute;
  bottom: 0; 
  left: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-out;
  width: 0; 
}

nav :deep(a:hover::after) {
  width: 100% !important;
}

nav :deep(a[href$="#tiket"])::after {
  width: v-bind("activeSection === 'tiket' ? '100%' : '0'");
}
</style>