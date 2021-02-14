let user_data = sessionStorage.getItem('user')

export const state = () => ({
    user: user_data ? JSON.parse(user_data) : []
})

export const mutations = {
    updateUser(state, data) {
        state.user = data
    }
}

export const actions = {
    async getUser({ commit }, value) {
        const token = localStorage.getItem('token')
        let { data } = await this.$axios.get('profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        sessionStorage.setItem('user', JSON.stringify(data.data))
        commit('updateUser', data.data)
        return data.data
    }
}
