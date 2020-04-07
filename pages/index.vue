<template>
<div class="min-h-screen">
  <Hero></Hero>
  <div class="container max-w-5xl mx-auto mt-12 px-4">
    <h2 class="text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl text-center">
      Featured Products
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
      <template v-for="product in products">
        <ProductCard :key="product.id" :product="product"></ProductCard>
      </template>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Hero from '~/components/Hero.vue'
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    NavBar,
    Hero,
    ProductCard
  },
  async fetch({ store, params }) {
    await store.dispatch('candles/createCheckout');
    await store.dispatch('candles/fetchAllProducts');
  },
  computed: {
    products() {
      return this.$store.state.candles.products;
    },
    checkout() {
      return this.$store.state.candles.checkout;
    }
  },
}
</script>
