<template>
  <v-container>
    <v-row>
      <v-col><v-text-field label="Busqueda" outlined></v-text-field> </v-col>
      <v-col
        ><v-btn color="primary" dark large justify="center">
          Buscar
        </v-btn></v-col
      >
      <v-col>
        <v-btn color="primary" fab small dark>
          <v-icon>mdi-wrench</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style></style>
