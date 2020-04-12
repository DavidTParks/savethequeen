<template>
<div class="max-w-screen-xl mx-auto ">
<header class="relative z-10 border-b border-gray-200 bg-white flex items-center justify-between px-4 py-4 lg:px-8 pt-6 px-4 sm:px-6 lg:px-8 pb-6">
  <div class="flex items-end">
    <nuxt-link to="/" class="flex items-center">
      <img class="h-8 w-auto sm:h-10" src="~/assets/images/logo.svg"/> 
      <h2 class="text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none ml-4 hidden sm:inline-block">
      Save The Queen
      <!-- <br />
      <span class="text-yellow-600">Candle Company</span> -->
      </h2>
    </nuxt-link>
  </div>

    <div class="text-sm leading-5 hidden md:flex items-center md:pr-4">
      <nuxt-link to="/candles" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Candles</nuxt-link>
      <nuxt-link class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out relative" to="/cart">
        <svg class="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="rounded-full h-6 w-6 inline-flex items-center justify-center bg-gray-900 text-white text-base text-center absolute -top-4 -right-4" v-if="cart.length">{{cart.length}}</span>
      </nuxt-link>
    </div>
    <div class="flex items-center md:hidden -mr-2">
      <button @click="open = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      </div>
  </header>
</div>
</template>

<script>
export default{
  data() {
      return {
          open: false
      }
  },
  computed: {
      cart() {
          return this.$store.state.candles.cart;
      },
  }
}
</script>