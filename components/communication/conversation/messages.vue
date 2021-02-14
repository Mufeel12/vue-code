<template>
    <div class="conversation-messages" id="conversation-messages">
        <div class="cell">
            <div class="cell-content">
                <template v-if="messages.length === 0">
                    <div
                        class="alert alert-secondary alert-dismissible"
                        v-show="isAlert"
                    >
                        Start conversation by composing your message below
                        <button
                            type="button"
                            class="btn close"
                            @click="isAlert = false"
                        >
                            <img
                                class="times"
                                src="~@/assets/images/close.svg"
                            />
                        </button>
                    </div>
                </template>
                <template v-else>
                    <div class="cell-scrollable hide-scroll" ref="messages">
                        <template v-for="message in messages">
                            <message :message="message" :key="message.id" />
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Message from '@/components/communication/conversation/message';

export default {
    components: {
        Message,
    },
    props: {
        messages: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            isAlert: true,
        }
    },
    mounted () {
        this.scrollToLastMessage();
    },
    methods: {
        scrollToLastMessage() {
            if(this.$refs.messages) {
                const el = this.$refs.messages.lastElementChild;

                if (el) {
                    el.scrollIntoView();
                }
            }
        }
    },
    watch: {
        '$route.params'(newValue, oldValue) {
            this.scrollToLastMessage();
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
