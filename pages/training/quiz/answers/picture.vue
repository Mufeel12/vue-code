<template>
    <div
            v-if="answer"
            class="image-answer-container"
            :class="{ faded: faded }"
            @click="chooseAnswer(answer.id)"
    >
        <div class="image-container">
            <img :src="answer.imageURL" alt="">
        </div>
        <div class="image-caption">
            <span class="answer-number" v-if="number">{{ number }}.&nbsp</span>
            {{ answer.text }}
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex';

    export default {
        name: "PictureAnswer",
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
        computed: {
            ...mapState('quiz/activeQuestion', ['answered']),
            ...mapGetters('quiz/activeQuestion', ['getSelectedAnswerId']),
            faded() {
                return this.getSelectedAnswerId && !this.answer.selected;
            }
        },
        methods: {
            ...mapActions('quiz/activeQuestion', ['setSelectedAnswer']),
            chooseAnswer(answerId) {
                if (this.answered || !answerId) {
                    return;
                }
                this.setSelectedAnswer(answerId);
            }
        }
    }
</script>

<style scoped lang="scss">
    .image-answer-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 0 1 50%;
        opacity: 1;
        padding: 5px 38px;
        box-sizing: border-box;
        min-height: 200px;
        border: 1px solid #E2E2E2;
        border-radius: 3px;
        cursor: pointer;

        &.faded {
            opacity: 0.5;
        }

        .image-container {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                max-width: 280px;
                max-height: 185px;
            }
        }

        .image-caption {
            text-align: center;
        }

        .answer-number {
            color: $burgundy;
            font-weight: 600;
        }
    }
</style>
