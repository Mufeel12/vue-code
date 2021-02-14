<template>
    <div class="language-select-cover">
        <field-select
            class="language-select"
            @input="setLanguage"
            :value="language"
            :options="options"
        />
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import FieldSelect from '~/components/form/field-select'

    export default {
        components: { FieldSelect },

        computed: {
            ...mapState({
                languages: state => state.languages
            }),

            options() {
                let domain = this.getDomain(window.location.hostname) || 'lv'
                let options = this.languages.filter(item => item.iso_code === domain || item.iso_code === 'ru')

                return options.map(item => ({ value: item.iso_code, label: (item.iso_code).toUpperCase() }))
            },

            language() {
                let domain = this.getDomain(window.location.hostname)
                let code = sessionStorage.getItem('language') || (domain !== 'localhost' ? domain : 'lv')
                let locale = this.options.find(item => item.value === code)

                return locale ? locale : this.options[0]
            }
        },

        methods: {
            setLanguage(e) {
                sessionStorage.setItem('language', e.value)
                window.location.reload()
            }
        }
    }
</script>

<style lang="scss" scoped>
.language-select {
    min-width: 90px;
}
</style>
