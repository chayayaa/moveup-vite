<script setup>
import { ref, onMounted } from 'vue'

import Nav from '../components/NavComponent.vue'

onMounted(() => {
console.log('home');
})
</script>

<template>
    <Nav />
</template>
