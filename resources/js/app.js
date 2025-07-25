import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import ButtonComponent from './components/MainButtonsComponent.vue';
import TasksComponent from './components/TasksComponent.vue';

const app = createApp({});
app.component('buttons', ButtonComponent);
app.component('tasks', TasksComponent);

app.mount('#app');
