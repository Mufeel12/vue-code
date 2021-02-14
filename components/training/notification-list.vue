<template>
    <div class="notification-list hide-scroll">
        <template v-for="notification in notifications">
            <notification :notification="notification" :key="notification.id" />
        </template>
    </div>
</template>

<script>
import Notification from './notification.vue';

export default {
    components: {
        Notification,
    },
    props: {
        notifications: {
            type: Array,
            default() {
                return [];
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
