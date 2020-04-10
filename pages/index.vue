<template>
  <div class="min-h-screen">
    <Hero></Hero>
    <div class="container max-w-5xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <MarketingSection />
      <h2
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mt-12 lg:text-center"
      >Featured Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        <template v-for="product in products">
          <ProductCard :key="product.id" :product="product"></ProductCard>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Hero from "~/components/Hero.vue";
import MarketingSection from "~/components/MarketingSection";
import ProductCard from "~/components/ProductCard.vue";
export default {
  components: {
    NavBar,
    Hero,
    MarketingSection,
    ProductCard
  },
  async fetch({ store, params }) {
    await store.dispatch("candles/fetchAllProducts");
  },
  computed: {
    products() {
      return this.$store.state.candles.products;
    },
    checkout() {
      return this.$store.state.candles.checkout;
    },
    collections() {
      return this.$store.state.candles.collections;
    },
    homePageCollection() {
      return this.collections.filter(collection => {
        return (
          collection.id ===
          "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE2MDQ4NDU4OTY0NQ=="
        );
      });
    },
    homePageCollectionProducts() {
      return this.homePageCollection.products;
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