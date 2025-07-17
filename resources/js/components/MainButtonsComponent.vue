<script setup lang="ts">
import RegisterButton from './RegisterButtonComponent.vue';
import LoginButton from './LoginButtonComponent.vue';
import LogoutButton from './LogoutButtonComponent.vue';
import UserModal from './UserModalComponent.vue';

import {token} from '../tokenStore.js';
import {ref} from "vue";

const openUserModal = ref(false)
const modalTitle = ref("Login")

function openModal(title: string) {
    modalTitle.value = title;
    openUserModal.value = true;
}

</script>

<template>
    <register-button @open-modal="openModal('Register')" v-if="!token"></register-button>
    <login-button @open-modal="openModal('Login')" v-if="!token"></login-button>
    <logout-button v-if="token"></logout-button>
    <user-modal v-model:openModal="openUserModal" :title="modalTitle"></user-modal>
</template>

