import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antui from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";
Vue.config.productionTip = false;
Vue.use(antui);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
