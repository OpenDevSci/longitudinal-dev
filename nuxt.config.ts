// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  extends: ['@nuxt/ui-pro'],
  components: true,
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss'
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'ArticleList', 'SimpleCarousel'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  colorMode: {
    disableTransition: true
  },

  nitro: {
    prerender: {
      routes: [
        '/', // Home page
        '/abcd-study/'
      ],
      crawlLinks: true, // Enable crawling to find more links automatically
      ignore: []
    }
  },

  // routeRules: {
  //   '/api/search.json': { prerender: true },
  //   '/abcd-study': { static: true }, // Force this route to be static to prevent dynamic hydration issues
  //   '/tutorials': { static: true } // Same adjustment for related routes
  // },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/longitudinal-dev/', // Set this to your GitHub repo slug
    trailingSlash: true // Ensure URLs maintain consistency with or without a trailing slash
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  content: {
    documentDriven: true, // Ensuring document-driven mode is correctly enabled
    highlight: {
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'md', 'yaml', 'r', 'mdc']
    }
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/css/main.css'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  compatibilityDate: '2024-07-11'
})
