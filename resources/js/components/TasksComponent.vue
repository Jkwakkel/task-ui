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

const onDeleted = (taskId) => {
    window.axios.delete('/tasks/' + taskId)
    .then(() => {
        tasksData.value = tasksData.value.filter(task => String(task.id) !== String(taskId));
    }).catch(error => {
         console.log(error.customMessage);
    });
};
</script>

<template>
    <div v-if="!token">
        Please register or login to view and create tasks.
    </div>
    <div v-else>
        <div v-for="task in tasksData" :key="task.id">
            <task :task="task" @deleted="onDeleted"></task>
        </div>
    </div>
</template>

