<template>
  <v-app>
    <v-container fluid pa-0>
      <v-layout row wrap>
        <v-flex xs3>
          <Nav></Nav>
        </v-flex>

        <v-flex xs7 ma-0 ml-3>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    Nav
  }
};
</script>
