<template>
    <div class="form-check">
        <div class="input-group">
            <div class="checkbox-cover" :class="{ 'has-value': value }">
                <input
                    :id="`checkbox-${name}`"
                    type="checkbox"
                    class="form-check-input"
                    :value="value"
                    @change="input"
                >
                <div class="checkbox"></div>
            </div>

            <label class="form-check-label" :for="`checkbox-${name}`" v-html="label"></label>
        </div>

        <template v-if="errorMessage[0].length">
            <span class="error-message">{{ errorMessage[0] }}</span>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default: false
            },

            label: {
                type: String,
                default: ''
            },

            name: {
                type: String,
                default: ''
            },

            type: {
                type: String,
                default: 'text'
            },

            errorMessage: {
                type: Array,
                default() {
                    return ['']
                }
            }
        },

        methods: {
            input(event) {
                this.$emit('update:value', event.target.checked)
                this.$emit('update:error-message', [''])
            }
        }
    }
</script>
