import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import ButtonComponent from './components/MainButtonsComponent.vue';

const app = createApp({});
app.component('buttons', ButtonComponent);

app.mount('#app');
