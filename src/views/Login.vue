<template>
  <v-container style="max-width: 350px; position: relative;">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/conexion.svg')"
          class="my-3"
          contain
          height="150"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Gestión de talento
        </h1>

        <p class="subheading font-weight-regular">
          Gestión y consulta de talento interno.
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-form>
          <v-row class="text-center">
            <v-col cols="12">
              <v-text-field
                label="Usuario"
                v-model="user.username"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                outlined
                :type="show3 ? 'text' : 'password'"
                name="input-10-2"
                v-model="user.password"
                label="Contraseña"
                class="input-group--focused"
                @click:append="show3 = !show3"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn v-on:click="handleSubmit" color="primary" elevation="2"
                >Iniciar sesión</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col class="mb-6" cols="12">
        <h5 class="mb-3">
          © MIND. Todos los derechos reservados.
        </h5>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"> Credenciales Invalidas</v-card-title>

        <v-card-text>
          Intenta de nuevo o ponte en contacto con el admin del
          sitio.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Vue from "vue";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
// Init plugin
Vue.use(Loading);
export default {
  name: "Login",
  methods: {
    getUsers: function() {
      const userTable = this.$store.state.Rows[1];

      var i;
      for (i = 0; i < userTable.length; i++) {
        if (
          this.user.username == userTable[i].username &&
          this.user.password == userTable[i].password
        ) {
          var userRole = userTable[i].Role;
          this.$store.state.username = userTable[i].Nombre;
          localStorage.setItem("userRole", userRole);
          switch (userRole) {
            case "0":
              //Admin
              this.$router.push("/dashboard01").catch(() => {});
              break;
            case "1":
              //Ops
              this.$router.push("/dashboard02").catch(() => {});
              break;
            case "2":
              //Reclutamiento y Comercial
              this.$router.push("/dashboard03").catch(() => {});
              break;
            case "3":
              //Recursos humanos
              this.$router.push("/dashboard04").catch(() => {});
              this.$store.state.isGeneral = false;
              break;
          }
          break;
        } else {
          this.dialog = true;
        }
      }
    },
    handleSubmit() {
      this.getUsers();
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      });
    },
  },
  data: () => ({
    fullPage: false,
    dialog: false,
    user: [{ username: "", password: "" }],
    show3: false,
    whatsNext: [
      {
        text: "Sitio Oficial",
        href: "https://www.arkusnexus.com/",
      },
      {
        text: "Blog",
        href: "https://www.arkusnexus.com/blog",
      },
      {
        text: "YouTube",
        href: "https://www.youtube.com/channel/UCh6JGpFXXdfCNtp4ivU65ow",
      },
    ],
  }),
};
</script>
