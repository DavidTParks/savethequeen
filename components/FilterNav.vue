<template>
<nav class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
    <h5 class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs">Collections</h5>
    <ul>
        <li class="mb-3 lg:mb-1" v-for="collection in collections">
        <a @click="handleCollectionSorting(collection)" :class="[collection.id === selected ? 'text-red-600' : 'text-gray-600 hover:text-gray-900']" class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block font-medium cursor-pointer">
            <span :class="[collection.id === selected ? 'bg-red-200' : 'hover:text-gray-900']" class="rounded absolute inset-0 opacity-25"></span>
            <span class="relative">{{collection.title}}</span>
        </a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'filter-nav',
    props: ['selected'],
    data() {
        return {
            collections: [],
        }
    },
    async fetch() {
        this.collections = await this.$shopify.collection.fetchAllWithProducts();
    },
    methods: {
        handleCollectionSorting(collection) {
        this.$emit('collectionSelected', collection);
        }
    }
}
</script>