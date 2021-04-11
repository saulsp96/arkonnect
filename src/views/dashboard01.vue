<template>
  <v-container>
    <TopBanner />
    <SideMenu />
    <Card />
    <h1>Im dashboard01</h1>
  </v-container>
</template>
<script>
import SideMenu from "../components/SideMenu.vue";
import TopBanner from "../components/TopBanner";
import Card from "../components/card.vue";
export default {
  name: "dasboard01",
  components: {
    SideMenu,
    TopBanner,
    Card,
  },
};
</script>
