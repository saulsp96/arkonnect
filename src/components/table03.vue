<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="this.$store.state.search"
      :items-per-page="Talento.length"
      class="elevation-1"
      :custom-filter="filterOnlyCapsText"
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
      <!-- <template v-slot:[`body.append`]>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="blankString"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template> -->
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
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleUpperCase()
          .indexOf(search) !== -1
      );
    },
  },
  data() {
    return {
      blankString: "",
      Headers: this.$store.state.headersRC,
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
