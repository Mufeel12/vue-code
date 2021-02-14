export default async function ({ $axios, store }) {
    let { data } = await $axios.get('languages')

    store.commit('updateLanguages', data.data)
}
