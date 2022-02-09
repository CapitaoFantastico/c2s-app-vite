<script setup>
defineProps({
    icone: {
        type: String,
        required: false
    },
    para: {
        type: String,
        required: true
    },
})
</script>
<template>
    <v-list-item :to="para">
        <v-list-item-icon v-if="icone">
            <v-icon>{{ icone }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
            <slot></slot>
        </v-list-item-title>
    </v-list-item>
</template>