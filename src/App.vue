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
  data() {
    return {
      drawer: null,
      Rows: Vue.Rows,
    };
  },
};
</script>
