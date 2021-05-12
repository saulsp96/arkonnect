<template>
  <v-container>
    <v-row>
      <div v-for="item in items" :key="item.summary">
        <v-col>
          <v-card shaped class="mx-auto" max-width="200" max-height="200">
            <v-card-text>
              <div></div>
              <p class="big" align="center">
                {{ item.summary }}
              </p>
              <div class="medium" align="center">
                {{ item.title }}
              </div>
            </v-card-text>
            <div>
              <v-container>
                <v-row
                  ><v-col>
                    <p class="minijr">6</p>
                  </v-col>
                  <v-col>
                    <p class="minimid">6</p>
                  </v-col>
                  <v-col>
                    <p class="minisr">6</p>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "card",
  data() {
    return {
      flag: true,
      items: this.$store.getters.returnTotales,
    };
  },
};
</script>
<style scoped>
.minijr {
  font-size: 100%;
  font-weight: bold;
  color: lightskyblue;
}
.minimid {
  font-size: 100%;
  font-weight: bold;
  color: MediumSeaGreen;
}
.minisr {
  font-size: 100%;
  font-weight: bold;
  color: rgb(248, 73, 73);
}
.big {
  font-size: 60px;
  padding-bottom: 5px;
}
.medium {
  font-size: 30px;
  padding-bottom: 0px;
}
.v-card {
  padding-top: 5px;
  padding-right: 3px;
  padding-bottom: 0px;
  padding-left: 8px;
}
</style>
