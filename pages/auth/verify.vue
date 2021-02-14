<template>
    <div class="col-md-8">
        <card :title="title">
            <p class="lead">
                We have sent you an authemtification code
                to the phone number {{ getPhoneNumber }}
                Please enter code in the input field below
            </p>

            <form @submit.prevent="submit">
                <field-input
                    :value.sync="authorizationCode"
                    type="number"
                    name="code"
                    label="Authorization code"
                    :error-message.sync="errorMessages.code"
                />

                <form-button class="btn-primary" :is-loading="isLoading">Proceed</form-button>
            </form>
        </card>
    </div>
</template>

<script>
    import Card from '~/components/auth/card'

    export default {
        async asyncData({ redirect, store }) {
           try {
               let response = await store.dispatch('user/getUser')

               return {
                   user: response,
                   title: `Hi ${response.name}! just one more step before we start`
               }
           } catch (e) {
               redirect({ name: 'auth.login' })
           }
        },

        components: { Card },

        data() {
            return {
                errorMessages: [],
                isLoading: false,
                authorizationCode: ''
            }
        },

        computed: {
            getPhoneNumber() {
                return `${this.user.phone_number.slice(0, 4)} ******* ${this.user.phone_number.slice(-3)}`;
            }
        },

        methods: {
            async submit() {
                this.isLoading = true

                try {
                    await this.$axios.post('verify', {
                        verification_code: this.authorizationCode
                    })

                    this.$router.push({ name: 'registration.division-info' })
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
