import QuestionTransformer from '~/transformers/input/quiz/question';

export default {
    transform (data) {
        const question = data.next_question ?
            QuestionTransformer.transform(data.next_question)
            : null;

        return {
            id: data.id || '',
            name: data.name || '',
            type: data.test_type || 'quiz',
            questionsCount: data.question_count || 0,
            question,
        }
    }
}
