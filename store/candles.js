
export const state = () => ({
    products: [],
    currentCandle: {}
})

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload;
    },
    SET_CURRENT_CANDLE(state, payload) {
        state.currentCandle = payload;
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
    }
}