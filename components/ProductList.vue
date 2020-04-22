<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pt-6">
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
            <h3>Error fetching candles</h3>
        </template>
        <template v-else>
            <div v-if="filteredProductsByPrice.length > 0" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:pr-0 pt-6">
                <template v-for="candle in filteredProductsByPrice">
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
            this.selected = this.$route.query.collection;
        let collection = await this.$shopify.collection.fetchWithProducts(this.$route.query.collection);
            this.products = collection.products;
        } else {
            this.products = await this.$shopify.product.fetchAll(150);
        }
    },
    computed: {
        filteredProductsByPrice() {
            if(this.selectedPrice) {
                return this.searchFilteredProducts.filter(product => {
                    return product.variants[0].price === this.selectedPrice;
                })
            } else {
                return this.searchFilteredProducts;
            }
        },
        searchFilteredProducts() {
            return this.products.filter(product => {
                return product.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
            })
        },
        productSortPriceDescending() {
            return this.products.sort((a,b) => {
                parseInt(b.variants[0].price) - parseInt(a.variants[0].price)
            })
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
}
</script>