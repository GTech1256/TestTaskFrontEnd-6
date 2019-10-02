import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'hello'
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    messageInUpperCase({ message }): string {
      return message.toUpperCase();
    }
  }
});
