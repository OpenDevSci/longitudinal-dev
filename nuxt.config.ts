// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-og-image'
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  colorMode: {
    disableTransition: true
  },

  nitro: {
    prerender: {
      routes: [
        '/', // Home page
        '/abcd-study', // Add this to ensure the page is pre-rendered
        '/tutorials' // Add other essential routes that are frequently accessed
      ],
      crawlLinks: true, // Enable crawling to find more links automatically
      ignore: []
    },
    // Adjust manual chunking to prevent circular dependencies
    rollupConfig: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/nitropack')) {
            return 'nitropack'
          }
          if (id.includes('node_modules/@nuxt/content')) {
            return 'nuxt-content'
          }
        }
      }
    }
  },

  routeRules: {
    '/api/search.json': { prerender: true },
    '/abcd-study': { static: true }, // Force this route to be static to prevent dynamic hydration issues
    '/tutorials': { static: true } // Same adjustment for related routes
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/longit/', // Set this to your GitHub repo slug
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

  compatibilityDate: '2024-07-11'
})
