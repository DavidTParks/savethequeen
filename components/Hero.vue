<template>
<div class="relative bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto ">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <div class="pt-6 px-4 sm:px-6 lg:px-8">
        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <nuxt-link to="/" href="#">
                <img class="h-8 w-auto sm:h-10" src="~/assets/images/logo.svg" alt="" />
              </nuxt-link>
              <div class="flex items-center md:hidden mr-2">
                <button @click="open = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <nuxt-link class="ml-4 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out relative" to="/cart">
                    <svg class="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span :class="[cart.length ? 'absolute -top-4 -right-4' : 'hidden']" class="rounded-full h-6 w-6 inline-flex items-center justify-center bg-gray-900 text-white text-base text-center">{{cart.length}}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:pr-4">
            <nuxt-link to="/candles" class="font-medium text-gray-900 hover:text-gray-800 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Candles</nuxt-link>
            <nuxt-link to="/custom-pours" class="ml-8 font-medium text-gray-900 hover:text-gray-800 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Custom Pours</nuxt-link>
            <nuxt-link class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out relative" to="/cart">
                <svg class="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="rounded-full h-6 w-6 inline-flex items-center justify-center bg-gray-900 text-white text-base text-center absolute -top-4 -right-4" v-if="cart.length">{{cart.length}}</span>
            </nuxt-link>
          </div>
        </nav>
      </div>

      <div v-show="open" x-transition:enter="duration-150 ease-out" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
          <div class="rounded-lg bg-white shadow-xs overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="~/assets/images/logo.svg" alt="" />
              </div>
              <div class="-mr-2">
                <button @click="open = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <nuxt-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Home</nuxt-link>
              <nuxt-link to="/candles" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Candles</nuxt-link>
            </div>
            <div>
              <nuxt-link to="/cart" class="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out">
                Cart
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Save The Queen
            <br class="xl:hidden" />
            <span class="text-red-600">Candle Company</span>
          </h2>
          <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Our long-lasting candles are custom poured into collectible vintage glassware. We use a blend of natural Wisconsin beeswax, organic coconut oil, natural wicks and essential oils. 
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <nuxt-link to="/candles" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                See Products
              </nuxt-link>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <nuxt-link to="/about-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-gray-200 hover:text-gray-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-gray-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                About Us
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://savethequeencandleco.imgix.net/homepage.jpg?q=1" alt="" />
  </div>
</div>
</template>

<script>
export default {
    name: 'hero',
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