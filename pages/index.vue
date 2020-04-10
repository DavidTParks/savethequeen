<template>
  <div class="min-h-screen">
    <Hero></Hero>
    <div class="container max-w-5xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <MarketingSection />
      <h2
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mt-12 lg:text-center"
      >Featured Products</h2>
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
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            <template v-for="collection in collections">
              <FeaturedProductCard :key="collection.id" :collection="collection"></FeaturedProductCard>
            </template>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Hero from "~/components/Hero.vue";
import MarketingSection from "~/components/MarketingSection";
import FeaturedProductCard from "~/components/FeaturedProductCard.vue";
export default {
  components: {
    NavBar,
    Hero,
    MarketingSection,
    FeaturedProductCard
  },
  data() {
    return {
      products: [],
      collections: [],
    }
  },
  async fetch() {
    this.products = await this.$shopify.product.fetchAll();
    this.collections = await this.$shopify.collection.fetchAllWithProducts();
  },
  computed: {
    checkout() {
      return this.$store.state.candles.checkout;
    },
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