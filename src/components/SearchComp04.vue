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
      <!-- 
      <v-spacer></v-spacer> -->

      <v-btn
        v-if="this.$store.state.isWaiting"
        v-on:click="handlePrint"
        class="mx-2"
        fab
        dark
        small
        color="red"
        ><v-icon dark>
          mdi-file-download-outline
        </v-icon>
      </v-btn>
    </template>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    handleSearch() {
      this.$store.state.search = this.search;
      return true;
    },
    handlePrint() {
      // console.log("Local handle Print");
      // this.$store.dispatch("handlePrint");
      window.print();
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
