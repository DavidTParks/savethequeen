<template>
    <div class="w-full relative mb-8 sm:mb-8">
        <nuxt-link class="cursor-pointer" :to="`/candle/${product.id}`">
            <!-- <img class="object-cover h-96 sm:h-72 w-full overflow-hidden rounded-lg shadow-lg" :src="product.images[0].src" :alt="product.images[0].altText"> -->
            <img class="object-cover h-56 sm:h-72 w-full overflow-hidden" :src="$shopify.image.helpers.imageForSize(product.variants[0].image, {maxWidth: 500, maxHeight: 500})" :alt="product.images[0].altText">
        </nuxt-link>
        <div class="py-4 text-center">
            <span class="flex items-center absolute top-0 left-0 rounded-full py-2 px-4 bg-gray-900 text-white m-2 shadow text-base">
                <p class="">${{product.variants[0].price}}</p>
            </span>
            <h3 class="text-xl py-2 sm:py-4 leading-6 font-medium text-gray-900 truncate mt-0">{{product.title}}</h3>
        </div>
        <div class="flex items-center justify-center">
            <button v-if="cart.indexOf(product.variants[0].id) === -1" @click="addItemToCart" class="w-full flex items-center justify-center px-10 py-2 border border-transparent text-sm leading-6 font-medium rounded-md text-gray-200 bg-gray-900 hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline focus:border-yellow-300 transition duration-150 ease-in-out">
                Add To Cart
                <template v-if="cartItemsLoading.length > 0 && cartItemsLoading.indexOf(product.variants[0].id) !== -1">
                    <svg class="h-3 w-3 rotate ml-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>
                </template>
            </button>
            <button v-else @click="removeItemFromCart" class="w-full flex items-center justify-center px-10 py-2 border border-transparent text-sm leading-6 font-medium rounded-md text-gray-200 bg-gray-900 hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline focus:border-yellow-300 transition duration-150 ease-in-out">
                Remove From Cart
                <template v-if="cartItemsLoading.length > 0 && cartItemsLoading.indexOf(product.variants[0].id) !== -1">
                    <svg class="h-3 w-3 rotate ml-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>
                </template>
            </button>
        </div>
        <!-- <svg @click="addItemToCart" class="h-8 absolute top-0 right-0 m-2 text-gray-900 fill-current" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg> -->
    </div>
</template>

<script>
export default {
    name: 'product-card',
    props: {
       product: Object,
    },
    methods: {
        addItemToCart() {
            this.$store.dispatch('candles/addItemToCart', { 'lineItemID': this.product.variants[0].id, "checkoutID" : this.checkout});
        },
        removeItemFromCart() {
            this.$store.dispatch('candles/removeItemFromCart', { 'lineItemID': this.product.variants[0].id, "checkoutID" : this.checkout});
        }
    },
    computed: {
        checkout() {
            return this.$store.state.candles.checkoutID;
        },
        cartItemsLoading() {
            return this.$store.state.candles.cartItemsLoading;
        },
        cart() {
            return this.$store.state.candles.cart;
        }
    }
}
</script>