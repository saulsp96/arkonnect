import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Rows: [],
    sheets: [],
    usuarios: [],
    username: "",
    headers: [
      {
        text: "ActivoMT",
        align: "start",
        //sortable: false,
        value: "Activo MT",
      },
      { text: "Disponible OPS", value: "Disponible para OPS" },
      { text: "Oficina", value: "Oficina" },
      { text: "CV", value: "CV" },
      { text: "Correo", value: "Correo" },
      { text: "Nombre", value: "Nombre" },
      { text: "Role", value: "Role" },
      { text: "TechSkills", value: "TechSkills" },
      { text: "Ingles", value: "Ingles" },
      { text: "Calificacion OPS", value: "Calificacion \nOPS" },
      { text: "Equipo", value: "Equipo" },
      { text: "Equipo futuro", value: "Equipo \nFuturo" },
      {
        text: "Fecha Inicio equipo actual",
        value: "Fecha Inicio \nequipo actual",
      },
      { text: "Main #1", value: "Main #1" },
      { text: "Main #2", value: "Main #2" },
      { text: "Secondary #1", value: "Secondary \n#1" },
      { text: "Secondary #2", value: "Secondary \n#2" },
      { text: "Secondary #3", value: "Secondary \n#3" },
      {
        text: "Target Tech Main \n(Training)",
        value: "Target Tech Main \n(Training)",
      },
      {
        text: "Next Tech Secondary",
        value: "Next Tech Secondary (Training)",
      },
      { text: "Notes", value: "Notas" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    returnTalent(state) {
      var usersTable = [];
      state.usuarios = state.Rows[0];
      for (var i = 0; i < state.usuarios.length; i++) {
        var usuario = state.usuarios[i];
        var userReady = [];
        userReady = usuario;
        usersTable[i] = userReady;
      }
      return usersTable;
    },
  },
  modules: {},
});
