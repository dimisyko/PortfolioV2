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
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      { hid: 'og:url', property : "og:url", content : "https://dimi-portfolio.netlify.app/" },
      { hid: 'og:type', property : "og:type", content : "website" },
      { hid: 'og:title', property : "og:title", content : "Portfolio" },
      { hid: "og:description", property : "og:description", content : "Portfolio de Sykovaris Dimitrios" },
      { hid: 'og:image', property : "og:image", content : "https://dimi-portfolio.netlify.app/card_meta.jpg" },
      { hid: "twitter:card", property : "twitter:card", content : "summary_large_image" },
      { hid: "twitter:site", property : "twitter:site", content : "@portfolio" },
      { hid: "twitter:creator", property : "twitter:creator", content : "@dimi_syko" },
      { hid: "twitter:title", property : "twitter:title", content : "Portfolio" },
      { hid: "twitter:description", property : "twitter:description", content : "Portfolio de Sykovaris Dimitrios" },
      { hid: "twitter:image", property : "twitter:image", content : "https://dimi-portfolio.netlify.app/card_meta.jpg" },
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
    '~/assets/scss/base/_global.scss',
    '~/assets/scss/abstracts/_sizeFonts.scss'
  ],
  styleResources: {
      scss: [
        '~/assets/scss/abstracts/_mixins.scss'
      ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/animscroll.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    'nuxt-gsap-module'
  ],
  pageTransition: {
    leave(el, done) {
      const gsapLeave = this.$gsap.timeline()
      gsapLeave.set(".bg, .bg-transition", {
        attr: { d: 'M 0 100 Q 50 100 100 100 V 100 Q 50 100 0 100 Z' },
        zIndex : 999
    })
    gsapLeave.to(".bg",{
      attr : {'d' : "M 0 100 Q 50 100 100 100 V 80 Q 50 0 0 80 Z"},
      duration: 0.7,
      ease: 'power4.in',
  })
  gsapLeave.to(".bg",{
    attr : {'d' : "M 0 100 Q 50 100 100 100 V 0 Q 50 0 0 0 Z"},
    duration: 0.4,
    ease: 'power2'
  })
  gsapLeave.add(() => done())
},
    enter () {
      const gsapEnter = this.$gsap.timeline()
      gsapEnter.set(".bg, .bg-transition", {
        attr: { d: 'M 0 100 Q 50 100 100 100 V 0 Q 50 0 0 0 Z' },
        zIndex : 999
    })
    gsapEnter.to(".bg",{
        attr : {'d' : "M 0 80 Q 50 0 100 80 V 0 Q 50 0 0 0 Z"},
        duration: 0.7,
        ease: 'power4.in',
    })
    gsapEnter.to(".bg",{
        attr : {'d' : "M 0 0 Q 50 0 100 0 V 0 Q 50 0 0 0 Z"},
        duration: 0.4,
        ease: 'power2',
    })
    gsapEnter.set(".bg-transition",{
      zIndex : 0
  })
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
