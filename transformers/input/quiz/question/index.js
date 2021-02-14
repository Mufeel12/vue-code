const transformArray = (source, transformFunction) => {
    const result = [];
    if (typeof transformFunction !== 'function') {
        return [];
    }
    if (!Array.isArray(source)) {
        return [];
    }
    for (const item of source) {
        result.push( transformFunction(item) );
    }

    return result;
};

const transformAnswers = answers => {
    return transformArray(answers, transformAnswer);
};

const transformAnswer = answer => {
    return {
        id: answer.id || '',
        text: answer.answer || '',
        imageURL: answer.image_url || '',
        isCorrect: Boolean(answer.is_correct),
        selected: Boolean(answer.user_chosen_answer),
        userInput: String(answer.user_chosen_text_answer),
    };
};

const isAnswered = answers => {
    if (!Array.isArray(answers)) {
        return false;
    }
    for (const answer of answers) {
        if (Boolean(answer.user_chosen_answer)) {
            return true;
        }
    }

    return false;
};

const getDefaults = () => {
    return {
        id: '',
        question: '',
        completionTime: null,
        answerType: 'text',
        answers: [],
    };
};

export default {
    transform (data) {
        if (!data) {
            return null;
        }

        return {
            id: data.id || '',
            question: data.question || '',
            completionTime: Number(data.completion_time) || null,
            answerType: data.answers_type || 'choice',
            answers: transformAnswers(data.answers),
            number: data.question_no || 0,
            answered: isAnswered(data.answers),
        };
    }
}
