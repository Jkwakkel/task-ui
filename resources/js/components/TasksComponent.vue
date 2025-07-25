<script setup lang="ts">
import Task from './TaskComponent.vue';
import {token} from '../tokenStore.js';
import {watch, ref} from "vue";

const tasksData = ref(null);

const fetchTasks = () => {
    if (!token.value) {
        tasksData.value = null;
        return;
    }

    window.axios.get('/tasks', {})
        .then(response => {
            tasksData.value = response.data;
        })
};

watch(token, () => {
    fetchTasks();
}, {immediate: true});

</script>

<template>
    <div v-if="!token">
        Please register or login to view and create tasks.
    </div>
    <div v-else>
        <div v-for="task in tasksData">
            <task :task="task"></task>
        </div>
    </div>
</template>

