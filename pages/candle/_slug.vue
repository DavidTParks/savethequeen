<template>
  <div class="min-h-screen pb-24 pt-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <template>
        <ul class="flex items-center py-2 sm:py-4 mt-4">
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
          <li class="breadcrumb-style">{{ candle.title }}</li>
        </ul>
        <div class="flex flex-col pt-4 py-12 sm:flex-row">
          <div class="w-full sm:w-1/2">
            <img
              class="h-96 sm:h-144 w-full object-contain bg-gray-100"
              :src="
                $shopify.image.helpers.imageForSize(candle.variants[0].image, {
                  maxWidth: 1000,
                  maxHeight: 1000
                })
              "
              :alt="candle.images[0].altText"
            />
          </div>
          <div class="w-full sm:w-1/2 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-0">
            <div class="flex items-center">
              <h3
                class="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:leading-10 text-left"
              >
                ${{ candle.variants[0].price }}
              </h3>
              <div
                v-if="candle.availableForSale"
                class="bg-gray-200 text-gray-900 rounded-full py-2 px-4 ml-4 text-xs uppercase tracking-wider"
              >
                In Stock
              </div>
            </div>
            <h1
              class="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-left"
            >
              {{ candle.title }}
            </h1>
            <p
              class="text-base text-gray-900 mt-4 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0"
            >
              {{ candle.description }}
            </p>
            <div class="flex items-center justify-center flex-col mt-12">
              <button
                v-if="cart.indexOf(candle.variants[0].id) === -1"
                @click="addItemToCart"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Add To Cart
                <template
                  v-if="
                    cartItemsLoading.length > 0 &&
                      cartItemsLoading.indexOf(candle.variants[0].id) !== -1
                  "
                >
                  <svg
                    class="h-4 w-4 rotate ml-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="spinner"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                    />
                  </svg>
                </template>
              </button>
              <button
                v-else
                @click="removeItemFromCart"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Remove From Cart
                <template
                  v-if="
                    cartItemsLoading.length > 0 &&
                      cartItemsLoading.indexOf(candle.variants[0].id) !== -1
                  "
                >
                  <svg
                    class="h-4 w-4 rotate ml-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="spinner"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                    />
                  </svg>
                </template>
              </button>
            </div>
          </div>
        </div>
        <div class="py-12">
          <h2
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mt-0 lg:text-center"
          >
            Related Products
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4 sm:mt-12"
          >
            <template v-for="index in 4">
              <ProductCard
                :key="products[index].id"
                :product="products[index]"
              ></ProductCard>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";
export default {
  layout: "detail",
  components: {
    ProductCard
  },
  data() {
    return {
      candle: {},
      collections: [],
      products: []
    };
  },
  head() {
    return {
      title: `${this.candle.title} - Save The Queen Candle Co.`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.candle.description
        },
        {
          hid: `keywords`,
          name: "keywords",
          content: `${this.candle.title}, candle, candles, beeswax candle, Wisconsin candle`
        },
        //Open Graph og:image:secure_url
        {
          name: "og:title",
          content: `${this.candle.title} - Save The Queen Candle Co.`
        },
        { name: "og:description", content: this.candle.description },
        { name: "og:image", content: `${this.candle.images[0].src}` },
        {
          name: "og:image:secure_url",
          content: `${this.candle.images[0].src}`
        },
        {
          name: "og:url",
          content: `https://savethequeencandleco.com/candle/${this.$route.params.slug}`
        },
        { name: "og:type", content: "article" }
      ]
    };
  },
  async asyncData({ params, route, $shopify }) {
    const candle = await $shopify.product.fetch(route.params.slug);
    const collections = await $shopify.collection.fetchAllWithProducts();
    const products = await $shopify.product.fetchAll();
    return {
      candle,
      collections,
      products
    }
  },
  methods: {
    addItemToCart() {
      this.$store.dispatch("candles/addItemToCart", {
        lineItemID: this.candle.variants[0].id,
        checkoutID: this.checkout
      });
    },
    removeItemFromCart() {
      this.$store.dispatch("candles/removeItemFromCart", {
        lineItemID: this.candle.variants[0].id,
        checkoutID: this.checkout
      });
    }
  },
  computed: {
    checkout() {
      return this.$store.state.candles.checkoutID;
    },
    cart() {
      return this.$store.state.candles.cart;
    },
    cartItemsLoading() {
      return this.$store.state.candles.cartItemsLoading;
    }
  }
};
</script>

<style></style>
