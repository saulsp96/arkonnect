<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">ARKONECT</v-list-item-title>
          <v-list-item-subtitle>
            Talento Interno
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "SideMenu",
  methods: {},
  data: () => ({
    drawer: null,
    group: null,
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard-variant-outline",
        to: "/dashboard02",
      },
      {
        title: "Solicitud de perfil",
        icon: "mdi-account-arrow-left-outline",
        to: "/about",
      },
      { title: "Login", icon: "mdi-logout", to: "/" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
