<template>
  <div class="about">
    <TopBanner />
    <SideMenu />
    <v-container>
      <v-row
        ><v-col>
          <Card />
        </v-col>
        <v-col>
          <Card />
        </v-col>
        <v-col>
          <Card />
        </v-col>
        <v-col>
          <Card />
        </v-col>
        <v-col>
          <Card />
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <h2>Dashboard - Recursos Humanos</h2>
    <h3>Aqui van los filtros y busqueda :p</h3>
    <v-divider></v-divider>
    <v-container><Table01 /></v-container>
  </div>
</template>
<script>
import Table01 from "../components/table01.vue";
import Card from "../components/card.vue";
import SideMenu from "../components/SideMenu03.vue";
import TopBanner from "../components/TopBanner";
export default {
  name: "dashboard01",
  components: {
    SideMenu,
    TopBanner,
    Card,
    Table01,
  },
};
</script>
