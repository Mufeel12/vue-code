<template>
    <div class="form-select" :class="{ 'error-status': errorMessage[0].length }">
        <label v-if="label">{{ label }}</label>

        <div class="input-group" :class="{ 'has-value': value }">
            <v-select
                :options="options"
                :placeholder="placeholder"
                :searchable="searchable"
                v-model="selectValue"
                :value="value"
                :clearable="false" @input="input"></v-select>
        </div>

        <template v-if="errorMessage[0].length">
            <span class="error-message">{{ errorMessage[0] }}</span>
        </template>
    </div>
</template>

<script>
    import ImgIcon from '~/components/img-icon'
    import vSelect from 'vue-select'

    export default {
        components: { ImgIcon, vSelect },

        props: {
            value: {
                default: ''
            },

            label: {
                type: String,
                default: ''
            },

            searchable: {
                type: Boolean,
                default: false
            },

            options: {
                type: Array
            },

            placeholder: {
                type: String,
                default: ''
            },

            errorMessage: {
                type: Array,
                default() {
                    return ['']
                }
            }
        },

        data() {
            return {
                selectValue: this.value
            }
        },

        methods: {
            input(value) {
                this.$emit('update:value', value)
                this.$emit('update:error-message', [''])
                this.$emit('input', value)
            }
        }
    }
</script>
