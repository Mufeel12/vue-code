<template>
    <div class="communication">
        <conversations-head :search-value.sync="subject" />
        <div class="communication-content">
            <conversations-list :conversations="conversations" />
            <nuxt-child></nuxt-child>
        </div>
    </div>
</template>

<script>
import ConversationsHead from "@/components/communication/conversations-head";
import ConversationsList from "@/components/communication/conversations-list";

export default {
    layout: "communication-layout",
    components: {
        ConversationsHead,
        ConversationsList
    },
    async asyncData({ $axios }) {
        try {
            const response = await $axios.get(`communications`);
            const conversations = response.data.data;
            return {
                conversations
            }
        } catch (error) {
            console.error(error);
        }
    },
    data() {
        return {
            conversations: [],
            subject: '',
        }
    },
    methods: {
        async getConversations() {
            try {
                this.$nextTick(() => {
                    this.$root.$loading.start();
                });

                const params = {}

                if(this.subject !== '') {
                    params.subject = this.subject
                }

                const response = await this.$axios.get('communications', {
                    params
                });
                this.conversations = response.data.data;
            } catch (error) {
                 console.error(error);
            } finally {
                this.$nextTick(() => {
                    this.$nuxt.$loading.finish()
                });
            }
        },
        debouncedFetchData() {
            if(this.timeout !== undefined) {
                clearTimeout(this.timeout)
            }
            this.timeout = setTimeout(() => this.getConversations(), 500)
        },
    },
    watch: {
        subject: {
            immediate: true,
            deep: true,
            handler(newSearch) {
                this.debouncedFetchData()
            }
        },
        $route() {
            this.getConversations();
        }
    },
}
</script>

<style lang="scss" scoped></style>
