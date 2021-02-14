<template>
    <button class="btn" :class="{ 'btn-submit': type === 'submit','is-loading': isLoading }" :type="type" @click="click">
        <template v-if="isLoading">
            <img-icon name="loader"/>
        </template>

        <template v-else>
            <slot/>
        </template>
    </button>
</template>

<script>
    import ImgIcon from '~/components/img-icon.vue'

    export default {
        components: { ImgIcon },

        props: {
            type: {
                type: String,
                default: 'submit'
            },

            isLoading: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            click() {
                this.$emit('click')
            }
        }
    }
</script>
