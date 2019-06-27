<template>
  <v-app>
    <v-container fluid pa-0 class="container">
      <v-layout row wrap>
        <!-- Nav Bar -->
        <v-flex xs3>
          <Nav></Nav>
        </v-flex>

        <!-- Sub Pages -->
        <v-flex pl-3>
          <transition
            name="router-anim"
            enter-active-class="animated slideInRight fast"
          >
            <router-view class="subpages"/>
          </transition>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
@import "@/assets/main.scss";
</style>

