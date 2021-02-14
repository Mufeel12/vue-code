<template>
    <div class="col-md-8">
        <card :title="`Hi ${name}!`">
            <p class="lead">
                Please create password to proceed
            </p>

            <form @submit.prevent="submit">
                <field-input
                    :value.sync="form.password"
                    :type="isVisible ? 'text' : 'password'"
                    name="password"
                    label="New password"
                    class="has-progress-bar"
                    :error-message.sync="errorMessages.password"
                >
                    <template v-slot:append-icon>
                        <img-icon
                            class="medium"
                            :name="
                                isVisible ? 'see-password' : 'see-password-off'
                            "
                            @click="isVisible = !isVisible"
                        />
                    </template>
                </field-input>

                <progress-bar
                    v-if="form.password.length"
                    class="align-center"
                    :value="
                        form.password.length * 10 > 100
                            ? 100
                            : form.password.length * 10
                    "
                />

                <alert-message>
                    <template v-slot:alert-icon>
                        <img-icon class="small" name="info" />
                    </template>

                    New password should be at least 5 characters long and should
                    contain at least one capital letter and one digit
                </alert-message>

                <field-input
                    :value.sync="form.password_confirmation"
                    :type="isVisibleRepeat ? 'text' : 'password'"
                    name="passwordConfirmation"
                    label="Repeat new password"
                >
                    <template v-slot:append-icon>
                        <img-icon
                            class="medium"
                            :name="
                                isVisibleRepeat
                                    ? 'see-password'
                                    : 'see-password-off'
                            "
                            @click="isVisibleRepeat = !isVisibleRepeat"
                        />
                    </template>
                </field-input>

                <form-button
                    type="submit"
                    class="btn-primary"
                    :is-loading="isLoading"
                    >Create password</form-button
                >
            </form>

            <router-link to="/login" class="additional-text">
                Back
            </router-link>
        </card>
    </div>
</template>

<script>
    import Card from '~/components/auth/card';
    import ProgressBar from '~/components/progress-bar'
    import AlertMessage from '~/components/form/alert-message'
    import ImgIcon from '~/components/img-icon'

    export default {
        async asyncData({ params, $axios, redirect }) {
            try {
                let response = await $axios.get(`register/confirmation/${params.user}/${params.token}`)

                return response.data
            } catch (e) {
                redirect({ name: 'auth.login' })
            }
        },

        components: {
            Card,
            ProgressBar,
            AlertMessage,
            ImgIcon,
        },

        data() {
            return {
                isLoading: false,
                errorMessages: [],
                isVisible: false,
                isVisibleRepeat: false,
                form: {
                    password: '',
                    password_confirmation: ''
                }
            }
        },

        methods: {
            async submit() {
                this.isLoading = true

                try {
                    let response = await this.$axios.post(`register/confirmation/${this.user_id}/${this.$route.params.token}`, this.form)

                    let now = new Date()
                    now.setMinutes(now.getMinutes() + (response.data.expires - 20))

                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('timestamp', now.getTime())
                    localStorage.setItem('expires', new Date(new Date().getTime() + response.data.expires * 60 * 1000))

                    this.$router.push({ name: 'registration.verify' })
                } catch (error) {
                    if (error.response) {
                        this.errorMessages = error.response.data.errors
                    }
                }

                this.isLoading = false
            }
        }
    }
</script>
