<template>
    <div class="min-h-screen bg-gray-100">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 class="hidden text-4xl pt-12 text-center tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl mb-12">About Us</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 md:pr-0 py-12 flex items-center mb-24 rounded-lg">
                <div class="text-left">
                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl text-left sm:max-w-lg mx-auto">Our Story</h2>
                    <p class="text-left mx-auto mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-2xl sm:max-w-lg">Save The Queen Candles began when we poured our first candle into a vintage martini glass from our extensive collection of vintage glassware.</p>
                </div>
                <img class="ml-0 sm:ml-0 rounded-lg overflow-hidden shadow-lg h-96 w-full object-cover" src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80"/>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:pr-0 py-12 flex items-center rounded-lg px-6">
                <img class="rounded-lg overflow-hidden shadow-lg ml-0 sm:-ml-0 h-96" src="https://savethequeencandleco.imgix.net/beeswax-01.jpg?q=1"/>
                <div class="">
                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl text-left sm:max-w-lg mx-auto">The North Woods</h2>
                    <p class="text-left mx-auto mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-2xl sm:max-w-lg">We used beeswax from our family beehives located in the pristine woods of Northern Wisconsin. We immediatly became addicted to the mild allergen-free honey scent, long burn timne, warm glow and air-cleaning properties of beeswax.</p>
                </div>
            </div>
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