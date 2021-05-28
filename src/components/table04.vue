<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Movimientos"
      :search="this.$store.state.search"
      :items-per-page="Movimientos.length"
      class="elevation-1"
    >
    </v-data-table
  ></v-container>
</template>

<script>
export default {
  data() {
    return {
      Headers: this.$store.state.headersRH,
      Movimientos: this.$store.getters.returnMovimientos,
    };
  },
};
</script>

<style></style>
