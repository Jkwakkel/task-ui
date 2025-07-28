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
        @click="$emit('delete', taskId)"
        type="button"
        aria-label="Delete task"
        class="text-red-600 hover:text-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>

</template>
