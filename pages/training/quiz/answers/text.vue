<template>
    <div>
        <field-input
                type="number"
                name="userInput"
                label="Your answer here"
                labelTop
                @input="handleInputEvent"
                :value="answer.userInput"
                :readonly="answered"
        >
        </field-input>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        props: {
            answer: {
                type: Object,
                required: true,
            }
        },
        name: 'TextAnswer',
        computed: {
            ...mapState('quiz/activeQuestion', ['answered']),
        },
        methods: {
            ...mapActions('quiz/activeQuestion', ['setSelectedAnswer', 'setUserInput']),
            handleInputEvent(value) {
                this.setSelectedAnswer(this.answer.id);
                this.setUserInput(value);
            }
        },
    }
</script>

<style scoped>

</style>
