<template>
    <div
        class="conversation-preview"
        :class="{
            unread: conversation.is_new,
            'current-conversation': $route.params.id === conversation.id
        }"
    >
        <div class="top">
            <div class="theme-image">
                <span class="text"> SB </span>
            </div>
            <div class="theme">
                <h5 class="title">{{ conversation.subject }}</h5>
                <p class="subtitle">{{ conversation.category }}</p>
            </div>
            <div class="indicators">
                <div class="time">
                    <div class="unread-dot" v-show="conversation.unread"></div>
                    <span>{{ getDate(conversation.created) }}</span>
                </div>
            </div>
        </div>
        <template v-if="conversation.message">
            <div class="preview-message">{{ conversation.message }}</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        conversation: {
            type: Object,
            default() {
                return null;
            }
        },
    },
    methods: {
        isToday(date) {
            const today = new Date();
            return today.getDate() === date.getDate() &&
                    today.getMonth() === date.getMonth() &&
                    today.getFullYear() === date.getFullYear();
        },
        getMonthAndDayFormat(date){
            const month = date.toLocaleString('en', { month: 'short' }).toUpperCase();
            return `${month} ${date.getDate() + 1}`;
        },
        getTimeFormat(date){
            const hours = `00${date.getHours()}`.slice(-2);
            const minutes = `00${date.getMinutes()}`.slice(-2);
            return `${hours}:${minutes}`;
        },
        getDate(created) {
            const createdDate = new Date(created);
            return this.isToday(createdDate)? this.getTimeFormat(createdDate) : this.getMonthAndDayFormat(createdDate);
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
