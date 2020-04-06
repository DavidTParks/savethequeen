<template>
    <div>
        {{checkout}}
    </div>
</template>

<script>
export default {
    layout: 'detail',
    async fetch({ store, params }) {
        await store.dispatch('candles/getCandleByID', params.slug)
    },
    computed: {
        products() {
            return this.$store.state.candles.products;
        },
        currentCandle() {
            return this.$store.state.candles.currentCandle;
        },
        checkout() {
            return this.$store.state.candles.checkout;
        },
        cart() {
            return this.$store.state.candles.cart;
        },
    },
}
</script>