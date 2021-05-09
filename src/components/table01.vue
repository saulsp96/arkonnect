<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="Search"
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
      Search: this.$store.state.search,
      Headers: this.$store.state.headers,
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
