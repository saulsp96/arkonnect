import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Rows: [],
    items: [{ title: "DEV", summary: 100, mini: [0, 0, 0] }],
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
        align: "center",
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
      { text: "Role", align: "center", value: "Role" },
      { text: "Nombre", value: "Nombre" },
      { text: "TechSkills", value: "TechSkills" },
      { text: "Ingles", value: "Ingles" },
      { text: "Main #1", value: "Main #1" },
      { text: "Main #2", value: "Main #2" },
      { text: "CV", value: "CV" },
    ],
    headersAdmin: [
      {
        text: "ActivoMT",
        align: "center",
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
        value: "Next Tech Secondary \n(Training)",
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
      var TechSkills = "";
      //var SumCount = 0;
      var RoleCount = [0, 0, 0, 0];
      var techSkillsCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      //usersTable = this.$store.getters.returnTalent;
      for (var i = 0; i < state.usuarios.length; i++) {
        var usuario = state.usuarios[i];
        Title = usuario.Role;
        TechSkills = usuario.TechSkills;
        switch (Title) {
          case "DEV":
            RoleCount[0] = RoleCount[0] + 1;
            if (TechSkills == "Jr") {
              techSkillsCount[0] = techSkillsCount[0] + 1;
            } else if (TechSkills == "Mid") {
              techSkillsCount[1] = techSkillsCount[1] + 1;
            } else if (TechSkills == "Sr") {
              techSkillsCount[2] = techSkillsCount[2] + 1;
            }
            break;
          case "QA":
            RoleCount[1] = RoleCount[1] + 1;
            if (TechSkills == "Jr") {
              techSkillsCount[3] = techSkillsCount[3] + 1;
            } else if (TechSkills == "Mid") {
              techSkillsCount[4] = techSkillsCount[4] + 1;
            } else if (TechSkills == "Sr") {
              techSkillsCount[5] = techSkillsCount[5] + 1;
            }
            break;
          case "SM":
            RoleCount[2] = RoleCount[2] + 1;
            if (TechSkills == "Jr") {
              techSkillsCount[6] = techSkillsCount[6] + 1;
            } else if (TechSkills == "Mid") {
              techSkillsCount[7] = techSkillsCount[7] + 1;
            } else if (TechSkills == "Sr") {
              techSkillsCount[8] = techSkillsCount[8] + 1;
            }
            break;
          case "PO":
            RoleCount[3] = RoleCount[3] + 1;
            if (TechSkills == "Jr") {
              techSkillsCount[9] = techSkillsCount[9] + 1;
            } else if (TechSkills == "Mid") {
              techSkillsCount[10] = techSkillsCount[10] + 1;
            } else if (TechSkills == "Sr") {
              techSkillsCount[11] = techSkillsCount[11] + 1;
            }
            break;
        }
      }
      var indice = 0;
      for (var x = 0; x < 4; x++) {
        dataItem = {
          id: x,
          title: Titles[x],
          summary: RoleCount[x],
          minijr: techSkillsCount[indice],
          minimid: techSkillsCount[indice + 1],
          minisr: techSkillsCount[indice + 2],
        };
        indice = indice + 3;
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
      for (var x = 0; x <= 4; x++) {
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
        if (
          usuario["Activo MT"] == "TRUE" &&
          usuario["Disponible para OPS"] == "TRUE"
        ) {
          userReady = usuario;
          usersTable[i] = userReady;
        }
      }
      return usersTable;
    },
    returnAllTalent(state) {
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
    isUserLogged() {
      var userRole = localStorage.getItem("userRole");
      if (userRole == null) {
        localStorage.setItem("isAuth", false);
        router.push("/").catch(() => {});
      } else if (userRole == 0) {
        router.push("/dashboard01").catch(() => {});
      } else if (userRole == 1) {
        router.push("/dashboard02").catch(() => {});
      } else if (userRole == 2) {
        router.push("/dashboard03").catch(() => {});
      } else if (userRole == 3) {
        router.push("/dashboard04").catch(() => {});
      }
      return true;
    },
  },
  modules: {},
});
