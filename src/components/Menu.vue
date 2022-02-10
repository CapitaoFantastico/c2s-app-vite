<script setup>
import MenuItem from './MenuItem.vue'
const props = defineProps({
    menu: {
        type: Array,
        required: true
    },
    exibir: {
        type: Boolean,
        required: true
    }
})
</script>
<template>
    <v-navigation-drawer v-model="exibir" app>
        <MenuItem v-for="item in menu" :para="item.para" :icone="item.icone">{{ item.titulo }}</MenuItem>
    </v-navigation-drawer>
</template>