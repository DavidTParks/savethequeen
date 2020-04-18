<template>
    <div class="min-h-screen bg-gray-100">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 class="text-4xl text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl mb-12">About Us</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 md:pr-0 py-4 sm:py-12 flex items-center mb-24 rounded-lg">
                <div class="text-left">
                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl text-left sm:max-w-lg mx-auto">Our Story</h2>
                    <p class="text-left mx-auto mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-2xl sm:max-w-lg">Save The Queen Candles began when we poured our first candle into a vintage martini glass, using beeswax from our personal hives located in Northern Wisconsin.</p>
                </div>
                <img class="ml-0 sm:ml-0 rounded-lg overflow-hidden shadow-lg h-96 w-full object-cover" src="https://cdn.shopify.com/s/files/1/0270/8891/2461/collections/custom_resized_0262c08a-a4c7-4b04-931b-a9b4a2323e23.jpg?v=1586557105"/>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:pr-0 py-4 sm:py-12 flex items-center rounded-lg px-6">

                <img class="ml-0 sm:ml-0 rounded-lg overflow-hidden shadow-lg h-96 w-full object-cover" src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80"/>
                <img class="rounded-lg overflow-hidden shadow-lg ml-0 sm:-ml-0 h-96 object-cover" src="https://savethequeencandleco.imgix.net/beeswax-01.jpg?q=1"/>
            </div>
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl text-left sm:max-w-lg mx-auto">Wisconsin Beeswax</h2>
            <div class="mx-auto text-center grid grid-cols-1">
                <div class="">
                    <p class="text-left mx-auto mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-2xl sm:max-w-lg">We immediatly became addicted to the mild allergen-free honey scent, long burn time, warm glow and air-cleaning properties of beeswax.</p>
                </div>
                <div class="">
                    <p class="text-left mx-auto mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-2xl sm:max-w-lg">After perfecting a Wisconsin beeswax and coconut oil blend we started giving them to family and friends. Soon, they were buzzing for more.</p>
                    <p class="text-left mx-auto mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-2xl sm:max-w-lg">By sharing our unique, upcycled candles with you we have the opportunity to support organizations that are working to increase the at risk honeybee population.</p>
                </div>
            </div>
            <nuxt-link to="/candles" class="mt-24 w-full max-w-md sm:max-w-sm mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Browse Candles
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
export default {
    layout: 'detail',
    components: {
        Hero
    }
}
</script>

<style>
</style>