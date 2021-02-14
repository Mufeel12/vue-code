<template>
    <div class="form-group" :class="{ 'input-with-label': labelTop }">
        <div
            class="input-group"
            :class="{ 'error-status': errorMessage[0].length }"
        >
            <label :for="`input-${name}`" v-if="labelTop">{{ label }}</label>

            <div class="input-group-prepend">
                <input
                    :id="`input-${name}`"
                    class="form-control"
                    :class="[value || autofilled ? 'has-value' : '']"
                    :type="type"
                    :autocomplete="type"
                    :value="value"
                    :name="name"
                    :readonly="readonly"
                    :placeholder="placeholder"
                    @input="input"
                    @animationstart="checkAnimation"
                />

                <label :for="`input-${name}`" v-if="!labelTop">{{
                    label
                }}</label>

                <div
                    class="append-icon"
                    :class="{ 'icon-warning': errorMessage[0].length }"
                >
                    <template v-if="errorMessage[0].length">
                        <img-icon class="medium" name="error" />
                    </template>

                    <template v-else>
                        <slot name="append-icon" />
                    </template>
                </div>
            </div>
        </div>

        <template v-if="errorMessage[0].length">
            <span class="error-message">{{ errorMessage[0] }}</span>
        </template>
    </div>
</template>

<script>
import ImgIcon from '../img-icon.vue';

export default {
    components: { ImgIcon },

    props: {
        value: {
            default: ''
        },

        label: {
            type: String,
            default: ''
        },

        readonly: {
            type: Boolean,
            default: false
        },

        labelTop: {
            type: Boolean,
            default: false
        },

        name: {
            type: String,
            required: true,
            default: ''
        },

        type: {
            type: String,
            default: 'text'
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
            autofilled: false
        }
    },

    methods: {
        input(event) {
            this.$emit('update:value', event.target.value)
            this.$emit('update:error-message', [''])
            this.$emit('input', event.target.value)
        },
        checkAnimation(e) {
            if(e.animationName == "onAutoFillStart") {
                this.autofilled = true;
            }
            else if(e.animationName == "onAutoFillCancel") {
                this.autofilled = false;
            }
        }
    }
}
</script>
