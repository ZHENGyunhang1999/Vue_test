/* 该文件是整个项目的入口文件*/
//引入Vue
import Vue from "vue";
//引入App组件，它是所有组件的父组件
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "./router/permission"
import Vuex from "vuex";
import store from "./store/index";
Vue.use(VueRouter);

Vue.use(Vuex);
//关闭Vue的生产提示
Vue.config.productionTip = false;
Vue.use(ElementUI);
//创建Vue实例对象---vm
new Vue({
  el: "#app",
  //将app组件放入容器中
  render: (h) => h(App),
  router: router,
  store,
});
