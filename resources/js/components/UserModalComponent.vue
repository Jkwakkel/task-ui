<script setup lang="ts">
import {DialogTitle} from "@headlessui/vue";
import Modal from './ModalComponent.vue';
import {setToken} from '../tokenStore.js';
import {ref} from "vue";

const props = defineProps<{ openModal: boolean, title: string }>();
const emit = defineEmits<{ (event: 'update:openModal', value: boolean): void; }>();

const emailInput = ref(null);
const passwordInput = ref(null);
const nameInput = ref(null);

const errorMessage = ref(null);
const errorVisisble = ref(false);

function processForm() {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (props.title.toLowerCase() === 'login') {
        login(email, password);
    } else if (props.title.toLowerCase() === 'register') {
        register(name, email, password);
    }
}

function login(email: string, password: string) {
    window.axios.post('/login', {
        email: email,
        password: password
    }).then(response => {
        setToken(response.data.token);
        emit('update:openModal', false);
    }).catch(error => {
        errorMessage.value = error.customMessage;
        errorVisisble.value = true;
    });
}

function register(name: string, email: string, password: string) {
    window.axios.post('/register', {
        name: name,
        email: email,
        password: password
    }).then(() => {
        login(email, password);
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
                            <div v-if="title == 'Register'" class="mb-6">
                                <label for="name"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" id="name"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       v-model="nameInput"
                                       placeholder="john doe" required/>
                            </div>
                            <div class="mb-6">
                                <label for="email"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                    address</label>
                                <input type="email" id="email"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       v-model="emailInput"
                                       placeholder="john.doe@company.com" required/>
                            </div>
                            <div class="mb-6">
                                <label for="password"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password"
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       v-model="passwordInput"
                                       placeholder="•••••••••" required/>
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
