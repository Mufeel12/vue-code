export const state = () => ({
    historyData: []
});

export const mutations = {
    updatePurchaseHistory(state, data) {
        state.historyData = data;
    }
};

export const actions = {
    async getGifts({ commit }, filter) {
        try {
            const { data } = await this.$axios.get(`gifts${filter}`);
            return data;
        } catch (error) {}
    },
    async getPrize({ commit }, id) {
        try {
            const { data } = this.$axios.get(`gifts/${id}`);
            return data;
        } catch (error) {}
    },
    async purchasePrize({ commit }, id) {
        try {
            const { data } = await this.$axios.post(`purchases/${id}`);
            return data;
        } catch (error) {}
    },
    async giftHistory({ commit }) {
        const { data } = await this.$axios.get(`purchases-history`);
        commit("updatePurchaseHistory", data);
        return data;
    }
};
