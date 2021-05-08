import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
//import store from "./store";
import vuetify from "./plugins/vuetify";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.component("loading-overlay", Loading);
Vue.config.productionTip = false;
var $sheets = [];
var $Rows = [];
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
new Vue({
  router,
  store,
  Vuex,
  vuetify,
  beforeMount: async function() {
    const { GoogleSpreadsheet } = require("google-spreadsheet");

    const credenciales = require("./json/credenciales.json");

    let googleId = "1CGQu-Flh5LyeIj4JMyu6TyYRgj3nUcJxvNBuy0lGyaA";

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    var i;

    for (i = 0; i < documento.sheetCount; i++) {
      $sheets[i] = documento.sheetsByIndex[i];
      console.log("Sheet obtenido: " + $sheets[i].title);
      $Rows[i] = await $sheets[i].getRows();
      console.log("Imprime Rows: " + $sheets[i].title);
      console.log($Rows[i]);
    }
  },
  data() {
    return {
      Rows: $Rows,
    };
  },
  render: (h) => h(App),
}).$mount("#app");
