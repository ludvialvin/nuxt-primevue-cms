
export default {
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  mode: 'universal',
  router: {
    extendRoutes(routes, resolve) {
        routes.push({
          name: 'custom',
          path: '*',
          component: resolve(__dirname, '~/pages/404.vue')
        })
      }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/spacing.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: 'primevue/resources/themes/saga-blue/theme.css'},
    { src: 'primevue/resources/primevue.min.css'},
    { src: 'primeicons/primeicons.css'},
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/primevue.js', mode: 'client'},
    //{src:'~/plugins/auth.js', mode: 'client'}
  ],  
  /*
  ** Nuxt.js dev-modules
  */
  
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth'
  ],
  axios: {
    baseURL: 'http://localhost:3001',
    proxy: true
  },
  proxy: {
    '/backend/v1/': { target: 'http://localhost:3001', pathRewrite: {'^/backend/': 'api/'} },
    '/secure/': { target: 'http://localhost:3001', pathRewrite: {'^/secure/': ''} }
  },
  auth: {
    plugins: [ '~/plugins/auth.js' ],
    strategies: {
      local: {
        endpoints: {
        	login: false,
        	//login: { url: 'secure/auth/login', method: 'post', propertyName: 'token' },
        	user: false,
          //user: { url: '/backend/v1/users', method: 'post', propertyName: 'user' },
          logout: false,
        },
        // tokenRequired: true,
    	// tokenType: 'bearer',
    	// globalToken: true,
        autoFetchUser: false
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
