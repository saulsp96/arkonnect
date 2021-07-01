<template>
  <v-container>
    <v-data-table
      :headers="Headers"
      :items="Talento"
      item-key="name"
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
        </a>
      </template>
      <template v-slot:[`body.prepend`]>
        <tr>
          <td>
            <v-text-field
              max-width="8"
              v-model="defaultRoleFilter"
              @input="handleRoleFilter()"
              type="text"
              label="Role"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro"
              @input="handletechSkillsFilter()"
              type="text"
              label="TechSkills"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro2"
              @input="handleInglesFilter()"
              type="text"
              label="Ingles"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro3"
              @input="handleMain1Filter()"
              type="text"
              label="Main #1"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="filtro4"
              @input="handleMain2Filter()"
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
    handleRoleFilter() {
      var Talento = this.$store.getters.returnTalent;
      this.$store.state.defaultRoleFilter = this.defaultRoleFilter;
      var lTalento = Talento.length;
      var usersTable = [];
      for (var i = 0; i < lTalento; i++) {
        var usuario = Talento[i];
        if (usuario != null) {
          var rol = usuario["Role"];
          var userReady = [];
          if (rol == this.$store.state.defaultRoleFilter) {
            userReady = usuario;
            console.log(usuario);
            usersTable[i] = userReady;
          }
        }
      }
      if (usersTable.length > 0) {
        this.Talento = usersTable;
      } else this.Talento = this.$store.getters.returnTalent;
    },
    handletechSkillsFilter() {
      var Talento = this.$store.getters.returnTalent;
      this.$store.state.defaultRoleFilter = this.filtro;
      var lTalento = Talento.length;
      var usersTable = [];
      for (var i = 0; i < lTalento; i++) {
        var usuario = Talento[i];
        if (usuario != null) {
          var rol = usuario["TechSkills"];
          var userReady = [];
          if (rol == this.$store.state.defaultRoleFilter) {
            userReady = usuario;
            usersTable[i] = userReady;
          }
        }
      }
      if (usersTable.length > 0) {
        this.Talento = usersTable;
      } else this.Talento = this.$store.getters.returnTalent;
    },
    handleInglesFilter() {
      var Talento = this.$store.getters.returnTalent;
      this.$store.state.defaultRoleFilter = this.filtro2;
      var lTalento = Talento.length;
      var usersTable = [];
      for (var i = 0; i < lTalento; i++) {
        var usuario = Talento[i];
        if (usuario != null) {
          var rol = usuario["Ingles"];
          var userReady = [];
          if (rol == this.$store.state.defaultRoleFilter) {
            userReady = usuario;
            usersTable[i] = userReady;
          }
        }
      }
      if (usersTable.length > 0) {
        this.Talento = usersTable;
      } else this.Talento = this.$store.getters.returnTalent;
    },
    handleMain1Filter() {
      var Talento = this.$store.getters.returnTalent;
      this.$store.state.defaultRoleFilter = this.filtro3;
      var lTalento = Talento.length;
      var usersTable = [];
      for (var i = 0; i < lTalento; i++) {
        var usuario = Talento[i];
        if (usuario != null) {
          var rol = usuario["Main #1"];
          var userReady = [];
          if (rol == this.$store.state.defaultRoleFilter) {
            userReady = usuario;
            usersTable[i] = userReady;
          }
        }
      }
      if (usersTable.length > 0) {
        this.Talento = usersTable;
      } else this.Talento = this.$store.getters.returnTalent;
    },
    handleMain2Filter() {
      var Talento = this.$store.getters.returnTalent;
      this.$store.state.defaultRoleFilter = this.filtro4;
      var lTalento = Talento.length;
      var usersTable = [];
      for (var i = 0; i < lTalento; i++) {
        var usuario = Talento[i];
        if (usuario != null) {
          var rol = usuario["Main #2"];
          var userReady = [];
          if (rol == this.$store.state.defaultRoleFilter) {
            userReady = usuario;
            usersTable[i] = userReady;
          }
        }
      }
      if (usersTable.length > 0) {
        this.Talento = usersTable;
      } else this.Talento = this.$store.getters.returnTalent;
    },
    getColor(Ingles) {
      if (Ingles < 5) return "red";
      else if (Ingles < 8) return "orange";
      else return "green";
    },
  },
  data() {
    return {
      defaultRoleFilter: "",
      filtro: "",
      filtro2: "",
      filtro3: "",
      filtro4: "",
      Headers: this.$store.state.headersRC,
      Talento: this.$store.getters.returnTalent,
    };
  },
};
</script>

<style></style>
