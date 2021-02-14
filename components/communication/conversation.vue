<template>
    <div class="conversation">
        <template v-if="conversation">
            <info :conversation="conversation" />
            <messages :messages="conversation.messages" />
        </template>
        <reply @send="sendReply" />
    </div>
</template>

<script>
import Info from "@/components/communication/conversation/info.vue";
import Messages from "@/components/communication/conversation/messages.vue";
import Reply from "@/components/communication/conversation/reply.vue";

export default {
    components: {
        Info,
        Messages,
        Reply
    },
    async asyncData({ $axios, params }) {
        const response = await $axios.get(`communications/${params.id}`);
        const conversation = response.data.data;
        return { conversation };
    },
    methods: {
        async fetchConversation() {
            const response = await this.$axios.get(`communications/${this.$route.params.id}`);
            this.conversation = response.data.data;
        },
        async sendReply(reply) {
            const formData = new FormData();
            formData.append("communication_id", this.$route.params.id);
            formData.append("content", reply.text);
            reply.attachments.forEach(attachment => {
                formData.append("attachments[]", attachment.file);
            });
            try {
                const response = await this.$axios.post(
                    `communication-replies/${this.$route.params.id}`,
                    formData
                );
                await this.fetchConversation();
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
