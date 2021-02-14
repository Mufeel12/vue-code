<template>
    <div class="question-container">
        <div class="question-title">{{ question }}</div>
        <div class="answers-container" :class="{ 'image-grid': typeOfAnswer === 'pictureAnswer' }">
            <component
                    v-if="answers.length"
                    v-for="(answer, index) in answers"
                    :is="typeOfAnswer"
                    :key="answer.id"
                    :answer="answer"
                    :number="String.fromCharCode(64 + index + 1)">
            </component>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import ChoiceAnswer from '~/pages/training/quiz/answers/choice';
    import TextAnswer from '~/pages/training/quiz/answers/text';
    import PictureAnswer from '~/pages/training/quiz/answers/picture';

    export default {
        name: 'question',
        components: {
            choiceAnswer: ChoiceAnswer,
            textAnswer: TextAnswer,
            pictureAnswer: PictureAnswer,
        },
        computed: {
            ...mapState('quiz/activeQuestion', [
                'question',
                'completionTime',
                'answers',
                'answerType',
            ]),
            typeOfAnswer() {
                switch (this.answerType) {
                    case 'choice':
                        return 'choiceAnswer';
                    case 'text':
                        return 'textAnswer';
                    case 'image':
                        return 'pictureAnswer';
                    default:
                        return 'choiceAnswer';
                }
            }
        },
        methods: {
            ...mapActions('quiz/activeQuestion', ['setSelectedAnswerId']),
        },
    }
</script>

<style scoped lang="scss">
    .image-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row !important;
    }
</style>
