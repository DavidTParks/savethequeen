<template>
<div class="min-h-screen">
    <div class="container max-w-5xl mx-auto pt-32 px-4">
        <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-center">Thank you!</h1>
        <div class="max-w-sm flex flex-col items-center justify-center mx-auto">
            <h3 class="text-center text-2xl mt-4">We will get back to you soon.</h3>
            <nuxt-link to="/candles" href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 mt-12">
            Continue Shopping
            </nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'detail',
}
</script>