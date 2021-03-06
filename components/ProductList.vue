<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pt-6">
                <content-placeholders v-for="n in 9"  :rounded="true" :key="n">
                    <content-placeholders-img />
                    <content-placeholders-heading />
                </content-placeholders>
            </div>
        </template>
        <template v-else-if="$fetchState.error">
            <h3>Error fetching candles</h3>
        </template>
        <template v-else>
            <div v-if="productSortPriceDescending.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:pr-0 pt-6">
                <template v-for="candle in productSortPriceDescending">
                    <ProductCard v-if="candle.availableForSale" class="my-4 sm:my-0" :key="candle.id" :product="candle"></ProductCard>
                </template>
            </div>
            <div v-else class="px-6 pt-6">
                <h3>No Products Found</h3>
            </div>
        </template>
    </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
    name: 'product-list',
    props: {
        selectedPrice: {
            type: String
        },
        search: {
            type: String,
            default: ''
        }
    },  
    components: {
        ProductCard
    },
    data() {
        return {
            products: []
        }
    },
    async fetch() {
        if(this.$route.query.collection) {
            let collection = await this.$shopify.collection.fetchWithProducts(this.$route.query.collection);
            this.products = collection.products;
        } else {
            this.products = await this.$shopify.product.fetchAll(200);
        }
    },
    computed: {
        filteredProductsByPrice() {
            if(this.selectedPrice) {
                return this.products.filter(product => {
                    return product.variants[0].price === this.selectedPrice;
                })
            } else {
                return this.products;
            }
        },
        searchFilteredProducts() {
            return this.filteredProductsByPrice.filter(product => {
                return product.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
            })
        },
        productSortPriceDescending() {
            return this.searchFilteredProducts.sort((a,b) => {
                return parseInt(a.variants[0].price) - parseInt(b.variants[0].price)
            })
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
}
</script>