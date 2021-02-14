<template>
    <overlap-modal v-if="display" @closed="$emit('closed')">
        <template slot="image">
            <img src="../../../../assets/images/quiz/try-again.png" alt="Try again">
        </template>
        <template slot="title">
            <p>Try again...</p>
        </template>
        <template slot="content">
            <p>Dear user, you have not completed the "{{ quizName }}" Quiz. Reread the article to improve, or try again with the test</p>
        </template>
        <template slot="actions">
            <div class="btn btn-primary" @click="toArticlesList">Read another article?</div>
            <a href="javascript:void(0)" class="action-link mt-3" @click="toHomepage">Go to homepage</a>
        </template>
    </overlap-modal>
</template>

<script>
    import OverlapModal from '~/pages/training/quiz/modals/overlap-modal';

    export default {
        name: "try-again",
        components: { OverlapModal },
        props: {
            display: {
                type: Boolean,
                default: false,
            },
            quizName: {
                type: String,
                default: '',
            },
        },
        methods: {
            toHomepage() {
                this.$router.push({ path: '/' });
            },
            toArticlesList() {
                this.$router.push({ path: '/training/course' });
            }
        },
    }
</script>

<style scoped>
    .btn-primary {
        min-width: 290px;
    }
</style>
