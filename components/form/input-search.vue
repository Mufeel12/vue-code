<template>
    <div class="form-input-search">
        <input
            class="form-control"
            :value="value"
            :placeholder="placeholder"
            @input="input"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },

        placeholder: {
            type: String,
            default: ''
        },
    },

    methods: {
        input(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>
