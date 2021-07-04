<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      :search="this.$store.state.search"
      :items-per-page="Talento.length"
      class="elevation-1"
      :sort-by="['Role', 'TechSkills']"
      :sort-desc="[false, true]"
      multi-sort
    >
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
        </a> </template
      ><template v-slot:[`body.prepend`]>
        <tr>
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
              @input="handleMain1Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Main #1"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro4"
              @input="handleMain2Filter()"
              @click:clear="handleClear()"
              clearable
              type="text"
              label="Main #2"
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
      this.Talento = this.$store.getters.returnTalent;
      this.select = null;
    },
    handleRoleFilter() {
      var Talento = this.$store.getters.returnTalent;
      if (this.defaultRoleFilter != null) {
        this.$store.state.defaultRoleFilter = this.defaultRoleFilter.toUpperCase();
        var lTalento = Talento.length;
        var usersTable = [];
        for (var i = 0; i < lTalento; i++) {
          var usuario = Talento[i];
          if (usuario != null) {
            var rol = usuario["Role"];
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

        this.Talento = usersTable;
      }
    },
    handleNombreFilter() {
      var Talento = this.$store.getters.returnTalent;
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
          this.Talento = this.$store.getters.returnTalent;
        } else this.Talento = usersTable;
      }
    },
    handletechSkillsFilter() {
      var Talento = this.$store.getters.returnTalent;
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
        } else this.Talento = this.$store.getters.returnTalent;
      }
    },
    handleInglesFilter() {
      var Talento = this.$store.getters.returnTalent;
      if (this.filtro2 != null) {
        this.$store.state.defaultInglesFilter = this.filtro2;
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
              inglesNum == this.$store.state.defaultInglesFilter ||
              inglesletra ==
                this.$store.state.defaultInglesFilter.toUpperCase() ||
              inglesletranivel ==
                this.$store.state.defaultInglesFilter.toUpperCase() ||
              inglesterm == this.$store.state.defaultInglesFilter.toUpperCase()
            ) {
              userReady = usuario;
              usersTable[i] = userReady;
            }
          }
        }
        if (this.filtro2.length == 0) {
          this.Talento = this.$store.getters.returnTalent;
        } else this.Talento = usersTable;
      }
    },
    handleMain1Filter() {
      var Talento = this.$store.getters.returnTalent;
      if (this.filtro3 != null) {
        this.$store.state.defaultMain1Filter = this.filtro3.toUpperCase();
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
        if (this.filtro3.length == 0) {
          this.Talento = this.$store.getters.returnTalent;
        } else this.Talento = usersTable;
      }
    },
    handleMain2Filter() {
      var Talento = this.$store.getters.returnTalent;
      if (this.filtro4 != null) {
        this.$store.state.defaultMain2Filter = this.filtro4.toUpperCase();
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
        if (this.filtro4.length == 0) {
          this.Talento = this.$store.getters.returnTalent;
        } else this.Talento = usersTable;
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
      defaultRoleFilter: "",
      filtroNombre: "",
      filtro: "",
      filtro2: "",
      filtro3: "",
      filtro4: "",
      select: null,
      itemsRole: ["DEV", "SM", "PO", "UI/UX", "QA", "DS"],
      itemsTeckSkills: ["Sr", "Mid", "Jr"],
      Headers: this.$store.state.headers,
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
