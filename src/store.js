import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cleanerNumber: 0
  },
  mutations: {
    updateCleanerNumber (state, payload) {
      state.cleanerNumber = payload
    }
  },
  actions: {

  }
})
