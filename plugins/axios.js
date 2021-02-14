export default function ({ $axios, store, redirect, route }) {
    const domain = window.location.hostname.split('.')[1]
    const locale = sessionStorage.getItem('language')
    $axios.setHeader('X-localization', 'en')

    const token = localStorage.getItem("token")
    $axios.setToken(token, 'Bearer')

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)

        if (code === 401 && route.name !== 'index') {
            redirect({ name: 'index' })
        }
    })
}

