<script setup lang="ts">
import Modal from './ModalComponent.vue';
import {DialogTitle} from "@headlessui/vue";
import {ref, watch, onMounted} from "vue";

const props = defineProps<{ openModal: boolean, title: string, task: any }>();
const emit = defineEmits<{
    (event: 'update:openModal', value: boolean): void;
    (event: 'upserted', value: any): void;
}>();

const originalTitle = ref('');
const originalDescription = ref('');

onMounted(() => {
    originalTitle.value = props.task?.title ?? '';
    originalDescription.value = props.task?.description ?? '';
});

watch(() => props.task, (newTask) => {
    originalTitle.value = newTask?.title ?? '';
    originalDescription.value = newTask?.description ?? '';
});



const errorMessage = ref(null);
const errorVisisble = ref(false);

function processForm() {
    const isUpdate = Boolean(props.task?.id);
    const url = isUpdate ? `/tasks/${props.task.id}` : '/tasks';
    const method = isUpdate ? 'put' : 'post';

    window.axios[method](url, {
        title: originalTitle.value,
        description: originalDescription.value,
    }).then((updatedTask) => {
        emit('upserted', updatedTask);
    }).catch(error => {
        errorMessage.value = error.customMessage;
        errorVisisble.value = true;
    });
}
</script>

<template>
    <modal :open-modal="openModal">
        <form @submit.prevent="processForm">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle as="h3" class="text-base font-semibold text-gray-900">
                            {{ title }}
                        </DialogTitle>
                        <div v-show="errorVisisble"
                             class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                             role="alert">
                            <span class="block sm:inline">{{ errorMessage }}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                                  </span>
                        </div>
                        <div class="mt-2">
                            <div class="mb-6">
                                <label for="title"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="title" id="title"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       v-model="originalTitle"
                                       placeholder="" required/>
                            </div>

                            <div class="mb-6">
                                <label for="description"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description"
                                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          v-model="originalDescription"
                                          placeholder="Enter description"
                                          rows="4"
                                          required>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="submit"
                        class="btn-main">{{ title }}
                </button>
                <button ref="cancelButtonRef"
                        class="btn-secondary"
                        type="button" @click="$emit('update:openModal', false);">Cancel
                </button>
            </div>
        </form>
    </modal>
</template>

<style scoped>

</style>
