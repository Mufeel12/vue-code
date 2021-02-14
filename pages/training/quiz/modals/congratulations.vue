<template>
    <overlap-modal v-if="display" @closed="$emit('closed')">
        <template slot="image">
            <img src="../../../../assets/images/quiz/congrats.png" alt="Congratulations">
        </template>
        <template slot="title">
            <p>Congratulations!</p>
        </template>
        <template slot="content">
            <p>Dear user, you have completed the "{{ quizName }}" Quiz and earned a Sales Ninja Badge</p>
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
        name: "congratulations",
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
