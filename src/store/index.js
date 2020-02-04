import Vue from 'vue';
import Vuex from 'vuex';
import Users from './modules/user/users';
import Navigator from './modules/navigator';
import Splitter from './modules/splitter';
import Tabbar from './modules/tabbar';
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);



export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    navigator: Navigator,
    splitter: Splitter,
    tabbar: Tabbar,
    user: Users,

  },
  plugins: [createPersistedState({
    paths: ['user'],
  })]
});
