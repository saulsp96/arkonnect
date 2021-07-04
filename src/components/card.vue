<template>
  <v-container>
    <v-row justify="center">
      <div v-for="item in items" :key="item.id">
        <v-col>
          <v-card :class="`rounded-lg`" width="200" height="170">
            <v-card-text>
              <!-- <div></div> -->
              <p class="big" align="center">
                {{ item.summary }}
              </p>
              <div class="medium" align="center">
                {{ item.title }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <div>
              <v-container>
                <v-row
                  ><v-col>
                    <p class="minijr" align="center">{{ item.minijr }}</p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <p class="minimid" align="center">{{ item.minimid }}</p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col>
                    <p class="minisr" align="center">{{ item.minisr }}</p>
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
  padding-bottom: 15px;
  padding-top: 5px;
  font-weight: bold;
}
.medium {
  font-size: 30px;
}
.v-card {
  margin-right: 20px;
  margin-left: 20px;
}
</style>
