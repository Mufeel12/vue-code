export const state = () => ({
    languages: [],
    redirects: {
        1: 'about',
        2: 'registration.step-two',
        3: 'registration.division-info',
        4: 'take-quiz',
        5: 'coming-soon'
    },
    area_codes: {
        lv: 371,
        lt: 370,
        ee: 372,
        ru: 7
    },
    isMobileMenuActive: false,
    isTrainingSubmenuOpen: false,
    isNotificationBarOpen: false,
})

export const mutations = {
    updateLanguages(state, data) {
        state.languages = data
    },
    updateMobileMenuStatus(state) {
        state.isMobileMenuActive = !state.isMobileMenuActive
    },
    updateTrainingSubmenuOpen(state, data) {
        state.isTrainingSubmenuOpen = data;
    },
    setNotificationBarOpen(state, data) {
        state.isNotificationBarOpen = data;
    },
}

export const actions = {
    toggleMobileMenuStatus({ commit, state }) {
        commit('updateMobileMenuStatus', !state.isMobileMenuActive)
    },
    updateTrainingSubmenuOpen({ commit, state }, data) {
        commit('updateTrainingSubmenuOpen', data);
    },
    toggleNotificationBarOpen({ commit, state }) {
        commit('setNotificationBarOpen', !state.isNotificationBarOpen);
    },
    closeNotificationBarOpen({ commit, state }) {
        commit('setNotificationBarOpen', false);
    },
}
