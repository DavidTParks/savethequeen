
export const state = () => ({
    products: [],
    collections: [],
    currentCandle: {},
    checkout: {},
    checkoutID: '',
    checkoutURL: '',
    cart: [],
    cartItemsLoading: []
})

export const getters = {
    checkoutID(state) {
        return state.checkout.id;
    },
}

export const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload;
    },
    SET_COLLECTIONS(state, payload) {
        state.collections = payload;
    },
    SET_CURRENT_CANDLE(state, payload) {
        state.currentCandle = Object.assign(payload);
    },
    ADD_TO_CART(state, payload) {
        state.cart.push(payload);
    },
    REMOVE_FROM_CART(state, payload) {
        state.cart = state.cart.filter((itemID) => {
            return itemID !== payload;
        })
    },
    SET_CHECKOUT(state, payload) {
        state.checkout = Object.assign(payload);
        state.checkoutID = payload.id;
    },
    ADD_CART_ITEM_LOADING(state, payload) {
        state.cartItemsLoading.push(payload);
    },
    REMOVE_CART_ITEM_LOADING(state, payload) {
        state.cartItemsLoading = state.cartItemsLoading.filter(cartItem => {
            return payload !== cartItem;
        })
    }
}


export const actions = {
    async fetchAllProducts({ commit }) {
        const products = await this.$shopify.product.fetchAll();
        const collections = await this.$shopify.collection.fetchAllWithProducts();
        commit("SET_COLLECTIONS", collections);
        commit('SET_PRODUCTS', products)
    },
    
    async getCandleByID({ commit }, slug) {
        const candle = await this.$shopify.product.fetch(slug);
        commit('SET_CURRENT_CANDLE', candle)
    },

    async removeItemFromCart({ commit, state }, buyInfo) {
        const lineItemToRemove = state.checkout.lineItems.find(lineItem => lineItem.variant.id === buyInfo.lineItemID);
        const lineItemIdsToRemove = [lineItemToRemove.id];
        commit('ADD_CART_ITEM_LOADING', buyInfo.lineItemID);
        this.$shopify.checkout.removeLineItems(buyInfo.checkoutID, lineItemIdsToRemove).then(checkout => {
            commit('SET_CHECKOUT', checkout);
            commit('REMOVE_CART_ITEM_LOADING', buyInfo.lineItemID);
            commit('REMOVE_FROM_CART', buyInfo.lineItemID);
        });
        
    },

    async addItemToCart({ commit, state }, buyInfo) {
        console.log(buyInfo.lineItemID)

        const lineItemsToAdd = [
            {
                variantId: buyInfo.lineItemID,
                quantity: 1,
            },
        ];
        commit('ADD_CART_ITEM_LOADING', buyInfo.lineItemID);
        if(state.checkoutID === "") {
            this.$shopify.checkout.create().then(checkout => {
        // Do something with the checkout
                this.$shopify.checkout.addLineItems(checkout.id, lineItemsToAdd).then(checkout => {
                // Do something with the updated checkout
                    commit('ADD_TO_CART', buyInfo.lineItemID);
                    commit('REMOVE_CART_ITEM_LOADING', buyInfo.lineItemID);
                    commit('SET_CHECKOUT', checkout);
                });
            });
        } else {
            // Add an item to the checkout
            this.$shopify.checkout.addLineItems(buyInfo.checkoutID, lineItemsToAdd).then(checkout => {
                commit('SET_CHECKOUT', checkout);
                commit('REMOVE_CART_ITEM_LOADING', buyInfo.lineItemID);
                commit('ADD_TO_CART', buyInfo.lineItemID)
            });
        }
        
    },

    async createCheckout({ commit }) {
        this.$shopify.checkout.create().then(checkout => {
        // Do something with the checkout
        commit('SET_CHECKOUT', checkout)
        });
    },
}