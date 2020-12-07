<template>
  <div class="min-h-screen pb-24">
  <div class="w-full bg-red-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="pr-16 sm:text-center sm:px-16">
        <p class="font-medium text-white">
          <span class="md:hidden">
            Sitewide sale!
          </span>
          <span class="md:inline">
            Use code SALE25 at checkout for 25% off
          </span>
        </p>
      </div>
    </div>
  </div>
    <Hero></Hero>
    <div class="container max-w-5xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <MarketingSection />
      <h2
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mt-12 lg:text-center"
      >Featured Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        <template v-for="collection in collections">
          <FeaturedProductCard :key="collection.id" :collection="collection"></FeaturedProductCard>
        </template>
      </div>
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
      collections: []
    };
  },
  head() {
    return {
      title: `Save The Queen Candle Co. | Collectible Vintage Candles`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Our long-lasting candles are custom poured into collectible vintage glassware. We use a blend of natural Wisconsin beeswax, organic coconut oil, natural wicks and essential oils."
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "wisconsin candles, candle, beeswax candle, vintage glassware, vintage, beeswax"
        },
        {
          name: "og:title",
          content: `Save The Queen Candle Co. | Collectible Vintage Candles`
        },
        {
          name: "og:description",
          content:
            "Our long-lasting candles are custom poured into collectible vintage glassware. We use a blend of natural Wisconsin beeswax, organic coconut oil, natural wicks and essential oils."
        },
        { name: "og:url", content: `https://www.savethequeencandleco.com/` },
        { name: "og:type", content: "website" },
        {
          name: "og:image",
          content: `http://savethequeencandleco.imgix.net/homepage.jpg`
        },
        {
          name: "og:image:secure_url",
          content: `https://savethequeencandleco.imgix.net/homepage.jpg`
        }
      ]
    };
  },
  async fetch() {
    this.collections = await this.$shopify.collection.fetchAllWithProducts();
  },
  computed: {
    checkout() {
      return this.$store.state.candles.checkout;
    }
  }
};
</script>

<style>
</style>