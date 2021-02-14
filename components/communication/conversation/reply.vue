<template>
    <div class="conversation-reply">
        <field-textarea
            placeholder="Type a message..."
            :text.sync="text"
            :attachments.sync="attachments"
            @attach="attach"
        />
        <div class="buttons">
            <div class="button-attachment">
                <input-file
                    class="input-attachment"
                    accept=".jpg, .jpeg, .png"
                    image="attachment-picture.png"
                    @input="attach"
                />
                <input-file
                    class="input-attachment"
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    image="attachment-clip.png"
                    @input="attach($event)"
                />
            </div>
            <button class="btn btn-primary" @click="send">Send</button>
        </div>
    </div>
</template>

<script>
import FieldTextarea from "@/components/form/field-textarea";
import InputFile from "@/components/form/input-file";

export default {
    components: {
        FieldTextarea,
        InputFile
    },
    data() {
        return {
            text: "",
            attachments: []
        };
    },
    methods: {
        async attach(file) {
            const preview = await this.previewFile(file);
            const type = preview.includes("application") ? "document" : "image";
            this.attachments.push({
                type,
                file,
                preview
            });
        },
        previewFile(file) {
            return new Promise(resolve => {
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    resolve(fileReader.result);
                };
                fileReader.readAsDataURL(file);
            });
        },
        send() {
            this.$emit("send", {
                text: this.text,
                attachments: this.attachments
            });
            this.text = "";
            this.attachments = [];
        },
    }
};
</script>

<style lang="scss" scoped></style>
