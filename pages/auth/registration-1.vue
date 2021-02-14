<template>
    <card :title="$trans('app.reg__title', 'Sign up')" :additional-info="$trans('app.reg__step_1', 'Step 1 of 3')">
        <p class="lead">{{ $trans('app.reg__subtitle_1', 'Before we start, we need to know who you are') }}</p>

        <form @submit.prevent="submit">
            <field-input
                :value.sync="form.name"
                :label-top="true"
                :error-message.sync="errorMessages.name"
                name="full-name"
                :label="$trans('app.reg__name_label', 'Full name')"
                :placeholder="$trans('app.reg__name_placeholder', 'e.g. Janis Zarins')"
            />

            <div class="input-cover mt-20">
                <div class="input-label">{{ $trans('app.reg__dob_day_label', 'Birthday') }}</div>

                <div class="row">
                    <div class="col-md-4">
                        <field-select
                            :value.sync="form.dob_day"
                            :options="selectOptions(1, 31)"
                            :error-message.sync="errorMessages.dob_day"
                            :searchable="true"
                            name="day"
                            :placeholder="$trans('app.reg__dob_day_placeholder', 'Day')"
                        />
                    </div>

                    <div class="col-md-4 mt-20-md">
                        <field-select
                            :value.sync="form.dob_month"
                            :options="selectOptions(1, 12)"
                            :error-message.sync="errorMessages.dob_month"
                            :searchable="true"
                            name="month"
                            :placeholder="$trans('app.reg__dob_month_placeholder', 'Month')"
                        />
                    </div>

                    <div class="col-md-4 mt-20-md">
                        <field-select
                            :value.sync="form.dob_year"
                            :options="selectOptions(1972, new Date().getFullYear() - 16).reverse()"
                            :error-message.sync="errorMessages.dob_year"
                            :searchable="true"
                            name="year"
                            :placeholder="$trans('app.reg__dob_year_placeholder', 'Year')"
                        />
                    </div>
                </div>
            </div>

            <div class="input-cover mt-20">
                <field-input
                    :label-top="true"
                    :value.sync="form.email"
                    :error-message.sync="errorMessages.email"
                    name="email"
                    :label="$trans('app.reg__email_label', 'E-mail')"
                    type="email"
                />
            </div>

            <div class="input-cover mt-20">
                <div class="row">
                    <div class="col-md-4">
                        <field-input
                            :label-top="true"
                            :value.sync="form.phone_area_code"
                            :error-message.sync="errorMessages.phone_area_code"
                            name="code"
                            :label="$trans('app.reg__area_code_label', 'Code')"
                            :readonly="true"
                        />
                    </div>

                    <div class="col-md-8 mt-20-md">
                        <field-input
                            :label-top="true"
                            :value.sync="form.phone_number"
                            :error-message.sync="errorMessages.phone_number"
                            name="phone_number"
                            :label="$trans('app.reg__phone_number_label', 'Phone number')"
                        />
                    </div>
                </div>
            </div>

            <form-button type="submit" class="btn-primary" :is-loading="isLoading">{{ $trans('app.reg__btn_next', 'Next') }}</form-button>
        </form>
    </card>
</template>

<script>
    import Card from '~/components/auth/card'
    import { mapState } from 'vuex'

    export default {
        components: { Card },

        layout: 'auth',

        mounted() {
           this.form.phone_area_code = `+${this.areaCode}`
        },

        computed: {
            ...mapState({
                user: state => state.user.user,
                area_codes: state => state.area_codes
            }),

            areaCode() {
                return this.area_codes[this.getDomain(window.location.hostname)] || 371
            }
        },

        data() {
            return {
                isLoading: false,
                errorMessages: [],
                form: {
                    name: '',
                    dob_day: '',
                    dob_month: '',
                    dob_year: '',
                    email: '',
                    phone_area_code: this.areaCode,
                    phone_number: ''
                }
            }
        },

        methods: {
            async submit() {
                this.isLoading = true

                try {
                    this.form['invite_code_id'] = this.user.invite_code_id

                    let response = await this.$axios.post('register/step/personal-info', this.form)

                    let store_data = { 'user_id': response.data.user_id, 'invite_step': 2, 'name': this.form.name, 'email': this.form.email }

                    for (let key in store_data) {
                        this.$store.dispatch('user/changeUser', { key: key, value: store_data[key] })
                    }

                    this.$router.push({
                        name: 'registration.step-two',
                        params: {
                            userId: response.data.user_id,
                        }
                    })
                } catch (error) {
                    if (error.response) {
                        this.errorMessages = error.response.data.errors
                    }
                }

                this.isLoading = false
            },

            selectOptions(from, to) {
                let result = []

                for (let i = from; i <= to; i++) {
                    if (i < 10) {
                        result.push(`0${i}`)
                    } else {
                        result.push(i)
                    }
                }

                return result
            }
        }
    }
</script>
