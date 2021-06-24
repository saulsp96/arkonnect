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
    //Modif on live branch
    console.log("This is beforeCreate");
    this.$store.getters.isUserLogged;
    const { GoogleSpreadsheet } = require("google-spreadsheet");

    const credenciales = require("./json/credenciales.json");

    let googleId = "1CGQu-Flh5LyeIj4JMyu6TyYRgj3nUcJxvNBuy0lGyaA";

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    var i;

    for (i = 0; i < documento.sheetCount; i++) {
      this.$store.state.sheets[i] = documento.sheetsByIndex[i];
      console.log("Sheet obtenido: " + this.$store.state.sheets[i].title);
      this.$store.state.Rows[i] = await this.$store.state.sheets[i].getRows();
      //console.log(this.$store.state.Rows[i]);This is
    }
    this.$store.getters.returnTotalesMov;
    this.$store.getters.returnKDratio;
    this.$store.state.isWaiting = true;
  },
  beforeUpdate: async function() {
    this.$store.getters.isUserLogged;
    console.log("This is beforeUpdate");
    const { GoogleSpreadsheet } = require("google-spreadsheet");

    const credenciales = require("./json/credenciales.json");

    let googleId = "1CGQu-Flh5LyeIj4JMyu6TyYRgj3nUcJxvNBuy0lGyaA";

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    var i;

    for (i = 0; i < documento.sheetCount; i++) {
      this.$store.state.sheets[i] = documento.sheetsByIndex[i];
      console.log("Sheet obtenido: " + this.$store.state.sheets[i].title);
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
