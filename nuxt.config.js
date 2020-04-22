require('dotenv').config();
const fetch = require('node-fetch');
const shopify = require('shopify-buy');
// import "isomorphic-fetch"
export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: 'Save The Queen Candle Co.',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Our long-lasting candles are custom poured into collectible vintage glassware. We use a blend of natural Wisconsin beeswax, organic coconut oil, natural wicks and essential oils.' },
      { hid: 'keywords', name: 'keywords', content: 'candles, candle, beeswax candle, vintage glassware, vintage, beeswax' },
      { name: 'og:title', content: `Save The Queen Candle Co.` },
      { name: 'og:description', content: 'Our long-lasting candles are custom poured into collectible vintage glassware. We use a blend of natural Wisconsin beeswax, organic coconut oil, natural wicks and essential oils.' },
      { name: 'og:url', content: `https://www.savethequeencandleco.com/` },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: `http://savethequeencandleco.imgix.net/homepage.jpg` },
      { name: 'og:image:secure_url', content: `https://savethequeencandleco.imgix.net/homepage.jpg` },
		],
		link: [ 
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '@/assets/css/transitions.css',
    '@/assets/css/placeholder.scss'
  ],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [
    '~/plugins/vue-placeholders.js',
  ],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-163566969-1'
    }]
  ],
  
  generate: {
    async routes() {
      const client = shopify.buildClient({
        domain: 'savethequeencandles.myshopify.com',
        storefrontAccessToken: process.env.SHOPIFY_TOKEN
      }, fetch);

      const products = await client.product.fetchAll(100);
      const routes = products.map(product => `/candle/${product.id}`)

      return ['/'].concat(routes)
    }
  },
  purgeCSS: {
    whitelist: [
      './assets/css/*.css',
      './assets/css/*.scss',
      './node_modules/vue-content-placeholders/dist/vue-content-placeholders.css',
      './node_modules/vue-content-placeholders/src/styles.scss'
      ],
  },
	/*
  ** Nuxt.js modules
  */
	modules: [
		'nuxt-shopify',
		'@nuxtjs/sitemap',
		// Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // 'nuxt-lazy-load',
    '@nuxtjs/toast',
  ],

	shopify: {
		/**
     * Your shopify domain
     */
		domain: 'savethequeencandles.myshopify.com',

		/**
     * Your shopify storefront access token
     */
    storefrontAccessToken: process.env.SHOPIFY_TOKEN,

		/**
     * This will be larger than the optimized version, as it will contain all fields that are available in the
     * Storefront API. (https://help.shopify.com/en/api/custom-storefronts/storefront-api/reference)
     * This should only be used when you need to add custom queries to supplement the JS Buy SDK queries.
     */
		unoptimized: false
	},
	sitemap: {
		hostname: 'https://savethequeencandleco.com/',
    gzip: true,
    exclude: [
      '/cart',
    ],
  },
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
