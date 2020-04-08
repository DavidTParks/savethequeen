<template>
<div class="min-h-screen">
    <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <template v-for="product in products">
                <ProductCard :key="product.id" :product="product"></ProductCard>
            </template>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Hero from '~/components/Hero.vue'
import MarketingSection from '~/components/MarketingSection'
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    NavBar,
    Hero,
    MarketingSection,
    ProductCard
  },
  layout: 'detail',
  async fetch({ store, params }) {
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
