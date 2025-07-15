<script setup lang="ts">
import RegisterButton from './RegisterButtonComponent.vue';
import LoginButton from './LoginButtonComponent.vue';
import LogoutButton from './LogoutButtonComponent.vue';

import { computed } from 'vue';

const hasToken = computed(() => !!localStorage.getItem('token'));
</script>

<template>
    <register-button v-if="!hasToken"></register-button>
    <login-button v-if="!hasToken"></login-button>
    <logout-button v-if="hasToken"></logout-button>
</template>

