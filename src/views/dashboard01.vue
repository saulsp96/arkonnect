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
    <h2>Dashboard - Admin</h2>
    <SearchBar />
    <v-divider></v-divider>
    <v-container><Table01 /></v-container>
  </div>
</template>
<script>
import SearchBar from "../components/search.vue";
import Table01 from "../components/table01.vue";
import Card from "../components/card.vue";
import SideMenu from "../components/SideMenu01.vue";
import TopBanner from "../components/TopBanner";
export default {
  name: "dashboard01",
  components: {
    SideMenu,
    TopBanner,
    Card,
    Table01,
    SearchBar,
  },
};
</script>
