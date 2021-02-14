import QuestionModule from '~/store/quiz/activeQuestion';
import QuizInputTransformer from '~/transformers/input/quiz';
import QuizNextStepInputTransformer from '~/transformers/input/quiz/next-step';
import QuizCompletionInputTransformer from '~/transformers/input/quiz/completion';

export default {
    namespaced: true,
    modules: {
        activeQuestion: QuestionModule,
    },
    state: {
        id: '',
        userTestId: '',
        name: '',
        nextQuestion: null,
        previousQuestion: null,
        questionsCount: 0,
        requestPending: false,
    },
    mutations: {
        resetData: (state) => {
            state.id = '';
            state.userTestId = '';
            state.name = '';
            state.questionsCount = 0;
            state.nextQuestion = null;
            state.previousQuestion = null;
        },
        setId: (state, id) => {
            state.id = id;
        },
        setUserTestId: (state, userTestId) => {
            state.userTestId = userTestId;
        },
        setName: (state, name) => {
            state.name = name;
        },
        setQuestionsCount: (state, questionsCount) => {
            state.questionsCount = questionsCount;
        },
        setNextQuestion: (state, nextQuestion) => {
            state.nextQuestion = nextQuestion;
        },
        setPreviousQuestion: (state, previousQuestion) => {
            state.previousQuestion = previousQuestion;
        },
        setRequestPending: (state, requestPending) => {
            state.requestPending = Boolean(requestPending);
        },
    },
    actions: {
        resetData: ({ commit }) => {
            commit('resetData');
        },
        setRequestPending: ({ commit }, requestPending) => {
            commit('setRequestPending', requestPending);
        },
        getQuiz: async ({ commit }, { testId, $axios }) => {
            try {
                const token = localStorage.getItem('token');
                commit('setRequestPending', true);
                const { data } = await $axios.get(`tests/${testId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'X-localization': 'en',
                    }
                });
                const { id, name, questionsCount, question = {} } = QuizInputTransformer.transform(data);
                commit('setId', id);
                commit('setName', name);
                commit('setQuestionsCount', questionsCount);
                commit('quiz/activeQuestion/setData', question, { root: true });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                commit('setRequestPending', false);
            }
        },
        startQuiz: async ({ commit, state }, { $axios }) => {
            try {
                const token = localStorage.getItem('token');
                commit('setRequestPending', true);
                const { data } = await $axios.post(`tests/${state.id}`, null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'X-localization': 'en',
                    }
                });
                //commit('setId', testId);
                const {
                    testId,
                    name,
                    questionsCount,
                    nextQuestion = {},
                    previousQuestion = null,
                } = QuizNextStepInputTransformer.transform(data);
                commit('setUserTestId', testId);
                commit('setName', name);
                commit('setQuestionsCount', questionsCount);
                commit('setPreviousQuestion', previousQuestion);
                commit('quiz/activeQuestion/setData', nextQuestion, { root: true });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                commit('setRequestPending', false);
            }
        },
        checkQuestion: async ({ commit, state, getters }, { $axios }) => {
            try {
                const { id: questionId } = getters['activeQuestion/getData'];
                const selectedAnswerId = getters['activeQuestion/getSelectedAnswerId'];
                if (!selectedAnswerId || !questionId) {
                    return;
                }
                const token = localStorage.getItem('token');
                commit('setRequestPending', true);
                const { data } = await $axios.post(`tests/${state.userTestId}/${questionId}/${selectedAnswerId}`, {
                    text_answer: getters['activeQuestion/getUserInput'] || 0,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'X-localization': 'en',
                    }
                });
                const { nextQuestion = null, currentQuestion = null, previousQuestion = null } = QuizNextStepInputTransformer.transform(data);
                if (!nextQuestion) {
                    console.log(123);
                    const summaries = QuizCompletionInputTransformer.transform(data);
                    commit('resetData');
                    commit('quiz/activeQuestion/resetData', null, { root: true });

                    return summaries;
                }
                const question = currentQuestion || previousQuestion || {};
                commit('quiz/activeQuestion/setData', {
                    ...question,
                    answered: true,
                }, { root: true });
                // TODO: check if it is the end...
            }
            catch (error) {
                console.error(error);
            }
            finally {
                commit('setRequestPending', false);
            }
        },
        nextQuestion: async ({ commit, state, getters }, { $axios }) => {
            try {
                const { id: questionId } = getters['activeQuestion/getData'];
                const selectedAnswerId = getters['activeQuestion/getSelectedAnswerId'];
                if (!selectedAnswerId || !questionId) {
                    return;
                }
                const token = localStorage.getItem('token');
                commit('setRequestPending', true);
                const { data } = await $axios.post(`tests/${state.userTestId}/${questionId}/${selectedAnswerId}`, {
                    text_answer: getters['activeQuestion/getUserInput'] || 0,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'X-localization': 'en',
                    }
                });
                const { nextQuestion = null, currentQuestion = null, previousQuestion = null } = QuizNextStepInputTransformer.transform(data);
                if (!nextQuestion) {
                    console.log(data);
                    const summaries = QuizCompletionInputTransformer.transform(data);
                    commit('resetData');
                    commit('quiz/activeQuestion/resetData', null, { root: true });

                    return summaries;
                }
                const question = currentQuestion || previousQuestion || {};
                commit('setPreviousQuestion', question);
                commit('quiz/activeQuestion/setData', nextQuestion || {}, { root: true });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                commit('setRequestPending', false);
            }
            /*if (!state.nextQuestion) {
                return;
            }
            commit('setPreviousQuestion', getters['activeQuestion/getData']);
            commit('quiz/activeQuestion/setData', state.nextQuestion, { root: true });
            commit('setNextQuestion', null);*/
        },
        previousQuestion: async ({ commit, state }, { $axios }) => {
            try {
                if (!state.previousQuestion) {
                    return;
                }
                const selectedAnswer = state.previousQuestion.answers.find(item => item.selected === true);
                if (!selectedAnswer) {
                    return;
                }
                const token = localStorage.getItem('token');
                commit('setRequestPending', true);
                const { data } = await $axios.post(
                    `tests/${state.userTestId}/${state.previousQuestion.id}/${selectedAnswer.id}`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'X-localization': 'en',
                        }
                    }
                );
                const {
                    nextQuestion = {},
                    previousQuestion = {},
                    currentQuestion = {},
                } = QuizNextStepInputTransformer.transform(data);
                commit('quiz/activeQuestion/setData', {
                    ...currentQuestion,
                    answered: true,
                }, { root: true });
                commit('setNextQuestion', nextQuestion);
                commit('setPreviousQuestion', {
                    ...previousQuestion,
                    answered: true,
                });
            }
            catch (error) {
                console.error(error);
            }
            finally {
                commit('setRequestPending', false);
            }
        },
    },
}
