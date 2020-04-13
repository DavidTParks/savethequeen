<template>
<div class="min-h-screen bg-gray-100 pb-24">
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

<style lang="scss">
.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

/* purgecss start ignore */
// Variables
$vue-content-placeholders-primary-color: #ccc !default;
$vue-content-placeholders-secondary-color: #eee !default;
$vue-content-placeholders-border-radius: 6px !default;
$vue-content-placeholders-line-height: 15px !default;
$vue-content-placeholders-spacing: 10px !default;



// Animations
@keyframes vueContentPlaceholdersAnimation {
  0% {
    transform: translate3d(-30%, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}



// Mixins
@mixin vue-content-placeholders {
  position: relative;
  overflow: hidden;
  height: $vue-content-placeholders-line-height;
  background: $vue-content-placeholders-secondary-color;

  .vue-content-placeholders-is-rounded &  {
    border-radius: $vue-content-placeholders-border-radius;
  }

  .vue-content-placeholders-is-centered & {
    margin-left: auto;
    margin-right: auto;
  }

  .vue-content-placeholders-is-animated &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 1000px;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, darken($vue-content-placeholders-secondary-color, 5%) 15%, transparent 30%);
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: vueContentPlaceholdersAnimation;
    animation-timing-function: linear;
  }
}

@mixin vue-content-placeholders-spacing {
  [class^="vue-content-placeholders-"] + & {
    margin-top: 2 * $vue-content-placeholders-spacing;
  }
}



// Styles
.vue-content-placeholders-heading {
  @include vue-content-placeholders-spacing;
  display: flex;

  &__img {
    @include vue-content-placeholders;
    width: 2 * $vue-content-placeholders-line-height + 3 * $vue-content-placeholders-spacing;
    height: 2 * $vue-content-placeholders-line-height + 3 * $vue-content-placeholders-spacing;
    margin-right: 1.5 * $vue-content-placeholders-spacing;
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    @include vue-content-placeholders;
    width: 85%;
    margin-bottom: $vue-content-placeholders-spacing;
    background: $vue-content-placeholders-primary-color;
  }

  &__subtitle {
    @include vue-content-placeholders;
    width: 90%;
  }
}

.vue-content-placeholders-text {
  @include vue-content-placeholders-spacing;

  &__line {
    @include vue-content-placeholders;
    width: 100%;
    margin-bottom: $vue-content-placeholders-spacing;

    &:nth-child(4n + 1) {
      width: 80%;
    }

    &:nth-child(4n + 2) {
      width: 100%;
    }

    &:nth-child(4n + 3) {
      width: 70%;
    }

    &:nth-child(4n + 4) {
      width: 85%;
    }
  }
}

.vue-content-placeholders-img {
  @include vue-content-placeholders;
  @include vue-content-placeholders-spacing;
  width: 100%;
  height: 120px;
}

/* purgecss end ignore */
</style>