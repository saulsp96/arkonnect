<template>
  <v-card class="grey lighten-4" max-height="70">
    <v-toolbar flat class="grey lighten-4">
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
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
