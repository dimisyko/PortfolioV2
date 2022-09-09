export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true
   },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Portfolio de Sykovaris Dimitrios" },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "msapplication-TileColor", content: "#2d89ef" },
      { name: "theme-color", content: "#ffffff" },
      { hid: 'og:url', property : "og:url", content : "https://bruvisite.netlify.app/" },
      { hid: 'og:type', property : "og:type", content : "website" },
      { hid: 'og:title', property : "og:title", content : "Portfolio" },
      { hid: "og:description", property : "og:description", content : "Portfolio de Sykovaris Dimitrios" },
      { hid: 'og:image', property : "og:image", content : "https://bruvisite.netlify.app/card_meta.jpg" },
      { hid: "twitter:card", property : "twitter:card", content : "summary_large_image" },
      { hid: "twitter:site", property : "twitter:site", content : "@portfolio" },
      { hid: "twitter:creator", property : "twitter:creator", content : "@dimi_syko" },
      { hid: "twitter:title", property : "twitter:title", content : "Portfolio" },
      { hid: "twitter:description", property : "twitter:description", content : "Portfolio de Sykovaris Dimitrios" },
      { hid: "twitter:image", property : "twitter:image", content : "https://bruvisite.netlify.app/card_meta.jpg" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:"180x180", href: "/favicon/apple-touch-icon.png" },
      { rel: 'icon', type:"image/png", sizes:"32x32", href: "/favicon/favicon-32x32.png" },
      { rel: 'icon', type:"image/png", sizes:"16x16", href: "/favicon/favicon-16x16.png" },
      { rel: 'manifest', href: "/favicon/site.webmanifest" },
      { rel: 'mask-icon', href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/base/_fonts.scss',
    '~/assets/scss/base/_global.scss'
  ],
  styleResources: {
      scss: [
        '~/assets/scss/abstracts/_mixins.scss'
      ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/style-resources']
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
