export const state = () => ({
    articleData : []
})

export const mutations = {
    updateArticle(state, data) {
        state.articleData = data
    }
}

export const actions = {
    async getArticle({ commit }, slug) {
        const { data } = await this.$axios.get(`courses/${slug}`,)
        commit('updateArticle', data)
        return data
    }
}
