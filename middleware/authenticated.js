export default function ({ redirect }) {
    const expirationDate = localStorage.getItem('expires');
    if (!expirationDate || Date.parse(expirationDate) <= new Date().getTime()) {
        localStorage.removeItem('token');
    }

    const token = localStorage.getItem('token')

    if (token === null) {
        redirect({ name: 'auth.login' })
        return;
    }
}
