export default defineNuxtRouteMiddleware((to, from) => {

})
export default defineNuxtRouteMiddleware((to) => {
  // Daftar halaman yang ingin Anda matikan/arahkan ke error
  const disabledPaths = ['/akun', '/hompim-store', '/tentang', '/kontak', '/farm', 'tentang' ,'/blog']

  // Jika user mengakses halaman di dalam daftar tersebut
  if (disabledPaths.includes(to.path)) {
    throw showError({
      statusCode: 404,
      statusMessage: 'Halaman Belum Tersedia',
      fatal: true
    })
  }
})