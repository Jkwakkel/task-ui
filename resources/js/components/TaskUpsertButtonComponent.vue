<script setup lang="ts">
defineProps({
    taskId: {
        type: [String, Number],
        required: true,
    },
});
</script>

<template>
    <button
        @click="$emit('upsert', taskId)"
        type="button"
        aria-label="Edit task"
        class="text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536M16.5 3.75a2.121 2.121 0 013 3L7 19.25H4v-3L16.5 3.75z"
            />
        </svg>
    </button>
</template>
