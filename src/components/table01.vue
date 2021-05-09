<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="Talento"
      :items-per-page="Talento.length"
      class="elevation-1"
    ></v-data-table
  ></v-container>
</template>

<script>
export default {
  data() {
    return {
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
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
