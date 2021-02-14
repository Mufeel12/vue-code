<template>
    <div class="message">
        <div class="header">
            <div class="avatar">
                <img
                    class="avatar-image"
                    src="@/assets/images/communication/temp.jpg"
                />
            </div>
            <h5 class="title">{{ message.author }}</h5>
            <span class="time">{{ message.created }}</span>
        </div>
        <div class="body">
            {{ message.content }}
        </div>
        <template v-if="message.attachment_count > 0">
            <div class="footer">
                <span> {{ message.attachment_count }} images: </span>
                <div class="images">
                    <template
                        v-for="(attachment, index) in message.attachments"
                    >
                        <attachment
                            :attachment="attachment"
                            :key="`${attachment.url} - ${index}`"
                        />
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Attachment from '@/components/form/attachment';

export default {
    components: {
        Attachment,
    },
    props: {
        message: {
            type: Object,
            default() {
                return {};
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
