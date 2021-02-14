<template>
    <card :title="$trans('app.reg__title', 'Sign up')" :additional-info="$trans('app.reg__step_2', 'Step 2 of 3')">
        <p class="lead">{{ $trans('app.reg__subtitle_2', 'Please fill out the personal details to proceed.') }}</p>

        <form @submit.prevent="submit">
            <field-select
                :searchable="true"
                v-model="form.country_id"
                :options="formatSelectOptions(user_data.countries, 'name')"
                :error-message.sync="errorMessages.country_id"
                name="country"
                @change="getWorkplace"
                :label="$trans('app.reg__country_label', 'Country')"
                :placeholder="$trans('app.reg__country_placeholder', 'Select country')"
            />

            <field-select
                :searchable="true"
                :value.sync="form.workplace_id"
                :options="workplaces"
                :error-message.sync="errorMessages.workplace_id"
                name="workspace"
                :label="$trans('app.reg__workspace_label', 'Workspace')"
                :placeholder="$trans('app.reg__workspace_placeholder', 'Select workspace')"
                class="mt-20"
            />

            <field-select
                :value.sync="form.position_id"
                :options="formatSelectOptions(user_data.positions, 'title')"
                :error-message.sync="errorMessages.position_id"
                name="position"
                :label="$trans('app.reg__position_label', 'Position')"
                :placeholder="$trans('app.reg__position_placeholder', 'Select position')"
                class="mt-20"
            />

            <field-select
                :value.sync="form.store_experience_id"
                :options="formatSelectOptions(user_data.experience, 'level')"
                :error-message.sync="errorMessages.store_experience_id"
                name="experience"
                :label="$trans('app.reg__experience_label', 'Experience in current store')"
                :placeholder="$trans('app.reg__experience_placeholder', 'Select your experience')"
                class="mt-20"
            />

            <field-checkbox
                :value.sync="form.agree_to_terms_and_conditions"
                :error-message.sync="errorMessages.agree_to_terms_and_conditions"
                name="agreeToTerms"
                class="mt-20"
                :label="$trans('app.reg__terms_and_conditions', 'I accept the :terms and other :legal notice', {
                    terms: $trans('app.reg__terms_link', `<a href='url' target='_blank'>terms and conditions</a>`),
                    legal: $trans('app.reg__legal_link', `<a href='url' target='_blank'>legal</a>`)
                })"
            />

            <field-checkbox
                :value.sync="form.receive_emails"
                name="receiveEmails"
                class="mt-20"
                :label="$trans('app.reg__receive_emails', 'I agree to recieve informational e-mails and notifications from LG master')"
            />

            <form-button type="submit" class="btn-primary" :is-loading="isLoading">{{ $trans('app.reg__btn_next', 'Next') }}</form-button>
        </form>
    </card>
</template>

<script>
    import Card from '~/components/auth/card'
    import { mapState } from 'vuex'

    export default {
        components: { Card },

        middleware: ['authenticated'],

        computed: {
            ...mapState({
                user: state => state.user.user
            })
        },

        async asyncData({ $axios, params, redirect, store }) {
            let user_id = params.userId || store.state.user.user.user_id

            try {
                let response = await $axios.get(`register/step/work-info/${user_id}`)

                return {
                    user_data: response.data
                }
            } catch (e) {
                redirect({ name: 'index' })
            }
        },

        data() {
            return {
                isLoading: false,
                errorMessages: [],
                workplaces: [],
                workplaceLoading: false,
                form: {
                    country_id: '',
                    workplace_id: '',
                    position_id: '',
                    store_experience_id: '',
                    agree_to_terms_and_conditions: false,
                    receive_emails: false
                }
            }
        },

        created() {
            this.setCountry()
        },

        watch: {
            'form.country_id'() {
                this.getWorkplace()
            }
        },

        methods: {
            setCountry() {
                let domain = this.getDomain(window.location.hostname) || 'lv'
                let country = this.user_data.countries.find(item => item.iso_code === domain)

                this.form.country_id = {
                    id: country.id,
                    label: country.name
                }
            },

            formatSelectOptions(data, key) {
                return data.map(item => ({ id: item.id, label: item[key] }))
            },

            async getWorkplace() {
                try {
                    let { data } = await this.$axios.get(`register/workplaces/${this.form.country_id.id}`)

                    this.workplaces = this.formatSelectOptions(data.data, 'name')
                } catch (error) {
                    console.log(error)
                }
            },

            async submit() {
                this.isLoading = true

                try {
                    let data = Object.assign({}, this.form)
                    let selects = ['country_id', 'workplace_id', 'position_id', 'store_experience_id']

                    for (let key in data) {
                        if (selects.includes(key)) {
                            data[key] = data[key].id
                        }
                    }

                    await this.$axios.post(`register/step/work-info/${this.user.user_id}`, data)

                    this.$store.dispatch('user/changeUser', { key: 'invite_step', value: 3 })

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
