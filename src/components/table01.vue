<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="this.$store.state.search"
      :items-per-page="15"
      class="elevation-1"
      :sort-by="['Role', 'TechSkills']"
      :sort-desc="[false, true]"
      multi-sort
      ><template v-slot:[`body.prepend`]>
        <tr>
          <td>
            <v-select
              v-model="defaultMTFilter"
              @input="handleMTFilter()"
              @click:clear="handleClear()"
              clearable
              :items="itemsbool"
              label="MT"
            ></v-select>
          </td>
          <td>
            <v-select
              v-model="defaultOPSFilter"
              @input="handleOPSFilter()"
              @click:clear="handleClear()"
              clearable
              :items="itemsbool"
              label="OPS"
            ></v-select>
          </td>
          <td>
            <v-text-field
              v-model="filtroOficiona"
              @input="handleOficinaFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Oficina"
            ></v-text-field>
          </td>
          <td></td>
          <td></td>
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
              @input="handleTechSkillsFilter()"
              @click:clear="handleClear()"
              clearable
              :items="itemsTeckSkills"
              type="text"
              label="TechSkills"
            ></v-select>
          </td>
          <td>
            <v-text-field
              v-model="filtro2"
              @input="handleInglesFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Ingles"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro3"
              @input="handleOPSGRADEFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Calificacion OPS"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroEquipo"
              @input="handleEquipoFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Equipo"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroEquipoFuturo"
              @input="handleEquipoFuturoFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Equipo futuro"
            ></v-text-field>
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
              v-model="filtroMain1"
              @input="handleMain1Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Main #1"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroMain2"
              @input="handleMain2Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Main #2"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroSec1"
              @input="handleSec1Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Secondary #1"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroSec2"
              @input="handleSec2Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Secondary #2"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroSec3"
              @input="handleSec3Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Secondary #3"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroTrain"
              @input="handleTrainFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Target Tech Main Training"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtroNextTechSec"
              @input="handleNextTechSecFilter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Next Tech Secondary"
            ></v-text-field>
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
          <td colspan="8"></td>
        </tr>
      </template>
      <template v-slot:[`item.ActivoMT`]="{ item }">
        <v-simple-checkbox v-model="item.ActivoMT" disabled></v-simple-checkbox>
      </template>
      <template v-slot:[`item.DisponibleparaOPS`]="{ item }">
        <v-simple-checkbox
          v-model="item.DisponibleparaOPS"
          disabled
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.Ingles`]="{ item }">
        <v-chip :color="getColor(item.Ingles)" dark>
          {{ item.Ingles }}
        </v-chip>
      </template>
      <template v-slot:[`item.CV`]="{ item }">
        <a :href="item.CV">
          CV
        </a>
      </template>
      <template v-slot:[`item.Correo`]="{ item }">
        <a :href="`mailto:${item.Correo}`">
          {{ item.Correo }}
        </a>
      </template>
    </v-data-table></v-container
  >
</template>

<script>
export default {
  methods: {
    handleAcentos(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },
    handleClear() {
      this.Talento = this.$store.getters.returnAllTalent;
      this.select = null;
    },
    handleMTFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      var flag = "false";
      var trufas = false;
      if (this.defaultMTFilter != null) {
        this.defaultMTFilter = this.defaultMTFilter.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["ActivoMT"] != null) {
            var nombre = usuario["ActivoMT"];
            if (this.defaultMTFilter == "ACTIVO") {
              trufas = true;
            }
            if (this.defaultMTFilter == "INACTIVO") {
              trufas = false;
            }
            var userReady = [];
            if (nombre == trufas || flag == "true") {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.defaultMTFilter.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleOPSFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      var flag = "false";
      var trufas = false;
      if (this.defaultOPSFilter != null) {
        this.defaultOPSFilter = this.defaultOPSFilter.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["DisponibleparaOPS"] != null) {
            var nombre = usuario["DisponibleparaOPS"];
            if (this.defaultOPSFilter == "ACTIVO") {
              trufas = true;
            }
            if (this.defaultOPSFilter == "INACTIVO") {
              trufas = false;
            }
            var userReady = [];
            if (nombre == trufas || flag == "true") {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.defaultOPSFilter.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleFechaFilter() {
      this.menu2 = false;
      var Talento = this.$store.getters.returnAllTalent;
      if (this.fecha != null) {
        var lTalento = Talento.length;
        var usersTable = [];

        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Fecha"] != null) {
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
          this.Movimientos = this.$store.getters.returnAllTalent;
        } else this.Movimientos = usersTable;
      }
    },
    handleOficinaFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroOficiona != null) {
        this.filtroOficiona = this.filtroOficiona.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Oficina"] != null) {
            var Main1 = usuario["Oficina"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.filtroOficiona) ||
              Main1 == this.filtroOficiona
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroOficiona.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleNombreFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      var flag = "false";
      if (this.filtroNombre != null) {
        this.filtroNombre = this.filtroNombre.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Nombre"];
            nombre = this.handleAcentos(nombre.toUpperCase());
            nombre = nombre.replace(/\s/g, "");
            var userReady = [];
            if (nombre.includes(this.filtroNombre) || flag == "true") {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroNombre.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleRoleFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.defaultRoleFilter != null) {
        this.defaultRoleFilter = this.defaultRoleFilter.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var rol = usuario["Role"];
            var arrayRole = rol.split("");
            var userReady = [];
            if (
              arrayRole.includes(this.defaultRoleFilter) ||
              rol.toUpperCase() == this.defaultRoleFilter.toUpperCase()
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }

        if (this.defaultRoleFilter.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleTrainFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroTrain != null) {
        this.filtroTrain = this.filtroTrain.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (
            usuario != null &&
            usuario["Target Tech Main \n(Training)"] != null
          ) {
            var Main1 = usuario["Target Tech Main \n(Training)"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.filtroTrain) ||
              Main1 == this.filtroTrain
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroTrain.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleTechSkillsFilter() {
      var Talento = this.$store.getters.returnAllTalent;
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
          this.Talento = usersTable;
        } else this.Talento = this.$store.getters.returnAllTalent;
      }
    },
    handleInglesFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtro2 != null) {
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var Ingles = usuario["Ingles"];
            var inglesNum = Ingles.substring(Ingles.length - 2, Ingles.length);
            var inglesletra = Ingles.substring(0, 1);
            var inglesletranivel = Ingles.substring(1, 2);
            var inglesterm = inglesletra + inglesletranivel;
            var userReady = [];
            if (
              inglesNum == this.filtro2 ||
              inglesletra == this.filtro2.toUpperCase() ||
              inglesletranivel == this.filtro2.toUpperCase() ||
              inglesterm == this.filtro2.toUpperCase()
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtro2.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleOPSGRADEFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtro3 != null) {
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var Ingles = usuario["Calificacion \nOPS"];
            var inglesNum = Ingles.substring(Ingles.length - 2, Ingles.length);
            var inglesletra = Ingles.substring(0, 1);
            var inglesletranivel = Ingles.substring(1, 2);
            var inglesterm = inglesletra + inglesletranivel;
            var userReady = [];
            if (
              inglesNum == this.filtro3 ||
              inglesletra == this.filtro3.toUpperCase() ||
              inglesletranivel == this.filtro3.toUpperCase() ||
              inglesterm == this.filtro3.toUpperCase()
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtro3.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleEquipoFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      var flag = "false";
      if (this.filtroEquipo != null) {
        this.filtroEquipo = this.filtroEquipo.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Equipo"];
            nombre = this.handleAcentos(nombre.toUpperCase());
            nombre = nombre.replace(/\s/g, "");
            var userReady = [];
            if (nombre.includes(this.filtroEquipo) || flag == "true") {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroEquipo.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleEquipoFuturoFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      var flag = "false";
      if (this.filtroEquipoFuturo != null) {
        this.filtroEquipoFuturo = this.filtroEquipoFuturo.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var nombre = usuario["Equipo \nFuturo"];
            if (nombre != null) {
              if (nombre != "") {
                nombre = this.handleAcentos(nombre.toUpperCase());
                nombre = nombre.replace(/\s/g, "");
                var userReady = [];
                if (
                  nombre.includes(this.filtroEquipoFuturo) ||
                  flag == "true"
                ) {
                  userReady = usuario;
                  usersTable[i] = userReady;
                }
              }
            }
          }
        }
        if (this.filtroEquipoFuturo.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleMain1Filter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroMain1 != null) {
        this.$store.state.defaultMain1Filter = this.filtroMain1.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Main #1"] != null) {
            var Main1 = usuario["Main #1"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.$store.state.defaultMain1Filter) ||
              Main1 == this.$store.state.defaultMain1Filter
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroMain1.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleMain2Filter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroMain2 != null) {
        this.$store.state.defaultMain2Filter = this.filtroMain2.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Main #2"] != null) {
            var Main1 = usuario["Main #2"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.$store.state.defaultMain2Filter) ||
              Main1 == this.$store.state.defaultMain2Filter
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroMain2.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleSec1Filter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroSec1 != null) {
        this.filtroSec1 = this.filtroSec1.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Secondary \n#1"] != null) {
            var Main1 = usuario["Secondary \n#1"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.filtroSec1) ||
              Main1 == this.filtroSec1
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroSec1.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleSec2Filter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroSec2 != null) {
        this.filtroSec2 = this.filtroSec2.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Secondary \n#2"] != null) {
            var Main1 = usuario["Secondary \n#2"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.filtroSec2) ||
              Main1 == this.filtroSec2
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroSec2.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleSec3Filter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroSec3 != null) {
        this.filtroSec3 = this.filtroSec3.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Secondary \n#3"] != null) {
            var Main1 = usuario["Secondary \n#3"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.filtroSec3) ||
              Main1 == this.filtroSec3
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroSec3.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleNextTechSecFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      if (this.filtroNextTechSec != null) {
        this.filtroNextTechSec = this.filtroNextTechSec.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (
            usuario != null &&
            usuario["Next Tech Secondary \n(Training)"] != null
          ) {
            var Main1 = usuario["Next Tech Secondary \n(Training)"];
            Main1 = Main1.toUpperCase();
            var arrayMain1 = Main1.replace(/\s/g, "");
            var userReady = [];
            if (
              arrayMain1.includes(this.filtroNextTechSec) ||
              Main1 == this.filtroNextTechSec
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroNextTechSec.length == 0) {
          this.Talento = this.$store.getters.returnAllTalent;
        } else this.Talento = usersTable;
      }
    },
    handleNotasFilter() {
      var Talento = this.$store.getters.returnAllTalent;
      var flag = "false";
      if (this.filtroNotas != null) {
        this.filtroNotas = this.filtroNotas.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null && usuario["Notas"] != null) {
            var nombre = usuario["Notas"];
            nombre = this.handleAcentos(nombre.toUpperCase());
            nombre = nombre.replace(/\s/g, "");
            var userReady = [];
            if (nombre.includes(this.filtroNotas) || flag == "true") {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtroNotas.length == 0) {
          this.Movimientos = this.$store.getters.returnAllTalent;
        } else this.Movimientos = usersTable;
      }
    },
    getColor(Ingles) {
      var inglesNum = Ingles.substring(Ingles.length - 2, Ingles.length);
      var inglesNumeric = inglesNum.valueOf();
      if (inglesNumeric > 7) return "green";
      if (inglesNumeric > 5) return "orange";
      if (inglesNumeric < 7) return "red";
      else return "gray";
    },
  },
  data() {
    return {
      defaultMTFilter: "",
      defaultOPSFilter: "",
      defaultRoleFilter: "",
      filtroOficiona: "",
      filtroNombre: "",
      filtro: "",
      filtro2: "",
      filtro3: "",
      filtroEquipo: "",
      filtroEquipoFuturo: "",
      fecha: "",
      filtroMain1: "",
      filtroMain2: "",
      filtroSec1: "",
      filtroSec2: "",
      filtroSec3: "",
      filtroTrain: "",
      filtroNextTechSec: "",
      filtroNotas: "",
      select: null,
      menu2: "",
      itemsbool: ["Activo", "Inactivo"],
      itemsRole: ["DEV", "SM", "PO", "UI/UX", "QA", "DS"],
      itemsTeckSkills: ["Sr", "Mid", "Jr"],
      Headers: this.$store.state.headersAdmin,
      Talento: this.$store.getters.returnAllTalent,
    };
  },
};
</script>

<style></style>
