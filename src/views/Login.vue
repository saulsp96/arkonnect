<template>
  <v-container>
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
          Arkonnect
        </h1>

        <p class="subheading font-weight-regular">
          Consulta y gestion de talento interno
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-form>
          <v-row class="text-center">
            <v-col cols="12">
              <v-text-field
                label="User"
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
                label="Password"
                class="input-group--focused"
                @click:append="show3 = !show3"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn v-on:click="handleSubmit" color="primary" elevation="2"
                >Login</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col class="mb-6" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Arkus Nexus
        </h2>

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
  </v-container>
</template>

<script>
export default {
  name: "Login",
  methods: {
    getUsers: async function() {
      const { GoogleSpreadsheet } = require("google-spreadsheet");

      const credenciales = require("../json/credenciales.json");

      let googleId = "1CGQu-Flh5LyeIj4JMyu6TyYRgj3nUcJxvNBuy0lGyaA";

      const documento = new GoogleSpreadsheet(googleId);
      await documento.useServiceAccountAuth(credenciales);
      await documento.loadInfo();

      const usersSheet = documento.sheetsByIndex[1];
      const userTable = await usersSheet.getRows();
      console.log("Runned: " + userTable.length);
      var i;
      for (i = 0; i < userTable.length; i++) {
        if (
          this.user.username == userTable[i].username &&
          this.user.password == userTable[i].password
        ) {
          console.log("Success!");
          var userRole = userTable[i].Role;
          console.log("Usuario es: " + userTable[i].Puesto);
          console.log("Usuario es: " + userRole);
          switch (userRole) {
            case "0":
              //Admin
              console.log("Antes");
              this.$router.push("/dashboard01").catch(() => {});
              console.log("Despues");
              break;
            case "1":
              //Ops
              this.$router.push("/dashboard02").catch(() => {});
              break;
            case "2":
              //Recursos humanos
              this.$router.push("/dashboard03").catch(() => {});
              break;
          }
          break;
        } else console.log("Invalid credz bro!");
      }
    },
    handleSubmit() {
      var usuarios = this.getUsers();
      console.log("Corrido" + usuarios);
      console.log(this.user.username + " " + this.user.password);
      console.log("Submit");
    },
  },
  data: () => ({
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
        text: "Youtube",
        href: "https://www.youtube.com/channel/UCh6JGpFXXdfCNtp4ivU65ow",
      },
    ],
  }),
};
</script>
