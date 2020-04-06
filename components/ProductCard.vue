<template>
    <div class="w-full bg-white cursor-pointer relative">
        <nuxt-link :to="`/candle/${product.id}`">
            <img class="object-cover h-64 w-full overflow-hidden" :src="product.images[0].src" :alt="product.images[0].altText">
        </nuxt-link>
        <div class="p-4 text-center">
            <span class="flex items-center absolute top-0 left-0 rounded-full py-2 px-4 bg-gray-900 text-white m-2">
                <p class="">{{product.variants[0].price}}</p>
            </span>
            <h3 class="">{{product.title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-card',
    props: {
       product: Object,
    }
}
</script>