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
        <v-btn color="primary" fab small dark v-on:click="handleDrawer">
          <v-icon>mdi-wrench</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-container v-if="this.drawer">
      <v-row>
        <v-col
          ><v-select :items="headers" label="Campo" outlined></v-select
        ></v-col>
        <v-col
          ><v-select :items="operadores" label="Operador" outlined></v-select
        ></v-col>
        <v-col>
          <v-text-field label="Busqueda" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-btn color="primary" dark large justify="center">
            Aplicar Filtro
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    handleDrawer() {
      console.log(this.drawer);
      this.drawer = !this.drawer;
      console.log(this.drawer);
    },
  },
  data: () => ({
    drawer: false,
    headers: [
      {
        text: "ActivoMT",
        align: "start",
        //sortable: false,
        value: "activoMT",
      },
      { text: "Disponible OPS", value: "disponibleops" },
      { text: "Oficina", value: "oficina" },
      { text: "CV", value: "cv" },
      { text: "Correo", value: "correo" },
      { text: "Nombre", value: "nombre" },
      { text: "Role", value: "role" },
      { text: "TechSkills", value: "techskills" },
      { text: "Ingles", value: "ingles" },
      { text: "Calificacion OPS", value: "calificacionops" },
      { text: "Equipo", value: "equipo" },
      { text: "Equipo futuro", value: "equipofuturo" },
      {
        text: "Fecha Inicio equipo actual",
        value: "fechainicioequipoactual",
      },
      { text: "Main #1", value: "main1" },
      { text: "Main #2", value: "main2" },
      { text: "Secondary #1", value: "sec1" },
      { text: "Secondary #2", value: "sec2" },
      { text: "Secondary #3", value: "sec3" },
      { text: "Target Tech Main (Training)", value: "targettechmain" },
      { text: "Next Tech Secondary", value: "nexttechsec" },
      { text: "Notes", value: "notes" },
    ],
    operadores: [
      { text: "Igual a (=)", value: "=" },
      { text: "Mayor a (>)", value: ">" },
      { text: "Menor a (<)", value: "<" },
      { text: "Mayor o igual a (>=)", value: ">=" },
      { text: "Menor o igual a (<=)", value: "<=" },
      { text: "Diferente (a)", value: "<>" },
    ],
  }),
};
</script>

<style></style>
