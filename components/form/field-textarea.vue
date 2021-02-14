<template>
    <div
        class="form-group textarea"
        :class="{ 'textarea-with-attachments': attachments.length > 0 }"
    >
        <template v-if="labelTop">
            <label :for="`textarea-${name}`">Example textarea</label>
        </template>

        <div class="form-control">
            <template v-if="attachments.length > 0">
                <div class="attachments">
                    <template v-for="(attachment, index) in attachments">
                        <attachment
                            :attachment.sync="attachment"
                            :key="getKey(index)"
                            is-removable
                            @remove="remove(index)"
                        />
                    </template>
                    <input-file
                        class="attachment"
                        accept=".jpg, .jpeg, .png"
                        image="plus-bg-grey.png"
                        @input="$emit('attach', $event)"
                    />
                </div>
            </template>
            <textarea
                class="input-block hide-scroll "
                :placeholder="placeholder"
                :value="text"
                @input="input"
            />
        </div>
    </div>
</template>

<script>
import InputFile from '@/components/form/input-file';
import Attachment from '@/components/form/attachment';

export default {
    components: {
        InputFile,
        Attachment,
    },
    props: {
        text: {
            type: String,
            default: ''
        },
        labelTop: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        attachments: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    methods: {
        input(event) {
            this.$emit('update:text', event.target.value)
        },
        remove(attachment) {
            this.attachments.splice(attachment, 1);
        },
        getKey() {
            return `attachment-${Math.random()*10}`
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
