<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/conexion.svg')"
          class="my-3"
          contain
          height="200"
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
  name: "HelloWorld",

  data: () => ({
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
