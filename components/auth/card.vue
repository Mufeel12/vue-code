<template>
    <div class="auth-content-box">
        <div class="column card-wrapper">
            <div class="card">
                <div class="lg-logo">
                    <img src="~/assets/images/logo-primary.svg">
                </div>

                <div class="heading" v-if="title || additionalInfo">
                    <h1>
                        <span>{{ title }}</span>

                        <template v-if="additionalInfo">
                            <span class="additional-info">{{ additionalInfo }}</span>
                        </template>
                    </h1>
                </div>

                <slot />
            </div>

            <div class="card-underblock">
                <!--<nuxt-link :to="{ name: 'auth.login' }" class="need-help">
                    <img-icon class="need-help-icon" name="help" />
                    <span class="need-help-title">Need help?</span>
                </nuxt-link>-->

                <span class="underblock-additional">
                    <slot name="underblock" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import ImgIcon from '~/components/img-icon'

    export default {
        components: { ImgIcon },

        props: {
            title: {
                type: String,
                default: ''
            },

            additionalInfo: {
                type: String,
                default: ''
            }
        }
    }
</script>
