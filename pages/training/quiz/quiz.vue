<template>
    <div class="quiz-container">
        <div class="wrapper">
            <a href="javascript:void(0)" class="action-link" @click="back">Back</a>
        </div>
        <div class="wrapper" v-if="name">
            <div class="left-size">
                <h1 class="quiz-title">{{ name }}</h1>
                <question></question>
                <div class="quiz-controls-container">
                    <div
                        v-if="!answered"
                        class="btn btn-primary next-question-button"
                        @click="check"
                        :disabled="requestPending"
                    >Submit
                    </div>
                    <div
                        v-else
                        class="btn btn-primary next-question-button"
                        @click="proceed"
                        :disabled="requestPending"
                    >Next
                    </div>
                </div>
            </div>
            <div class="right-side">
                <hr>
                <p>Question</p>
                <div class="questions-counter">{{ number }}/{{ questionsCount }}</div>
            </div>
        </div>
        <congrats-modal
            :display="showCongratsModal"
            :quiz-name="quizName"
            @closed="showCongratsModal = false"
        ></congrats-modal>
        <try-again-modal
            :display="showTryAgainModal"
            :quiz-name="quizName"
            @closed="showTryAgainModal = false"
        ></try-again-modal>
    </div>
</template>

<script>
    import {mapActions, mapState, mapGetters} from 'vuex';
    import Question from '~/pages/training/quiz/question';
    import CongratsModal from '~/pages/training/quiz/modals/congratulations';
    import TryAgainModal from '~/pages/training/quiz/modals/try-again';
    import {createRouter} from "../../../router";

    export default {
        name: 'quiz',
        components: {Question, CongratsModal, TryAgainModal},
        data() {
            return {
                quizName: '',
                showCongratsModal: false,
                showTryAgainModal: false,
                articleSlug: ''
            }
        },
        mounted() {
            const testId = localStorage.getItem('test_id');
            this.articleSlug = localStorage.getItem('article_slug');

            if (!this.name && testId) {
                this.$store.commit('quiz/setId', testId);
                this.startQuiz({testId: testId, $axios: this.$axios}).then(() => {
                    this.$router.push({path: '/training/quiz'});
                });
                return;
            }
            this.$router.push({to: '/article/' + this.articleSlug});
        },
        computed: {
            ...mapState('quiz', ['name', 'questionsCount', 'requestPending']),
            ...mapState('quiz/activeQuestion', ['number', 'answered']),
            ...mapState('quiz/activeQuestion', ['selectedAnswerId']),
        },
        methods: {
            ...mapActions('quiz', [
                'checkQuestion',
                'nextQuestion',
                'previousQuestion',
                'startQuiz',
            ]),
            back() {
                const redirect = this.previousQuestion({$axios: this.$axios});
                if (redirect) {
                    this.$router.push({path: '/article/' + this.articleSlug});
                }
            },
            proceed() {
                this.nextQuestion({$axios: this.$axios})
                    .then(data => {
                        if (!data) {
                            return;
                        }
                        this.quizName = data.quizName;
                        if (data.testPassed) {
                            this.showCongratsModal = true;
                        } else {
                            this.showTryAgainModal = true;
                        }
                    })
                    .catch(error => console.error(error));
            },
            check() {
                this
                    .checkQuestion({$axios: this.$axios})
                    .then(data => {
                        if (!data) {
                            return;
                        }
                        this.quizName = data.quizName;
                        if (data.testPassed) {
                            this.showCongratsModal = true;
                        } else {
                            this.showTryAgainModal = true;
                        }
                    })
                    .catch(error => console.error(error));
            },
        },
    }
</script>
