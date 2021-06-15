<template>
  <v-card class="grey lighten-4" max-height="30">
    <v-toolbar flat class="grey lighten-4" max-height="50">
      <v-row>
        <h2>Talento Interno Arkus Nexus</h2>
      </v-row>
      <v-row justify="end" v-if="this.$store.state.isWaiting">
        <h2 v-if="this.$store.state.isWaiting">
          {{ this.$store.state.username }}
        </h2>
      </v-row>
    </v-toolbar>

    <v-card-text> </v-card-text>
  </v-card>
</template>

<script>
export default {
  drawer: null,
  name: "TopBanner",
  data: () => ({
    sticky: false,
  }),
};
</script>
<style></style>
