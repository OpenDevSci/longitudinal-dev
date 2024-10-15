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
        '/' // Home page
        // '/about', // Example additional route (add more routes as necessary)
        // '/longit/tools', // Example
        // '/longit/tutorials' // Example
      ],
      crawlLinks: true, // Enable crawling to find more links automatically
      ignore: [
        // '/tools/6.data-formats',
        '/api/_content/query/JPfzfXpE83.1728957996020.json'
        // '/plotly-view',
        // '/contribute',
        // '/sandbox'
        // '/longit/about',
        // '/longit/getting-started',
        // '/tutorials/data-visualization/viz_customizing-plots-ggplot2',
        // '/longit/tutorials/data-visualization/viz_customizing-plots-ggplot2',
        // '/longit/tutorials/longitudinal-analyses-models/growth-curve-models/multivariate_latent_growth_curve_models_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/mixed-effects-and-multilevel/hierarchical_linear_modeling_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/growth-curve-models/piecewise_growth_models_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/growth-curve-models/multilevel_growth_models_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/crosslagged-and-panel-models/autoregressive_cross_lagged_models_tutorial',
        // '/longit/abcd-study/resources',
        // '/longit/abcd-study/traditional-linear-models',
        // '/longit/tutorials/longitudinal-analyses-models/time-to-event-and-survival-models/survival_analysis_time_dependent_covariates_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/advanced-models/generalized_estimating_equations_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/mixture-models/growth_mixture_models_tutorial',
        // '/longit/tutorials/longitudinal-analyses-models/mixed-effects-and-multilevel/linear-mixedeffects-models',
        // '/longit/tools/programming-languages/r/rtestfile1',
        // '/longit/tools/programming-languages/r/rtestfile2',
        // '/longit/tutorials/longitudinal-analyses-models/mixture-models/latent_class_growth_analysis_autorial',
        // '/longit/tutorials/special-case-tutorials/advanced_bootstrapping-and-resampling',
        // '/longit/tutorials/exploratory-data-analysis/exploratory_diagnostic-plots',
        // '/longit/tutorials/data-wrangling/cleaning-and-transforming-data',
        // '/longit/tutorials/longitudinal-analyses-models/advanced-models/latent-curve-model-with-structured-residuals',
        // '/longit/tutorials/longitudinal-analyses-models/advanced-models/random_intercept_cross_lagged_panel_model_tutorial',
        // '/longit/abcd-study/traditional-nonlinear-models/examples_signedranktest',
        // '/longit/tutorials/exploratory-data-analysis/exploratory_model-evaluation'
        // Add more routes to ignore as needed
      ]
    }
  },

  // other configuration...
  routeRules: {
    '/api/search.json': { prerender: true }
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/longit/' // Set this to your GitHub repo slug
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
