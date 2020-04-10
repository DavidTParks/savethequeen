<template>
<div class="min-h-screen">
    <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <template v-if="$fetchState.pending">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <content-placeholders  :rounded="true">
                <content-placeholders-img />
                <content-placeholders-heading />
              </content-placeholders>
              <content-placeholders  :rounded="true">
                <content-placeholders-img />
                <content-placeholders-heading />
              </content-placeholders>
              <content-placeholders  :rounded="true">
                <content-placeholders-img />
                <content-placeholders-heading />
              </content-placeholders>
            </div>
          </template>
          <template v-else-if="$fetchState.error">
            <p>
              Error while fetching posts: {{ error }}
            </p>
          </template>
           <template v-else>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <template v-for="candle in products">
                  <ProductCard :key="candle.id" :product="candle"></ProductCard>
              </template>
              </div>
            </template>
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
  data() {
    return {
      products: []
    }
  },
  async fetch() {
    this.products = await this.$shopify.product.fetchAll();
  },
  layout: 'detail',
  computed: {
    checkout() {
      return this.$store.state.candles.checkout;
    }
  },
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>