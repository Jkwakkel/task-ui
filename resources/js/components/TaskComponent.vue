<script setup lang="ts">
import DeleteButton from './TaskDeleteButtonComponent.vue';

const prop = defineProps(['task'])
const task = prop.task;

const emit = defineEmits(['deleted']);

const onDelete = (taskId) => {
    emit('deleted', taskId);
};

</script>

<template>
    <div class="flex items-start justify-between p-4 mb-4 border rounded shadow-sm bg-white">
        <div class="flex flex-col space-y-1 max-w-[80%]">
      <span class="font-bold text-lg text-gray-900 truncate">
        {{ task.title }}
      </span>
            <span class="text-gray-700 whitespace-pre-wrap break-words">
        {{ task.description }}
      </span>
        </div>

        <div class="ml-4 flex-shrink-0">
            <!-- Placeholder for your delete button component -->
            <delete-button :taskId="task.id" @delete="onDelete"/>
        </div>
    </div>

</template>
