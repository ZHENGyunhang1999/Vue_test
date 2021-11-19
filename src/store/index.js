import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  title: "网页设计与网站建设",
  price: "44.20元",
};

export default new Vuex.Store({
  state,
});
