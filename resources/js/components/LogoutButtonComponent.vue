<script setup lang="ts">
const handleLogout = () => {
    console.log('logout');
};
</script>

<template>
    <button @click="handleLogout" class="btn-main">Logout</button>
</template>

<style scoped>

</style>
