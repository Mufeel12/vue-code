<template>
    <div class="conversation-subject">
        <h4 class="title">
            Please specify conversation subject:
        </h4>
        <form @submit.prevent="submit" class="form">
            <field-input
                :value.sync="subject"
                type="text"
                placeholder="Subject"
                name="subject"
            />
            <div class="submit">
                <form-button class="btn-primary">
                    Proceed
                </form-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subject: '',
        }
    },
    methods: {
        async submit() {
            try {
                const response = await this.$axios.post('communications', {
                    subject: this.subject,
                    category: this.$route.params.slug,
                })

                this.$router.push({ name: 'communication.conversation', params: { id: response.data.communication_id }})
            } catch (error) {
                if (error.response) {
                    this.errorMessages = error.response.data.errors
                }
             }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
