<template>
    <div>
        <template v-if="$fetchState.pending">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 pt-6">
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
            <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 pt-6">
                <template v-for="candle in products">
                    <ProductCard class="my-4 sm:my-0" :key="candle.id" :product="candle"></ProductCard>
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
            this.products = await this.$shopify.product.fetchAll();
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
}
</script>