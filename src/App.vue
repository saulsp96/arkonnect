<template>
  <v-app>
    <v-main>
      <router-view>
        <HelloWorld />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  beforeCreate: async function() {
    this.$store.getters.isUserLogged;
    const { GoogleSpreadsheet } = require("google-spreadsheet");

    const credenciales = require("./json/credenciales_live.json");

    let googleId = "1sfv1ZEDX6LD_oyNFW_OGl7YqqUwkup_9dqdumeQxHvc";

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    var i;

    for (i = 0; i < documento.sheetCount; i++) {
      this.$store.state.sheets[i] = documento.sheetsByIndex[i];
      this.$store.state.Rows[i] = await this.$store.state.sheets[i].getRows();
    }
    this.$store.getters.returnTotalesMov;
    this.$store.getters.returnKDratio;
    this.$store.state.isWaiting = true;
  },
  beforeUpdate: async function() {
    this.$store.getters.isUserLogged;
    const { GoogleSpreadsheet } = require("google-spreadsheet");

    const credenciales = require("./json/credenciales_live.json");

    let googleId = "1sfv1ZEDX6LD_oyNFW_OGl7YqqUwkup_9dqdumeQxHvc";

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    var i;

    for (i = 0; i < documento.sheetCount; i++) {
      this.$store.state.sheets[i] = documento.sheetsByIndex[i];
      this.$store.state.Rows[i] = await this.$store.state.sheets[i].getRows();
    }
    this.$store.getters.returnKDratio;
    this.$store.state.isWaiting = true;
    this.$store.getters.isUserAuth;
  },
  data() {
    return {
      drawer: null,
      Rows: Vue.Rows,
    };
  },
};
</script>
