<template>
  <v-container>
    <v-row justify="center">
      <div v-for="item in itemsRH" :key="item.id">
        <v-col>
          <v-card :class="`rounded-lg`" max-width="500" max-height="200">
            <v-card-text>
              <div></div>
              <p class="big" align="center">
                {{ item.summary }}
              </p>
              <!-- <v-divider></v-divider> -->
              <div class="medium" align="center">
                {{ item.title }}
              </div>
            </v-card-text>
            <!-- <div>
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
            </div> -->
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "cardrh",
  data() {
    return {
      flag: true,
      itemsRH: this.$store.getters.returnTotalesMov,
    };
  },
};
</script>
<style scoped>
.big {
  font-size: 60px;
  padding-bottom: 25px;
}
.medium {
  font-size: 30px;
  padding-bottom: 0px;
}
.v-card {
  margin-right: 20px;
  margin-left: 20px;
}
</style>
