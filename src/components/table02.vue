<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="this.$store.state.search"
      :items-per-page="Talento.length"
      class="elevation-1"
      :custom-filter="filterOnlyCapsText"
      :sort-by="['Role', 'TechSkills']"
      :sort-desc="[false, true]"
      multi-sort
    >
      <template v-slot:[`item.Ingles`]="{ item }">
        <v-chip :color="getColor(item.Ingles)" dark>
          {{ item.Ingles }}
        </v-chip>
      </template>
      <template v-slot:[`item.CV`]="{ item }">
        <a :href="item.CV">
          CV
        </a>
      </template>
      <template v-slot:[`item.Correo`]="{ item }">
        <a :href="`mailto:${item.Correo}`">
          {{ item.Correo }}
        </a>
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
      Headers: this.$store.state.headers,
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
