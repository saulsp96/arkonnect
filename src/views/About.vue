<template>
  <div class="about">
    <TopBanner />
    <SideMenu />
    <Card />
    <h1>This is an about page</h1>
    <v-divider></v-divider>
    <v-container><Table01 /></v-container>
  </div>
</template>
<script>
import Table01 from "../components/table01.vue";
import Card from "../components/card.vue";
import SideMenu from "../components/SideMenu.vue";
import TopBanner from "../components/TopBanner";
export default {
  components: {
    SideMenu,
    TopBanner,
    Card,
    Table01,
  },
};
</script>
