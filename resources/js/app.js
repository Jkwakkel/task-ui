import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import ButtonComponent from './components/MainButtonsComponent.vue';
import UserModelComponent from './components/UserModalComponent.vue';

const app = createApp({});
app.component('buttons', ButtonComponent);
app.component('user-model', UserModelComponent);

app.mount('#app');
