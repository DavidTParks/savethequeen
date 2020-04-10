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
                {{candle.description}}
            </template>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "detail",
  data() {
      return {
          candle: {}
      }
  },
  async fetch() {
    this.candle = await this.$shopify.product.fetch(this.$route.params.slug);
  },
//   async fetch({ store, params }) {
//     await store.dispatch("candles/getCandleByID", params.slug);
//   },
  computed: {
    products() {
      return this.$store.state.candles.products;
    },
    checkout() {
      return this.$store.state.candles.checkout;
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