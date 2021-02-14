export default {
    namespaced: true,
    state: {
        id: '',
        question: '',
        completionTime: null,
        answerType: '',
        number: 0,
        answers: [],
        answered: false,
    },
    getters: {
        getData: state => {
            return {
                id: state.id,
                question: state.question,
                completionTime: state.completionTime,
                answerType: state.answerType,
                number: state.number,
                answers: state.answers,
                answered: state.answered,
            };
        },
        getSelectedAnswerId: ({ answers }) => {
            const answer = answers.find(item => item.selected === true);
            if (!answer) {
                return null;
            }

            return answer.id;
        },
        getUserInput: ({ answers }) => {
            const answer = answers.find(item => item.selected === true);
            if (!answer) {
                return null;
            }

            return answer.userInput === undefined
                ? null
                : String(answer.userInput);
        },
    },
    mutations: {
        setData: (state, data) => {
            state.id = data.id || '';
            state.question = data.question || '';
            state.completionTime = data.completionTime || null;
            state.answerType = data.answerType || '';
            state.number = data.number || 0;
            state.answers = data.answers || [];
            state.answered = data.answered || false;
        },
        resetData: state => {
            state.id = '';
            state.question = '';
            state.completionTime = null;
            state.answerType = '';
            state.number = 0;
            state.answers = [];
            state.answered = false;
        },
        setSelectedAnswer: ({ answers }, answerId) => {
            const answer = answers.find(item => item.id === answerId);
            if (!answer) {
                return;
            }
            answers.forEach(item => (item.selected = false));
            answer.selected = true;
        },
        setAnswered: (state, answered) => {
            state.answered = Boolean(answered);
        },
        setUserInput: ({ answers }, value) => {
            const answer = answers.find(item => item.selected === true);
            if (!answer) {
                return;
            }
            answer.userInput = value;
        },
    },
    actions: {
        setData: ({ commit }, data) => {
            commit('setData', data);
        },
        resetData: ({ commit }) => {
            commit('resetData');
        },
        setSelectedAnswer: ({ commit }, answerId) => {
            commit('setSelectedAnswer', answerId);
        },
        setAnswered: ({ commit }, answered) => {
            commit('setAnswered', answered);
        },
        setUserInput: ({ commit }, value) => {
            commit('setUserInput', value);
        },
    },
}
