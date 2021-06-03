<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="this.$store.state.search"
      :items-per-page="Talento.length"
      class="elevation-1"
    >
      <template v-slot:[`item.Activo\nMT`]="{ item }">
        <v-simple-checkbox
          v-model="item['Activo MT']"
          disabled
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.Ingles`]="{ item }">
        <v-chip :color="getColor(item.Ingles)" dark>
          {{ item.Ingles }}
        </v-chip>
      </template>
    </v-data-table></v-container
  >
</template>

<script>
export default {
  methods: {
    getColor(Ingles) {
      if (Ingles < 5) return "red";
      else if (Ingles < 8) return "orange";
      else return "green";
    },
  },
  data() {
    return {
      Headers: this.$store.state.headersAdmin,
      Talento: this.$store.getters.returnAllTalent,
    };
  },
};
</script>

<style></style>
