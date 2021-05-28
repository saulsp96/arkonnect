<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="this.$store.state.search"
      :items-per-page="Talento.length"
      class="elevation-1"
    >
    </v-data-table
  ></v-container>
</template>

<script>
export default {
  data() {
    return {
      Headers: this.$store.state.headersAdmin,
      Talento: this.$store.getters.returnAllTalent,
    };
  },
};
</script>

<style></style>
