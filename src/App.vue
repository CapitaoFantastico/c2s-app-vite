<template>
  <v-app>
    <v-navigation-drawer app> Naviagation Drawer</v-navigation-drawer>
    <v-app-bar app> App bar</v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
