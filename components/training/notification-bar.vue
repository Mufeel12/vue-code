<template>
    <div class="notification-bar" @click.stop="toggleNotificationBarOpen">
        <span v-show="notificationAmount > 0" class="badge badge-pill">
            {{ notificationAmount }}
        </span>
        <template v-if="isNotificationBarOpen">
            <div class="notification-dropdown">
                <notification-list :notifications="notifications" />
            </div>
        </template>
    </div>
</template>

<script>
import NotificationList from './notification-list.vue';
import { mapState } from 'vuex';

export default {
    components: {
        NotificationList,
    },
    props: {
        notificationAmount: {
            type: Number,
            default: 0
        },
    },
     computed: {
        ...mapState({
            isNotificationBarOpen: state => state.isNotificationBarOpen
        }),
    },
    data() {
        return {
            notifications: [
                { id: 1, title: 'New Course added', created: "Just now" },
                { id: 2, title: 'New Course added', created: "Yesterday, 20:00" },
                { id: 3, title: 'New Course added', created: "Yesterday, 20:00" },
                { id: 4, title: 'New Course added', created: "Yesterday, 20:00" },
                { id: 5, title: 'New Course added', created: "Yesterday, 20:00" },
            ]
        }
    },
    methods: {
        toggleNotificationBarOpen() {
            this.$store.dispatch('toggleNotificationBarOpen');
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
