<template>
  <footer class="relative z-20 bg-white pt-16 pb-8 text-gray-600 w-full">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        <div class="lg:col-span-1">
          <NuxtImg src="/favicon.ico" class="h-16 w-auto mb-4" alt="HomPim Play Logo" 
          format="webp"
          quality="80"
          />
          <p class="text-[#9333ea] font-bold text-lg whitespace-nowrap"> Smart Play for Happy Day</p>
          <!-- <p class="text-[#9333ea] font-bold text-lg">Smart Play for Happy Day</p> -->
        </div>

        <div>
          <h4 class="flex items-center gap-2 text-black font-black uppercase mb-6 italic">
            <IconTriangle :size="16" />
            Layanan
          </h4>
          <ul class="space-y-4 font-medium">
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Reservasi Grup</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Pemesanan Online</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Penawaran Khusus</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="flex items-center gap-2 text-black font-black uppercase mb-6 italic">
            <IconTriangle :size="16" />
            Sosial Media
          </h4>
          <ul class="space-y-4 font-medium">
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Instagram</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Tiktok</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">YouTube</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="flex items-center gap-2 text-black font-black uppercase mb-6 italic">
            <IconTriangle :size="16" />
            Tentang
          </h4>
          <ul class="space-y-4 font-medium">
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Masukan & Saran</NuxtLink></li>
            <li><NuxtLink to="#" class="hover:text-[#9333ea] transition-colors">Kebijakan & Privasi</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="flex items-center gap-2 text-black font-black uppercase mb-6 italic">
            <IconTriangle :size="16" />
            Cashless Payment
          </h4>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-lg p-2 flex items-center justify-center h-12 shadow-sm">
              <NuxtImg  src="/assets/qris.png" class="w-20" 
          format="webp"
          quality="80"              
              />
            </div>
            <div class="rounded-lg p-2 flex items-center justify-center h-12 shadow-sm">
              <NuxtImg src="/assets/mastercard.png" class="w-12" 
          format="webp"
          quality="80"              
              />
            </div>
            <div class="rounded-lg p-2 flex items-center justify-center h-12 shadow-sm">
              <NuxtImg src="/assets/gopay.png" class="w-20" 
          format="webp"
          quality="80"              
              />
            </div>
            <div class="rounded-lg p-2 flex items-center justify-center h-12 shadow-sm">
              <NuxtImg src="/assets/visa.webp" class="w-12" 
          format="webp"
          quality="80"              
              />
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 pt-8 mt-8">
        <div class="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold text-gray-700 mb-8">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-phone" class="w-5 h-5" />
            +62 811 2345 6789
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5" />
            +62 811 2345 6789
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
            cs@hompimplaybandung.com
          </div>
        </div>
        
        <div class="text-center text-xs text-gray-400 font-medium">
          © 2025 Hompimplay Bandung. All Rights Reserved.
        </div>
      </div>
    </UContainer>
  </footer>
</template>