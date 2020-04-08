<template>
  <div class="min-h-screen">
    <div class="py-12 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">{{currentCandle.description}}</div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "detail",
  async fetch({ store, params }) {
    await store.dispatch("candles/getCandleByID", params.slug);
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
    cart() {
      return this.$store.state.candles.cart;
    }
  }
};
</script>