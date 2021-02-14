<template>
    <div class="input-file">
        <input class="inputfile" type="file" :accept="accept" @input="input" />
        <img
            for="file"
            class="picture"
            :src="require(`@/assets/images/communication/${image}`)"
        />
    </div>
</template>

<script>
export default {
    props: {
        accept: {
            type: String,
            default: '',
        },
        image:{
            type: String,
            default: '',
        }
    },
    methods: {
        input(event) {
            this.$emit('input', event.target.files[0])
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
