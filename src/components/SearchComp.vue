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
      label="Buscar"
    ></v-text-field>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>

      <!-- <v-select
        v-model="sortBy"
        flat
        solo-inverted
        hide-details
        :items="keys"
        :search="search"
        prepend-inner-icon="mdi-magnify"
        label="Agrupar por"
      ></v-select> -->
      <v-spacer></v-spacer>
      <!-- <v-btn-toggle v-model="sortDesc" mandatory>
        <v-btn large depressed color="blue" :value="false">
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <v-btn large depressed color="blue" :value="true">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </v-btn-toggle> -->
      <v-btn
        v-if="this.$store.state.isWaiting"
        v-on:click="handlePrint"
        class="mx-2"
        fab
        dark
        small
        color="red"
      >
        <v-icon dark>
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
      console.log("This is handleSearch");
      this.$store.state.search = this.search;
      console.log(this.$store.state.search);
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
      search: "",
      keys: this.$store.state.agrupar,
      sortBy: "name",
      sortDesc: false,
      // heading: "Sample PDF Generator",
      // moreText: [
      //   "This is another few sentences of text to look at it.",
      //   "Just testing the paragraphs to see how they format.",
      //   "jsPDF likes arrays for sentences.",
      //   "Do paragraphs wrap properly?",
      //   "Yes, they do!",
      //   "What does it look like?",
      //   "Not bad at all.",
      // ],
      // items: [
      //   { title: "Item 1", body: "I am item 1 body text" },
      //   { title: "Item 2", body: "I am item 2 body text" },
      //   { title: "Item 3", body: "I am item 3 body text" },
      //   { title: "Item 4", body: "I am item 4 body text" },
      // ],
    };
  },
};
</script>
