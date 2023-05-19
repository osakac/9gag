import { createStore } from 'vuex'

export default createStore({
  state: {
    loginMinLength: 6,
    passwordMinLength: 5,
  },
  getters: {
    getPasswordMinLength(state) {
      return state.passwordMinLength
    },
    getLoginMinLength(state) {
      return state.loginMinLength
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
