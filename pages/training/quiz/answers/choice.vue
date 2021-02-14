<template>
    <div
            class="answer-container"
            :class="{ selected: answer.selected }"
            @click="chooseAnswer(answer.id)">
        <div class="answer-number">{{ number }}.</div>
        <div class="answer-text">{{ answer.text }}</div>
        <div class="answer-indicator correct" v-if="answer.isCorrect && answered">
            <span>Correct</span>
            <img class="icon-check" src="../../../../assets/images/check.svg">
        </div>
        <div class="answer-indicator incorrect" v-if="answer.selected && !answer.isCorrect && answered">
            <span>Incorrect</span>
            <img class="icon-error" src="../../../../assets/images/error.svg">

        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        props: {
            number: {
                type: String,
                default: '',
            },
            answer: {
                type: Object,
                required: true,
            }
        },
        name: 'ChoiceAnswer',
        computed: {
            ...mapState('quiz/activeQuestion', ['selectedAnswerId', 'answered']),
        },
        methods: {
            ...mapActions('quiz/activeQuestion', ['setSelectedAnswer']),
            chooseAnswer(answerId) {
                if (this.answered || !answerId) {
                    return;
                }
                this.setSelectedAnswer(answerId);
            }
        },
    }
</script>

<style scoped>

</style>
