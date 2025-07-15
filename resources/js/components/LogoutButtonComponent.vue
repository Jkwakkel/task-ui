<script setup lang="ts">

import { setToken } from '../tokenStore.js';

const handleLogout = () => {
    setToken(null);
};
</script>

<template>
    <button @click="handleLogout" class="btn-main">Logout</button>
</template>

<style scoped>

</style>
