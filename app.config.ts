export default defineAppConfig({
  ui: {
    main: {
      // Pastikan 'class' bukan 'base'
      class: 'min-h-[calc(100vh-90px)] overflow-x-hidden'
    },
    navigationMenu: {
      slots: {
        // Hilangkan background abu-abu bawaan secara global
        link: 'bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent'
      }
    }
  }
})