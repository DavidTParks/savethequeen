
export const state = () => ({
    products: [],
    currentCandle: {},
    checkout: '',
    cart: []
})

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload;
    },
    SET_CURRENT_CANDLE(state, payload) {
        state.currentCandle = payload;
    },
    ADD_TO_CART(state, payload) {
        state.cart.push(payload);
    },
    SET_CHECKOUT(state, payload) {
        state.checkout = payload;
    }
}


export const actions = {
    async fetchAllProducts({ commit }) {
        const products = await this.$shopify.product.fetchAll();
        commit('SET_PRODUCTS', products)
    },
    
    async getCandleByID({ commit }, slug) {
        const candle = await this.$shopify.product.fetch(slug);
        commit('SET_CURRENT_CANDLE', candle)
    },

    async addItemToCart({ commit }, itemID) {
        commit('ADD_TO_CART', itemID)
    },

    async createCheckout({ commit }) {
        this.$shopify.checkout.create().then(checkout => {
        // Do something with the checkout
        commit('SET_CHECKOUT', checkout)
        });
    },
}