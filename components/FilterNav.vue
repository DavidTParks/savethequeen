<template>
<nav class="px-6 pt-6 text-base lg:text-sm lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
    <template v-if="$fetchState.pending">
        <content-placeholders>
            <content-placeholders-text :lines="3" />
        </content-placeholders>
    </template>
    <template v-else-if="$fetchState.error">
        <h5 class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-base lg:text-xs">Collections</h5>
        <h3>Error fetching collections</h3>
    </template>
    <template v-else>
        <h5 class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-base lg:text-xs">Price</h5>
        <ul class="mb-12">
            <template v-for="price in prices">
                <li class="mb-3 lg:mb-1" :key="price.id">
                    <a @click="handlePriceSorting(price)" :class="[price.value === selectedPrice ? 'text-red-600' : 'text-gray-600 hover:text-gray-900']" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium cursor-pointer text-base">
                        <span :class="[price.value === selectedPrice ? 'bg-red-200' : 'hover:text-gray-900']" class="rounded absolute inset-0 opacity-25"></span>
                        <span class="relative">${{price.value}} - {{price.size}}</span>
                    </a>
                </li>
            </template>
        </ul>
        <h5 class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-base lg:text-xs">Collections</h5>
        <ul>
            <template v-for="collection in collections">
                <li class="mb-3 lg:mb-1" v-if="excludedCollections.indexOf(collection.id) === -1" :key="collection.id">
                    <a @click="handleCollectionSorting(collection)" :class="[collection.id === selected ? 'text-red-600' : 'text-gray-600 hover:text-gray-900']" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium cursor-pointer text-base">
                        <span :class="[collection.id === selected ? 'bg-red-200' : 'hover:text-gray-900']" class="rounded absolute inset-0 opacity-25"></span>
                        <span class="relative">{{collection.title}}</span>
                    </a>
                </li>
            </template>
        </ul>
        <button @click="resetFilters" class="mt-12 w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm leading-6 font-medium rounded-md text-gray-700 bg-gray-200 active:bg-gray-300 hover:text-gray-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-gray-300 transition duration-150 ease-in-out md:py-4 md:text-base md:px-10">
            Reset
            <svg width="24" class="ml-2 h-5 w-5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </template>
</nav>
</template>

<script>
export default {
    name: 'filter-nav',
    props: ['selected', 'selectedPrice'],
    data() {
        return {
            collections: [],
            excludedCollections: [
                "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE2MDg0NzI2NTg2OQ=="
            ],
            prices: [
                {
                    id: "1",
                    value: "15.00",
                    size: "Small (4-6oz)"
                },
                {
                    id: "2",
                    value: "20.00",
                    size: "Medium (6-8oz)"
                },
                {
                    id: "3",
                    value: "25.00",
                    size: "Large (8-12oz)"
                },
                {
                    id: "4",
                    value: "30.00",
                    size: "Grande (12oz or more)"
                }
            ]
        }
    },
    async fetch() {
        this.collections = await this.$shopify.collection.fetchAllWithProducts();
    },
    methods: {
        handleCollectionSorting(collection) {
            this.$emit('collectionSelected', collection);
        },
        handlePriceSorting(price) {
            this.$emit('priceSorted', price);
        },
        resetFilters() {
            this.$emit('resetFilters');
        }
    },
    fetchOnServer: false
}
</script>
