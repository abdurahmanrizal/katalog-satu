import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import vueNumeralFilterInstaller from "vue-numeral-filter";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(vueNumeralFilterInstaller);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(Vuetify);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
