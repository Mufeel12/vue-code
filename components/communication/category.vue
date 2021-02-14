<template>
    <div class="topic">
        <h5 class="title">{{ category.title }}</h5>
        <p class="subtitle">{{ category.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            default () {
                return {};
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
