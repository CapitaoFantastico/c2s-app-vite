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
    <v-navigation-drawer v-model="exibir" app floating>
        <MenuItem v-for="item in menu" :para="item.para" :icone="item.icone">{{ item.titulo }}</MenuItem>
        <!-- <v-list nav dense>
            <menu-item></menu-item>
            <v-list-item to="/error">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Error</v-list-item-title>
            </v-list-item>
        </v-list>-->
    </v-navigation-drawer>
</template>