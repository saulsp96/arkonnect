import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.component("loading-overlay", Loading);
Vue.config.productionTip = false;
var $sheets = [];
var $Rows = [];
new Vue({
  router,
  store,
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
    }
  },
  data() {
    return {
      Rows: $Rows,
    };
  },
  render: (h) => h(App),
}).$mount("#app");
