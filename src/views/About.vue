<template>
  <div class="about">
    <TopBanner />
    <SideMenu />
    <Card />
    <v-divider></v-divider>
    <h3>Aqui van los filtros y busqueda :p/About</h3>
    <v-divider></v-divider>
    <v-container><Table01 /></v-container>
  </div>
</template>
<script>
import Table01 from "../components/table01.vue";
import Card from "../components/card.vue";
import SideMenu from "../components/SideMenu01.vue";
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
