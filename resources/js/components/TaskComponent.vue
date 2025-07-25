<script setup lang="ts">
const prop = defineProps(['task'])
const task = prop.task;
</script>

<template>
    <span class="font-bold">{{task.title}}</span> <span>{{ task.description }}</span>
</template>
