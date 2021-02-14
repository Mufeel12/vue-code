<template>
    <div class="icon-wrapper" @click="click">
        <img class="icon-img" :src="require(`@/assets/images/${name}.svg`)" :alt="name">
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'refresh'
        }
    },

    methods: {
        click() {
            this.$emit('click')
        }
    }
}
</script>
