import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

import "./components/common/index";
import "./assets/scss/main.scss";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
