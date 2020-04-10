<template>
    <div class="min-h-screen">
        <div class="container max-w-5xl mx-auto mt-32 px-4">
            <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-center">Your Cart</h1>
            <nuxt-link class=" flex justify-center mt-2 cursor-pointer w-full text-center underline" to="/candles" v-if="cart.length > 0">Continue shopping</nuxt-link>
            <div class="max-w-sm flex flex-col items-center justify-center mx-auto" v-if="cart.length === 0">
                <h3 class="text-center text-2xl mt-4">Your cart is currently empty.</h3>
                <nuxt-link to="/candles" href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 mt-12">
                Continue Shopping
                </nuxt-link>
            </div>
            <div class="flex justify-center mt-12" v-if="cart.length > 0">
                <table class="table-auto w-full">
                <thead class="mb-4">
                    <tr>
                        <th class="text-left column-style">Product</th>
                        <th class="text-right column-style">Price</th>
                        <th class="text-center column-style">Quantity</th>
                        <th class="text-right column-style">Total</th>
                    </tr>
                </thead>
                <tbody class="mt-4 pt-4">
                    <template v-for="lineItem in checkout.lineItems">
                        <tr class="border-t border-b" :key="lineItem.id">
                            <td class="pb-4 pt-4 inline-flex flex-shrink flex-col md:flex-row">
                                <img class="h-24 w-24 object-cover" :src="lineItem.variant.image.src">
                                <div class="inline-flex flex-col ml-0 md:ml-4">
                                    <h3 class="font-bold mt-2">{{lineItem.title}}</h3>
                                    <a @click="removeItemFromCart(lineItem.variant.id)" class="cursor-pointer w-32 mt-4 flex items-center justify-center px-4 py-1 border border-transparent text-xs leading-6 font-medium rounded-md text-gray-200 bg-gray-900 hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline focus:border-red-300 transition duration-150 ease-in-out">
                                        Remove
                                    </a>
                                </div>
                            </td>
                            <td class="text-right">
                                ${{lineItem.variant.price}}
                            </td>
                            <td class="text-center">
                                
                                {{lineItem.quantity}}
                            </td>
                            <td class="text-right">
                                ${{lineItem.variant.price}}
                            </td>
                        </tr>
                    </template>
                </tbody>
                </table>
            </div>
            <template v-if="cart.length >0">
                <div class="flex w-full justify-end items-end mt-16 flex-col">
                    <h3 class="w-full text-right">Subtotal <span class="pl-12">${{checkout.subtotalPrice}} USD</span></h3>
                    <p class="mt-2 text-sm">Taxes and shipping calculated at checkout</p>
                </div>
                <div v-if="cart.length > 0" class="flex w-full justify-end md:max-w-xs md:ml-auto mt-8">
                    <a :href="checkout.webUrl" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Checkout
                    </a>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'detail',
    methods: {
        removeItemFromCart(variantID) {
            this.$store.dispatch('candles/removeItemFromCart', { 'lineItemID': variantID, "checkoutID" : this.checkoutID});
        }
    },
    computed: {
        products() {
            return this.$store.state.candles.products;
        },
        currentCandle() {
            return this.$store.state.candles.currentCandle;
        },
        checkout() {
            return this.$store.state.candles.checkout;
        },
        checkoutID() {
            return this.$store.state.candles.checkoutID;
        },
        cart() {
            return this.$store.state.candles.cart;
        },
    },
}
</script>

<style>
.column-style {
    @apply text-base leading-6 font-medium text-gray-700;
}

.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>