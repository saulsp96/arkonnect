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
    isWaiting: false,
    isGeneral: true,
    usuarios: [],
    movimientos: [],
    username: "",
    search: "",
    headersRH: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "Nombre",
      },
      {
        text: "Puesto",
        sortable: false,
        value: "Puesto",
      },
      {
        text: "TechSkills",
        sortable: false,
        value: "TechSkills",
      },
      {
        text: "Tipo Movimiento",
        sortable: false,
        value: "Tipo Movimiento",
      },
      {
        text: "Fecha",
        sortable: false,
        value: "Fecha",
      },
      {
        text: "Notas",
        sortable: false,
        value: "Notas",
      },
    ],
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
      var Titles = ["DEV", "QA", "SM", "PO"];
      var Title = "";
      //var SumCount = 0;
      var RoleCount = [0, 0, 0, 0];
      //usersTable = this.$store.getters.returnTalent;
      for (var i = 0; i < state.usuarios.length; i++) {
        var usuario = state.usuarios[i];
        Title = usuario.Role;
        switch (Title) {
          case "DEV":
            RoleCount[0] = RoleCount[0] + 1;
            break;
          case "QA":
            RoleCount[1] = RoleCount[1] + 1;
            break;
          case "SM":
            RoleCount[2] = RoleCount[2] + 1;
            break;
          case "PO":
            RoleCount[3] = RoleCount[3] + 1;
            break;
        }
      }
      for (var x = 0; x < 4; x++) {
        dataItem = { id: x, title: Titles[x], summary: RoleCount[x] };
        dataCards[x] = dataItem;
      }

      return dataCards;
    },
    returnTotalesMov(state) {
      //var usersTable = [];
      state.movimientos = state.Rows[2];
      var dataItem = {};
      var dataCards = [];
      var Titles = [
        "Ingreso MU",
        "Ingreso MT",
        "Ingreso OPS",
        "Mov equipo MT",
        "Baja arkus",
      ];
      var Title = "";
      //var SumCount = 0;
      var RoleCount = [0, 0, 0, 0, 0];
      //usersTable = this.$store.getters.returnTalent;
      for (var i = 0; i < state.movimientos.length; i++) {
        var usuario = state.movimientos[i];
        Title = usuario["Tipo Movimiento"];
        switch (Title) {
          case "Ingreso MU":
            RoleCount[0] = RoleCount[0] + 1;
            break;
          case "Ingreso MT":
            RoleCount[1] = RoleCount[1] + 1;
            break;
          case "Ingreso OPS":
            RoleCount[2] = RoleCount[2] + 1;
            break;
          case "Mov equipo MT":
            RoleCount[3] = RoleCount[3] + 1;
            break;
          case "Baja arkus":
            RoleCount[4] = RoleCount[4] + 1;
            break;
        }
      }
      for (var x = 0; x < 4; x++) {
        dataItem = { id: x, title: Titles[x], summary: RoleCount[x] };
        dataCards[x] = dataItem;
      }
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
    returnMovimientos(state) {
      var movimientosTable = [];
      state.movimientos = state.Rows[2];
      for (var i = 0; i < state.movimientos.length; i++) {
        var movimiento = state.movimientos[i];
        var movReady = [];
        movReady = movimiento;
        movimientosTable[i] = movReady;
      }
      return movimientosTable;
    },
  },
  modules: {},
});
