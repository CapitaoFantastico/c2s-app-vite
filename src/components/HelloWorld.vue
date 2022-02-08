<template>
  <v-container>
    <v-alert type="success">{{ counter }}</v-alert>
  </v-container>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
  console.log(counter.value);
}, 5000);
</script>
