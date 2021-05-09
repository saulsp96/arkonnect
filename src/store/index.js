import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Rows: [],
    sheets: [],
    usuarios: [],
    username: "",
  },
  mutations: {},
  actions: {},
  getters: {
    returnTalent(state) {
      var usersTable = [];
      state.usuarios = state.Rows[0];
      for (var i = 0; i < state.usuarios.length; i++) {
        var usuario = state.usuarios[i];
        console.log(usuario.Nombre);
        var userReady = [];
        userReady = usuario;
        console.log(userReady);
        usersTable[i] = userReady;
        console.log(usersTable);
        // userReady[i] = usuario["Activo MT"];
        // userReady[i] = usuario.CV;
        // userReady[i] = usuario["Calificacion OPS"];
        // userReady[i] = usuario["Equipo\nFuturo"];
        // userReady[i] = usuario["Fecha Inicio\nequipo actual"];
        // userReady[i] = usuario.Ingles;
        // userReady[i] = usuario["Main #1"];
        // userReady[i] = usuario["Main #2"];
        // userReady[i] = usuario["Next Tech Secondary\n(Training)"];
        // userReady[i] = usuario.Nombre;
        // userReady[i] = usuario.Notas;
        // userReady[i] = usuario.Oficina;
        // userReady[i] = usuario.Role;
        // userReady[i] = usuario["Secondary\n#1"];
        // userReady[i] = usuario["Secondary\n#2"];
        // userReady[i] = usuario["Secondary\n#3"];
        // userReady[i] = usuario["Target Tech Main\n(Training)"];
        // userReady[i] = usuario.TechSkills;
        // userReady[i] = usuario.Nombre;
        // userReady[i] = usuario.Nombre;
        // userReady[i] = usuario.Nombre;
        //   console.log(state.usuarios[i]);
        //   state.usuario[i] = state.usuarios[i];
        //   for (var x = 0; x < 21; x++) {
        //     state.usersTable[x] = state.usuario[x];
        //     console.log(state.usersTable[x]);
        //   }
      }
      return usersTable;
    },
  },
  modules: {},
});
