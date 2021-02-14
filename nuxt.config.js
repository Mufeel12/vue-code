import webpack from 'webpack'
require('dotenv').config()

export default {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: 'LG Master',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon/Favicon_32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon/Favicon_16x16.png'
            },

        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: '~/components/loading.vue',

    /*
    ** Global CSS
    */
    css: [
        '~/assets/sass/app.scss'
    ],

    styleResources: {
        scss: [
            '~/assets/sass/base/variables.scss'
        ]
    },

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/axios.js',
        '~/plugins/installComponents.js',
        '~/plugins/loadLanguages.js',
        '~/plugins/translations.js',
        '~/plugins/domain.js',
        '~/plugins/ga.js',
        '~/plugins/vue-smooth-scroll.js',
    ],

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/router',
        '@nuxtjs/dotenv'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        'nuxt-polyfill',
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        ['nuxt-facebook-pixel-module', {
            /* module options */
            track: 'PageView',
            pixelId: '1239744436218277',
            disabled: process.env.ENVIRONMENT !== 'production'
        }]
    ],

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */

    /*
    ** Build configuration
    */
    build: {
        transpile: ['nuxt-vuex-localstorage'],

        extend(config, ctx) {
            config.module.rules.push({
                test: /\.vue$/,
                loader: 'vue-svg-inline-loader',
                options: {}
            })
        },

        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery'
            })
        ]
    },

    polyfill: {
        features: [
            {
                require: 'babel-polyfill'
            }
        ]
    },
};
