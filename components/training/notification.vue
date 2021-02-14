<template>
    <div class="notification">
        <h5 class="title">{{ notification.title }}</h5>
        <p class="subtitle">{{ notification.created }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            notification: {
                type: Object,
                default() {
                    return null;
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>
