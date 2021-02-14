import _ from 'lodash'

/**
 * Usage:
 * {{ trans('dashboard.welcome_text', 'Welcome back!') }} returns:
 * - Welcome back!
 *
 * {{ trans('dashboard.welcome_back', 'Welcome back, :user!', {user: 'Captain'}) }} returns:
 * - Welcome back, Captain!
 */

export default async ({ $axios, app }, inject) => {
    let appTranslations = {}
    let allTranslations = {}
    let queue = null

    app.storeTranslations = (key, value) => {
        if (typeof appTranslations[key] === 'undefined') {
            clearTimeout(queue)

            queue = setTimeout(() => {
                app.submitTranslations()
            }, 1000)
        }

        appTranslations[key] = value
    }

    app.submitTranslations = () => {
        if (process.env.ENVIRONMENT !== 'production') {
            if (!Object.keys(appTranslations).length) {
                console.log('No translations available')
                return false;
            }

            $axios.post('store-translations', {
                translations: JSON.stringify(appTranslations)
            })
        }
    }

    let response = await $axios.get('translations')

    allTranslations = response.data.data

    // Set the function directly on the context.app object
    inject('trans', (key, ...args) => {
        let value = allTranslations.find(item => item.key === key)

        if (!value && args.length > 0) {
            value = args[0]
        } else {
            value = value.value
        }

        //app.storeTranslations(key, value)

        if (args.length && typeof args[1] === 'object') {
            _.eachRight(args[1], (paramVal, paramKey) => {
                value = _.replace(value, `:${paramKey}`, paramVal)
            })
        }

        return value
    })
}
