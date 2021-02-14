let user_id = localStorage.getItem('registration_user_id')

export const state = () => ({
    user_id: user_id
})

export const mutations = {
    updateUserId(state, id) {
        state.user_id = id
    }
}

export const actions = {
    setUserId({ commit }, id) {
        localStorage.setItem('registration_user_id', id)
        commit('updateUserId', id)
    }
}
