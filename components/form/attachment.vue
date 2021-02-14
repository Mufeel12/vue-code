<template>
    <div class="attachment">
        <template v-if="isRemovable">
            <div class="attachment-link">
                <img
                    class="attachment-image"
                    :src="
                        attachment.type !== 'document' &&
                        !attachment.type.includes('application')
                            ? src
                            : require('~/assets/images/communication/file-alt.svg')
                    "
                />
            </div>
            <div class="remover" @click="remove">
                <div class="remover-times">
                    <div class="times">&times;</div>
                </div>
            </div>
        </template>
        <template v-else>
            <a class="attachment-link" :href="src" download target="_blank">
                <img
                    class="attachment-image"
                    :src="
                        attachment.type !== 'document' &&
                        !attachment.type.includes('application')
                            ? src
                            : require('~/assets/images/communication/file-alt.svg')
                    "
                />
            </a>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        attachment: {
            type: Object,
            default() {
                return null;
            }
        },
        isRemovable: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            src: ""
        };
    },
    created() {
        this.src =
            this.attachment.url !== undefined ? this.attachment.url : this.attachment.preview;
    },
    methods: {
        remove(){
            this.$emit('remove');
        }
    },
};
</script>

<style lang="scss" scoped></style>
