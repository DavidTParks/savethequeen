<template>
<div class="min-h-screen bg-gray-100">
  <div class="py-8">
      <div class="max-w-screen-xl mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div class="flex-col flex sm:flex-row">
          <div class="w-full sm:w-1/4">
            <FilterNav @collectionSelected="handleCollectionSorting" :selected="selected" />
          </div>
          <div class="w-full sm:w-3/4">
            <ProductList/>
          </div>
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
import ProductList from '~/components/ProductList.vue'
import FilterNav from '~/components/FilterNav.vue'
export default {
  components: {
    NavBar,
    Hero,
    MarketingSection,
    ProductCard,
    ProductList,
    FilterNav
  },
  data() {
    return {
      products: [],
      selected: '',
    }
  },
  async fetch() {
    if(this.$route.query.collection) {
      this.selected = this.$route.query.collection;
      let collection = await this.$shopify.collection.fetchWithProducts(this.$route.query.collection);
      this.products = collection.products;
    } else {
      this.products = await this.$shopify.product.fetchAll();
    }
  },
  methods: {
    handleCollectionSorting(collection) {
      if(this.selected === collection.id) {
        this.$router.push(this.$route.path);
        this.selected = '';
      } else {
        this.selected = collection.id;
        this.$router.push({path: this.$route.path, query: { collection: collection.id }});
      }
    }
  },
  layout: 'detail',
  computed: {
    checkout() {
      return this.$store.state.candles.checkout;
    }
  },
  watch: {
    '$route.query': '$fetch'
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