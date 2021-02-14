<template>
    <div class="conversations-list hide-scroll">
        <template v-for="conversation in conversations">
            <router-link
                :to="{
                    name: 'communication.conversation',
                    params: { id: conversation.id }
                }"
                :key="conversation.id"
            >
                <conversation-preview :conversation="conversation" />
            </router-link>
        </template>
    </div>
</template>

<script>
import ConversationPreview from '@/components/communication/conversation-preview';

export default {
    components: {
        ConversationPreview,
    },
    props: {
        conversations: {
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
