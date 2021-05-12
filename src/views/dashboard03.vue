<template>
  <div class="about">
    <TopBanner />
    <SideMenu />
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Tarjetas
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <Card />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <v-divider></v-divider>
    <SearchBar />
    <v-divider></v-divider>
    <v-container><Table01 /></v-container>
  </div>
</template>
<script>
import SearchBar from "../components/SearchComp.vue";
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
    SearchBar,
  },
};
</script>
