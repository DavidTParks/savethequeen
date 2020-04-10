<template>
  <div class="min-h-screen">
    <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <template v-if="$fetchState.pending">
                <content-placeholders  :rounded="true">
                    <content-placeholders-img />
                </content-placeholders>
            </template>
            <template v-else-if="$fetchState.error">
            <p>
                Error while fetching posts: {{ error }}
            </p>
            </template>
            <template v-else>
                <div class="flex">
                    <div class="w-1/2">
                        <img class="h-144 w-full object-contain bg-gray-100" :src="candle.images[0].src">
                    </div>
                    <div class="w-1/2 px-4 sm:px-6 lg:px-8">
                        <h3 class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:leading-10 text-left">${{candle.variants[0].price}}</h3>
                        <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-left">{{candle.title}}</h1>
                        <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{{candle.description}}</p>
                        <div class="flex items-center justify-center flex-col mt-12">
                            <button v-if="cart.indexOf(candle.variants[0].id) === -1" @click="addItemToCart" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Add To Cart
                            </button>
                            <button v-else @click="removeItemFromCart" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Remove From Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div class="py-12">
                    <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mt-12 lg:text-center"
                    >Related Products</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                        <template v-for="product in products">
                            <ProductCard :key="product.id" :product="product"></ProductCard>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
  </div>
</template>


<script>
import ProductCard from "~/components/ProductCard.vue";
export default {
  layout: "detail",
  components: {
      ProductCard
  },
  data() {
      return {
          candle: {},
          collections: [],
          products: [],
      }
  },
  async fetch() {
    this.candle = await this.$shopify.product.fetch(this.$route.params.slug);
    this.collections = await this.$shopify.collection.fetchAllWithProducts();
    this.products = await this.$shopify.product.fetchAll();
  },
   methods: {
        addItemToCart() {
            this.$store.dispatch('candles/addItemToCart', { 'lineItemID': this.candle.variants[0].id, "checkoutID" : this.checkout});
        },
        removeItemFromCart() {
            this.$store.dispatch('candles/removeItemFromCart', { 'lineItemID': this.candle.variants[0].id, "checkoutID" : this.checkout});
        }
    },
//   async fetch({ store, params }) {
//     await store.dispatch("candles/getCandleByID", params.slug);
//   },
  computed: {
    checkout() {
        return this.$store.state.candles.checkoutID;
    },
    cart() {
      return this.$store.state.candles.cart;
    }
  }
};
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>