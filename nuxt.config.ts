import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
// boost performance: https://dev.to/hakimov_dev/top-10-nuxtjs-secrets-to-boost-your-apps-performance-564d
export default defineNuxtConfig({
  // mode: 'universal',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // auto-import components based only on its name, not path
  // https://nuxt.com/docs/guide/directory-structure/components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    /**
     * https://nuxt.com/docs/getting-started/seo-meta
     */
    head: {
      //title: 'Title from config',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,400,500&display=swap'
        }
      ]
    }
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/constants.scss" as *;'
        }
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   * '@nuxt/image': Optimize Images: deliver images in the appropriate
   * format, size, and quality based on the user's device.
   */
  modules: [
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/icon',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
  icon: {
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [
        'heroicons-outline:moon',
        'heroicons-outline:sun',
        'grommet-icons:github',
        'devicon-plain:linkedin',
        'simple-icons:strava',
        'simple-icons:letterboxd',
        'simple-icons:goodreads',
      ],
      // scan all components in the project and include icons
      scan: true,
      // include all custom collections in the client bundle
      includeCustomCollections: true,
      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
  },
  /*
   ** Build configuration
   */
  build: {
    // Optmize CSS
    // extractCSS: true,
  },
  generate: {
    // fix github 404.html
    // fallback: true
  },
})
