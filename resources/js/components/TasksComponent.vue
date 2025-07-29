<script setup lang="ts">
import Task from './TaskComponent.vue';
import TaskModal from './TaskModalComponent.vue';
import {token} from '../tokenStore.js';
import {watch, ref} from "vue";

const tasksData = ref(null);
const currentTask = ref(null);


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

const onUpsert = (task) => {
    const taskId = task.data.id;
    const taskExist = tasksData.value.find(t => t.id === taskId);

    if(typeof taskExist !== 'undefined') {
        taskExist.title = task.data.title;
        taskExist.description = task.data.description;
    } else {
        tasksData.value.push({ id: taskId, title: task.data.title, description: task.data.description });
    }

    openTaskModal.value = false;
}


const openTaskModal = ref(false)
function openModal(task: any) {
    currentTask.value = task;
    openTaskModal.value = true;
}
</script>

<template>
    <div v-if="!token">
        Please register or login to view and create tasks.
    </div>
    <div v-else>
        <task-modal v-model:openModal="openTaskModal" :task="currentTask" title="Update" @upserted="onUpsert"></task-modal>
        <div v-for="task in tasksData" :key="task.id">
            <task :task="task" @deleted="onDeleted" @edited="openModal(task)"></task>
        </div>
    </div>
</template>

