<template>
  <v-app>
    <v-app-bar absolute>
      <v-app-bar-nav-icon @click="exibir = !exibir"></v-app-bar-nav-icon>

      <v-toolbar-title>C2S Web</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="exibir" app floating>
      <v-list nav dense>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/error">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Error</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
const exibir = ref(true);
</script>
<style scoped>
.v-btn--icon {
  background-color: rgb(50, 63, 143);
}

.v-app-bar {
  background-color: rgb(50, 63, 143) !important;
}
</style>
