<template>
  <div class="min-h-screen bg-gray-100 pb-24 pt-40">
    <div class="py-8">
      <div class="max-w-screen-xl mx-auto sm:pr-6 lg:pr-6">
        <ul class="flex items-center px-6 sm:w-1/4">
          <li class="breadcrumb-style">
            <nuxt-link class="mr-2" to="/">Home</nuxt-link>
            <svg
              class="h-4 w-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li class="breadcrumb-style">
            <nuxt-link class="mr-2" to="/candles">Candles</nuxt-link>
          </li>
        </ul>
        <div class="flex flex-col sm:flex-row justify-between">
          <div class="sm:w-1/4"></div>
          <div class="relative sm:w-3/4 mt-6 sm:mt-0 sm:ml-6 mx-4 sm:mr-2">
            <input
              v-model="search"
              placeholder="Search for candles..."
              class="ml-0 pl-12 sm:ml-2 appearance-none w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            <svg
              class="absolute left-0 top-0 bottom-0 right-0 my-auto sm:ml-6 ml-4 h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="flex-col flex sm:flex-row">
          <div class="w-full sm:w-1/4">
            <FilterNav
              @collectionSelected="handleCollectionSorting"
              @priceSorted="handlePriceSorting"
              @resetFilters="resetFilters"
              :selected-price="price"
              :selected="selected"
            />
          </div>
          <div class="w-full sm:w-3/4">
            <ProductList :search="search" :selected-price="price" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import Hero from "~/components/Hero.vue";
import MarketingSection from "~/components/MarketingSection";
import ProductCard from "~/components/ProductCard.vue";
import ProductList from "~/components/ProductList.vue";
import FilterNav from "~/components/FilterNav.vue";
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
      price: "",
      search: "",
      selected: "",
      products: []
    };
  },
  methods: {
    handleCollectionSorting(collection) {
      if (this.selected === collection.id) {
        this.selected = "";
        this.$router.push(this.$route.path);
      } else {
        this.selected = collection.id;
        this.$router.push({
          path: this.$route.path,
          query: { collection: collection.id }
        });
      }
    },
    handlePriceSorting(price) {
      if (this.price === price.value) {
        this.price = "";
      } else {
        this.price = price.value;
      }
    },
    resetFilters() {
      this.$router.push(this.$route.path);
      this.price = "";
      this.search = "";
      this.selected = "";
    }
  },
  layout: "detail",
  computed: {
    checkout() {
      return this.$store.state.candles.checkout;
    }
  }
};
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
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

  .vue-content-placeholders-is-rounded & {
    border-radius: $vue-content-placeholders-border-radius;
  }

  .vue-content-placeholders-is-centered & {
    margin-left: auto;
    margin-right: auto;
  }

  .vue-content-placeholders-is-animated &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 1000px;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      darken($vue-content-placeholders-secondary-color, 5%) 15%,
      transparent 30%
    );
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
    width: 2 * $vue-content-placeholders-line-height + 3 *
      $vue-content-placeholders-spacing;
    height: 2 * $vue-content-placeholders-line-height + 3 *
      $vue-content-placeholders-spacing;
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

.vue-content-placeholders-heading__title {
  position: relative;
  overflow: hidden;
  height: 15px;
  background: #eee;
  width: 85%;
  margin-bottom: 10px;
  background: #ccc;
}

.vue-content-placeholders-heading__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.vue-content-placeholders-is-animated
  .vue-content-placeholders-heading__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1000px;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    #e1e1e1 15%,
    transparent 30%
  );
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: vueContentPlaceholdersAnimation;
  animation-name: vueContentPlaceholdersAnimation;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

.vue-content-placeholders-heading__subtitle {
  position: relative;
  overflow: hidden;
  height: 15px;
  background: #eee;
  width: 90%;
}

.vue-content-placeholders-is-animated
  .vue-content-placeholders-heading__subtitle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1000px;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    #e1e1e1 15%,
    transparent 30%
  );
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: vueContentPlaceholdersAnimation;
  animation-name: vueContentPlaceholdersAnimation;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
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

.vue-content-placeholders-text__line {
  position: relative;
  overflow: hidden;
  height: 15px;
  background: #eee;
  width: 100%;
  margin-bottom: 10px;
}

.vue-content-placeholders-text__line:nth-child(4n + 2) {
  width: 100%;
}

.vue-content-placeholders-is-animated
  .vue-content-placeholders-text__line::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 1000px;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    #e1e1e1 15%,
    transparent 30%
  );
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: vueContentPlaceholdersAnimation;
  animation-name: vueContentPlaceholdersAnimation;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

.vue-content-placeholders-img {
  @include vue-content-placeholders;
  @include vue-content-placeholders-spacing;
  width: 100%;
  height: 120px;
}

/* purgecss end ignore */
</style>