import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  // modules: {
  //   getters
  // },
  state: {
    test: "222"
  },
  getters: {
    getTest: (state) => {
      return state.test;
    }
  }
});
