
const state = {
    isAuth: false,
};

const actions = {
    login: async ({ commit }, data) => {
        localStorage.setItem('auth', true);
        commit('LOGIN');
    },
    logout: async ({ commit }, data) => {
        localStorage.removeItem('auth');
        commit('LOGOUT');
    },
    registration: async ({ commit }, data) => {
        localStorage.setItem('auth', true);
        commit('LOGIN');
    },

    checkLogin: ({ commit }) => {
        if (JSON.parse(localStorage.getItem('auth'))) {
            commit('LOGIN');
        }
    },

};

const mutations = {
    LOGIN : state => state.isAuth = true,
    LOGOUT: state => state.isAuth = false,
};

const getters = {
    isAuth: state => state.isAuth,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
