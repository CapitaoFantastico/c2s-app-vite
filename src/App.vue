<template>
  <v-app>
    <v-app-bar absolute>
      <v-app-bar-nav-icon @click="exibir = !exibir"></v-app-bar-nav-icon>

      <v-toolbar-title>C2S Web</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="exibir" app>
      Menu Navegação</v-navigation-drawer
    >
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
const exibir = ref(false);
</script>
<style scoped>
.v-btn--icon {
  background-color: rgb(50, 63, 143);
}

.v-app-bar {
  background-color: rgb(50, 63, 143) !important;
}
</style>
