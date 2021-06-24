<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      item-key="name"
      :search="this.$store.state.search"
      :items-per-page="Talento.length"
      class="elevation-1"
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
      <template v-slot:[`body.prepend`]>
        <tr>
          <td>
            <v-text-field
              max-width="8"
              v-model="defaultRoleFilter"
              @input="handleRoleFilter()"
              type="text"
              label="Role"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro"
              type="text"
              label="TechSkills"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro2"
              type="number"
              label="Ingles"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro3"
              type="text"
              label="Main #1"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro4"
              type="text"
              label="Main #2"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template> </v-data-table
  ></v-container>
</template>

<script>
export default {
  methods: {
    handleRoleFilter() {
      console.log("This is handleRoleFilter");
      this.$store.state.defaultRoleFilter = this.defaultRoleFilter;
      console.log(this.$store.state.defaultRoleFilter);
      return true;
    },
    getColor(Ingles) {
      if (Ingles < 5) return "red";
      else if (Ingles < 8) return "orange";
      else return "green";
    },
  },
  data() {
    return {
      defaultRoleFilter: "",
      filtro: "",
      filtro2: "",
      filtro3: "",
      filtro4: "",
      Headers: this.$store.state.headersRC,
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
