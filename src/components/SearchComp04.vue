<template v-slot:header>
  <v-toolbar dark color="blue darken-3" class="mb-1">
    <v-text-field
      v-model="search"
      @input="handleSearch()"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
    ></v-text-field>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-select
        v-model="sortBy"
        flat
        solo-inverted
        hide-details
        :items="keys"
        prepend-inner-icon="mdi-magnify"
        label="Sort by"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="sortDesc" mandatory>
        <v-btn large depressed color="blue" :value="false">
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <v-btn large depressed color="blue" :value="true">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </v-btn-toggle>
    </template>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    handleSearch() {
      console.log("This is handleSearch");
      this.$store.state.search = this.search;
      return true;
    },
  },
  data() {
    return {
      search: this.$store.state.search,
      keys: this.$store.state.headersRH,
      sortBy: "name",
      sortDesc: false,
      methods: {
        handlesearch() {},
      },
    };
  },
};
</script>
