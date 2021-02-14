<template>
    <card :title="$trans('app.reg__title', 'Sign up')" :additional-info="$trans('app.reg__step_2', 'Step 3 of 3')">
        <p class="lead">{{ $trans('app.reg__subtitle_2', 'Please fill out the personal details to proceed.') }}</p>

        <form @submit.prevent="submit">
            <group-checkboxes
                :title="$trans('app.reg__division_label', 'Division')"
                :value.sync="form.division_id"
                :options="formatOption(divisions, 'name')"
            />

            <hr class="hr">

            <group-radio
                :title="$trans('app.reg__field_experience_label', 'Experience in the field')"
                :value.sync="form.experience_id"
                :options="formatOption(experience, 'level')"
            />

            <form-button type="submit" class="btn-primary" :is-loading="isLoading">{{ $trans('app.reg__btn_finish', 'Finish') }}</form-button>
        </form>
    </card>
</template>

<script>
    import Card from '~/components/auth/card';
    import GroupCheckboxes from '~/components/form/group-checkboxes'
    import GroupRadio from '~/components/form/group-radio'
    import { mapState } from 'vuex'

    export default {
        async asyncData({ $axios, redirect }) {
            try {
                let response = await $axios.get('register/division-info')

                return response.data
            } catch (e) {
                redirect({ name: 'index' })
            }
        },

        middleware: ['authenticated'],

        computed: {
            ...mapState({
                user: state => state.user.user
            })
        },

        components: {
            Card,
            GroupCheckboxes,
            GroupRadio,
        },

        data() {
            return {
                isLoading: false,
                form: {
                    division_id: [],
                    experience_id: null
                }
            }
        },

        methods: {
            formatOption(data, key) {
                return data.map(item => ({ value: item.id, name: item[key] }))
            },

            async submit() {
                this.isLoading = true

                try {
                    await this.$axios.post(`register/division-info/${this.user.user_id}`, this.form)

                    this.$store.dispatch('user/changeUser', { key: 'divisions', value: this.form.division_id })
                    this.$store.dispatch('user/changeUser', { key: 'invite_step', value: 4 })
                    this.$router.replace({ name: 'lets-start' })
                } catch (error) {
                    console.log(error)
                }

                this.isLoading = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hr {
        border-color: $white-2;
        margin: 32px 0 33px 0;
    }

    .auth-content-box {
        .btn-submit {
            margin-top: 30px;
        }
    }
</style>
