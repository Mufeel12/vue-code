import QuestionTransformer from '~/transformers/input/quiz/question';

export default {
    transform(data) {
        return {
            testId: data.user_test_id || '',
            name: data.name || '',
            type: data.test_type || 'quiz',
            questionsCount: data.question_count || 0,
            answerCorrect: data.answer === 'correct',
            nextQuestion: QuestionTransformer.transform(data.next_question),
            previousQuestion: QuestionTransformer.transform(data.previous_question),
            currentQuestion: QuestionTransformer.transform(data.current_question),
        };
    }
}
