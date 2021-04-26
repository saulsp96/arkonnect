<template>
  <v-container>
    <v-card shaped class="mx-auto" max-width="200" max-height="200">
      <v-card-text>
        <div></div>
        <p class="big" align="center">
          23
        </p>
        <div class="medium" align="center">
          QA
        </div>
      </v-card-text>
      <div></div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "card",
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
