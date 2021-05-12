import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Rows: [],
    items: [
      { title: "DEV", summary: 100 },
      { title: "SM", summary: 150 },
      { title: "PO", summary: 101 },
      { title: "QA", summary: 99 },
    ],
    sheets: [],
    flagCard: true,
    usuarios: [],
    username: "",
    search: "",
    headers: [
      {
        text: "ActivoMT",
        align: "start",
        sortable: false,
        value: "Activo MT",
      },
      { text: "Disponible OPS", value: "Disponible para OPS", sortable: false },
      { text: "Oficina", value: "Oficina", sortable: false },
      { text: "CV", value: "CV", sortable: false },
      { text: "Correo", value: "Correo", sortable: false },
      { text: "Nombre", value: "Nombre", sortable: false },
      { text: "Role", value: "Role", sortable: false },
      { text: "TechSkills", value: "TechSkills", sortable: false },
      { text: "Ingles", value: "Ingles" },
      { text: "Calificacion OPS", value: "Calificacion \nOPS" },
      { text: "Equipo", value: "Equipo", sortable: false },
      { text: "Equipo futuro", value: "Equipo \nFuturo", sortable: false },
      {
        text: "Fecha Inicio equipo actual",
        value: "Fecha Inicio \nequipo actual",
        sortable: false,
      },
      { text: "Main #1", value: "Main #1", sortable: false },
      { text: "Main #2", value: "Main #2", sortable: false },
      { text: "Secondary #1", value: "Secondary \n#1", sortable: false },
      { text: "Secondary #2", value: "Secondary \n#2", sortable: false },
      { text: "Secondary #3", value: "Secondary \n#3", sortable: false },
      {
        text: "Target Tech Main \n(Training)",
        sortable: false,
        value: "Target Tech Main \n(Training)",
      },
      {
        text: "Next Tech Secondary",
        value: "Next Tech Secondary (Training)",
        sortable: false,
      },
      { text: "Notes", value: "Notas", sortable: false },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    returnTotales(state) {
      //var usersTable = [];
      state.usuarios = state.Rows[0];
      var dataItem = {};
      var dataCards = [];
      var Titles = [];
      var Title = "";
      //var SumCount = 0;
      var RoleCount = [0, 0, 0, 0];
      //usersTable = this.$store.getters.returnTalent;
      console.log(state.usuarios.length);
      for (var i = 0; i < state.usuarios.length; i++) {
        console.log("returnTotalesgetter - For");
        var usuario = state.usuarios[i];
        console.log(usuario);
        Title = usuario.Role;
        Titles[i] = Title;
        console.log(Title);
        switch (Title) {
          case "DEV":
            RoleCount[0] = RoleCount[0] + 1;
            console.log(RoleCount[0]);
            console.log("This is Dev case");
            break;
          case "QA":
            RoleCount[1] = RoleCount[1] + 1;
            console.log(RoleCount[1]);
            console.log("This is QA case");
            break;
          case "SM":
            RoleCount[2] = RoleCount[2] + 1;
            console.log(RoleCount[2]);
            console.log("This is  SM case");
            break;
          case "PO":
            RoleCount[3] = RoleCount[3] + 1;
            console.log(RoleCount[3]);
            console.log("This is  PO case");
            break;
        }
      }
      for (var x = 0; x < 4; x++) {
        dataItem = { title: Titles[x], summary: RoleCount[x] };
        console.log(dataItem);
        dataCards[x] = dataItem;
      }
      console.log("This is summary");
      console.log(RoleCount[0]);
      console.log(RoleCount[1]);
      console.log(RoleCount[2]);
      console.log(RoleCount[3]);

      return dataCards;
    },
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
