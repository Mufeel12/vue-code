
export const state = () => ({
    productData : []
})

export const mutations = {
    updateProduct(state, data) {
        state.productData = data
    }
}

export const actions = {
    async getProduct({ commit }) {
    	const token = localStorage.getItem('token');
        let { data } = await this.$axios.get(
        	'trainings/course',
        	 {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
        	)
        commit('updateProduct', data)
        return data
    }
}
