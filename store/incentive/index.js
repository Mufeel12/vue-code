export const state = () => ({
    modelList: [],
    prevSubs: [],
    gonext: true
});

export const mutations = {
    updatemodelList(state, data) {
        state.modelList = data;
    },
    setId(state, id) {
        state.incentiveId = id;
    },
    setPrevSubmission(state, data) {
        state.prevSubs = data;
    },
    setGonext(state, data) {
        state.gonext = data;
    }
};
export const actions = {
    async getIncentive({ commit }, id) {
        try {
            const { data } = await this.$axios.get(`incentives/${id}`);
            return data;
        } catch (error) {}
    },
    async joinIncentive({ commit }, id) {
        try {
            const data = await this.$axios.post(`incentive-users/${id}`);
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    async getIncentiveHistory({ commit }, list) {
        try {
            const { data } = await this.$axios.get(`incentives-history`);
            return data;
        } catch (error) {}
    },
    async submitSubmission({ commit }, params) {
        try {
            console.log(params);
            const data = await this.$axios.post(`submissions/${params.id}`, params.data);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    updateModelListData({ commit }, modelList) {
        commit("updatemodelList", modelList);
    }
};
