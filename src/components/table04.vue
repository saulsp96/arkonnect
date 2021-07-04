<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Movimientos"
      :search="this.$store.state.search"
      :items-per-page="Movimientos.length"
      class="elevation-1"
      ><template v-slot:[`body.prepend`]>
        <tr>
          <td>
            <v-text-field
              v-model="filtroNombre"
              @input="handleNombreFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Nombre"
            ></v-text-field>
          </td>
          <td>
            <v-select
              v-model="defaultRoleFilter"
              @input="handleRoleFilter()"
              @click:clear="handleClear()"
              clearable
              :items="itemsRole"
              label="Role"
            ></v-select>
          </td>
          <td>
            <v-select
              v-model="filtro"
              @input="handletechSkillsFilter()"
              @click:clear="handleClear()"
              clearable
              :items="itemsTeckSkills"
              type="text"
              label="TechSkills"
            ></v-select>
          </td>
          <td>
            <v-select
              v-model="defaultMovFilter"
              @input="handleMovFilter()"
              @click:clear="handleClear()"
              clearable
              :items="itemsMovimientos"
              label="Movimiento"
            ></v-select>
          </td>
          <td>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="fecha"
                  label="Fecha"
                  prepend-icon="mdi-calendar"
                  @click:clear="handleClear()"
                  clearable
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="fecha"
                @input="handleFechaFilter()"
                show-current="2021-07-13"
              ></v-date-picker>
            </v-menu>
          </td>
          <td>
            <v-text-field
              v-model="filtroNotas"
              @input="handleNotasFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Notas"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template> </v-data-table
  ></v-container>
</template>

<script>
export default {
  methods: {
    handleAcentos(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },
    handleClear() {
      this.Movimientos = this.$store.getters.returnMovimientos;
    },
    handleRoleFilter() {
      var Talento = this.$store.getters.returnMovimientos;
      if (this.defaultRoleFilter != null) {
        this.$store.state.defaultRoleFilter = this.defaultRoleFilter.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var rol = usuario["Puesto"];
            rol = rol.toUpperCase();
            var arrayRole = rol.split("");
            var userReady = [];
            if (
              arrayRole.includes(this.$store.state.defaultRoleFilter) ||
              rol.toUpperCase() == this.defaultRoleFilter.toUpperCase()
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }

        this.Movimientos = usersTable;
      }
    },
    handleNombreFilter() {
      var Talento = this.$store.getters.returnMovimientos;
      var flag = "false";
      if (this.filtroNombre != null) {
        this.$store.state.defaultNombreFilter = this.filtroNombre.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Nombre"];
            nombre = this.handleAcentos(nombre.toUpperCase());
            nombre = nombre.replace(/\s/g, "");
            var userReady = [];
            if (
              nombre.includes(this.$store.state.defaultNombreFilter) ||
              flag == "true"
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroNombre.length == 0) {
          this.Movimientos = this.$store.getters.returnMovimientos;
        } else this.Movimientos = usersTable;
      }
    },
    handleNotasFilter() {
      var Talento = this.$store.getters.returnMovimientos;
      var flag = "false";
      if (this.filtroNotas != null) {
        this.$store.state.defaultNotasFilter = this.filtroNotas.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Notas"];
            nombre = this.handleAcentos(nombre.toUpperCase());
            nombre = nombre.replace(/\s/g, "");
            var userReady = [];
            if (
              nombre.includes(this.$store.state.defaultNotasFilter) ||
              flag == "true"
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroNotas.length == 0) {
          this.Movimientos = this.$store.getters.returnMovimientos;
        } else this.Movimientos = usersTable;
      }
    },
    handletechSkillsFilter() {
      var Talento = this.$store.getters.returnMovimientos;
      if (this.filtro != null) {
        this.$store.state.defaultTeckSkillsFilter = this.filtro.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var rol = usuario["TechSkills"];
            var rolUpperCase = rol.toUpperCase();
            var arrayTeckSkills = rolUpperCase.split("");
            var userReady = [];
            if (
              arrayTeckSkills.includes(
                this.$store.state.defaultTeckSkillsFilter
              ) ||
              rol.toUpperCase() == this.filtro.toUpperCase()
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (usersTable.length > 0) {
          this.Movimientos = usersTable;
        } else this.Movimientos = this.$store.getters.returnMovimientos;
      }
    },
    handleMovFilter() {
      var Talento = this.$store.getters.returnMovimientos;
      if (this.defaultMovFilter != null) {
        this.$store.state.defaultMovFilter = this.defaultMovFilter
          .toUpperCase()
          .replace(/\s/g, "");
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Tipo Movimiento"];
            nombre = this.handleAcentos(nombre.toUpperCase());
            nombre = nombre.replace(/\s/g, "");
            console.log("This is mov:" + nombre);
            console.log(
              "This is filtro: " + this.$store.state.defaultMovFilter
            );
            var userReady = [];
            if (
              nombre.includes(this.$store.state.defaultMovFilter) ||
              nombre == this.$store.state.defaultMovFilter
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.defaultMovFilter.length == 0) {
          this.Movimientos = this.$store.getters.returnMovimientos;
        } else this.Movimientos = usersTable;
      }
    },
    handleFechaFilter() {
      this.menu2 = false;
      var Talento = this.$store.getters.returnMovimientos;
      if (this.fecha != null) {
        var lTalento = Talento.length;
        var usersTable = [];

        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Fecha"];
            var arrayDate = nombre.split("/");
            nombre = nombre.replace("/", "-");
            nombre = nombre.replace("/", "-");
            if (arrayDate[1].length == 1) {
              arrayDate[1] = "0" + arrayDate[1];
            }
            if (arrayDate[0].length == 1) {
              arrayDate[0] = "0" + arrayDate[0];
            }
            nombre = arrayDate[2] + "-" + arrayDate[1] + "-" + arrayDate[0];
            var userReady = [];
            if (nombre.includes(this.fecha) || nombre == this.fecha) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.fecha.length == 0) {
          this.Movimientos = this.$store.getters.returnMovimientos;
        } else this.Movimientos = usersTable;
      }
    },
  },

  data() {
    return {
      defaultRoleFilter: "",
      defaultMovFilter: "",
      fecha: "",
      menu2: "",
      filtroNombre: "",
      filtroNotas: "",
      filtro: "",
      filtro2: "",
      filtro3: "",
      filtro4: "",
      select: null,
      itemsRole: ["DEV", "SM", "PO", "UI/UX", "QA", "DS"],
      itemsFilter: [">=", ">", "=", "<", "<="],
      itemsTeckSkills: ["Sr", "Mid", "Jr"],
      itemsMovimientos: ["Baja de arkus", "Ingreso a OPS", "Mov de area"],
      Headers: this.$store.state.headersRH,
      Movimientos: this.$store.getters.returnMovimientos,
    };
  },
};
</script>

<style></style>
