export default {
  target: 'static',
  head: {
    title: 'Kristof Gilicze',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A highly resourceful Software Developer and well-rounded IT Professional.'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#2b5797'
      },
      {
        hid: 'msapplication-config',
        name: 'msapplication-config',
        content: '/icons/browserconfig.xml'
      },
      { name: 'theme-color', content: '#406bc7' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap'
      },
      { rel: 'icon', href: 'data:;base64,iVBORw0KGgo=' },
      /* { rel: 'shortcut icon', href: '/favicon.ico' }, */
      { rel: 'shortcut icon', href: 'data:;base64,iVBORw0KGgo=' },
      /*
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/icons/safari-pinned-tab.svg'
      }
      */
    ]
  },

  /*
  pwa: {
    icon: false,
    manifest: {
      name: 'Kristof Gilicze',
      short_name: 'kristofg',
      start_url: '/',
      display: 'standalone',
      theme_color: '#406bc7',
      background_color: '#406bc7',
      description: '',
      icons: [
        {
          src: '/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/android-chrome-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        }
      ]
    }
  },
  */
  /*
  googleAnalytics: {
    id: 'UA-155390144-2',
    debug: {
      sendHitTask: true
    }
  },
  */

  css: ['@/assets/css/style.css'],

  components: true,

  buildModules: ['@nuxtjs/composition-api', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/google-analytics'],

  content: {},

  build: {},

  generate: {
    /*
      Currently there's an issue with static site generation and async functions which means that you'll need to add time between pages being generated to allow for any async functions to resolve, if you are pre-generating any of your pages:
    */
    // choose to suit your project
    interval: 2000,
  },

  plugins: [
    { src: '@/plugins/vue-html2pdf', mode: 'client' },
  ],

  server: {
    port: 8008,
    host: '0.0.0.0'
  }
};
