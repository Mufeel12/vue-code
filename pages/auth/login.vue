<template>
    <card title="Welcome to LG master!">
        <p class="lead">
            Glad to see you! please enter your login details to proceed.
        </p>

        <form @submit.prevent="submit">
            <field-input
                :value.sync="form.email"
                :error-message.sync="errorMessages.email"
                type="email"
                name="e-mail"
                label="E-mail"
            />

            <field-input
                :value.sync="form.password"
                :type="isVisible ? 'text' : 'password'"
                :error-message.sync="errorMessages.password"
                name="password"
                label="Password"
            >
                <template v-slot:append-icon>
                    <img-icon
                        :name="isVisible ? 'see-password' : 'see-password-off'"
                        class="medium"
                        @click="toggleShowPassword"
                    />
                </template>
            </field-input>

            <form-button class="btn-primary" :is-loading="isLoading"
                >Proceed</form-button
            >
        </form>

        <nuxt-link
            :to="{ name: 'registration.step-one' }"
            class="additional-text"
            >I don’t have an LG Master account</nuxt-link
        >
    </card>
</template>

<script>
    import Card from '~/components/auth/card'
    import ImgIcon from '~/components/img-icon'

    export default {
        components: {
            Card,
            ImgIcon
        },

        layout: 'auth',

        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                errorMessages: [],
                isVisible: false,
                isLoading: false
            }
        },

        methods: {
            toggleShowPassword() {
                this.isVisible = !this.isVisible
            },

            async submit() {
                this.isLoading = true

                try {
                    let response = await this.$axios.post('login', this.form)

                    if (response.data.hasOwnProperty('token')) {
                        let now = new Date()
                        now.setMinutes(now.getMinutes() + (response.data.expires - 20))

                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('timestamp', now.getTime())
                        localStorage.setItem('expires', new Date(new Date().getTime() + response.data.expires * 60 * 1000))

                        this.$axios.setToken(response.data.token, 'Bearer')

                        await this.$store.dispatch('user/getUser')

                        this.$router.replace({ name: 'training' })
                        return
                    }

                    if (response.data.hasOwnProperty('verificationCode')) {

                        return
                    }
                } catch (error) {
                    if (error.response.status === 403) {
                        this.$router.push('verify')
                    }

                    if (error.response.status === 422) {
                        console.log(error.response.status, error.response);
                        if (error.response) {
                            this.errorMessages = error.response.data.errors
                        }
                    }
                }

                this.isLoading = false
            }
        }
    }
</script>
