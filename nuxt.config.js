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
      { name: 'og:title', content: `Save The Queen Candle Company` },
      { name: 'og:description', content: 'Our long-lasting candles are custom poured into collectible vintage glassware. We use a blend of natural Wisconsin beeswax, organic coconut oil, natural wicks and essential oils.' },
      { name: 'og:url', content: `https://www.savethequeencandleco.com/` },
      { name: 'og:type', content: 'website' },
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
  ],
  
  generate: {
    async routes() {
      const client = shopify.buildClient({
        domain: 'savethequeencandles.myshopify.com',
        storefrontAccessToken: process.env.SHOPIFY_TOKEN
      }, fetch);

      const products = await client.product.fetchAll();
      const routes = products.map(product => `/candle/${product.id}`)

      return ['/'].concat(routes)
    }
  },
	/*
  ** Nuxt.js modules
  */
	modules: [
		'nuxt-shopify',
		'@nuxtjs/sitemap',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv'
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
  plugins: [
    '@/plugins/vue-placeholders.js'
  ],
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
