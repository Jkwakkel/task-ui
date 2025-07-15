<script setup lang="ts">
import RegisterButton from './RegisterButtonComponent.vue';
import LoginButton from './LoginButtonComponent.vue';
import LogoutButton from './LogoutButtonComponent.vue';

import {token} from '../tokenStore.js';
</script>

<template>
    <register-button v-if="!token"></register-button>
    <login-button v-if="!token"></login-button>
    <logout-button v-if="token"></logout-button>
</template>

