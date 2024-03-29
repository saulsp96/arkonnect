import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.component("loading-overlay", Loading);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  Vuex,
  vuetify,
  data() {
    return {};
  },
  render: (h) => h(App),
}).$mount("#app");
