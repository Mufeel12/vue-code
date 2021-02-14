<template>
    <card title="Thank you, your request has been sent">
        <p class="lead">
            You will receive an e-mail shortly
            after the verification process.
            We will come back to you as soon as possible
        </p>

        <progress-steps
            title="Verification progress:"
            :current-step="2"
            :steps-titles="['Request sent', 'Verification in progress', 'Done']"
        />

        <hr class="hr">

        <p class="lead">
            If you encountered problems with
            password recovery, don’t hesitate to contact us
        </p>

        <div class="contacts">
            <a href="mailto:info@lgmaster.com">info@lgmaster.com</a>
            <a href="tel:+37128947759">+371 28947759</a>
        </div>
    </card>
</template>

<script>
    import Card from '~/components/auth/card'
    import ProgressSteps from '~/components/auth/progress-steps'

    export default {
        components: {
            Card,
            ProgressSteps
        }
    }
</script>

<style lang="scss" scoped>
    hr {
        margin: 16px 0 22px 0;
        border-color: $silver;
    }
</style>
