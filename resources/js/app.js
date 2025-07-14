import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import ExampleComponent from './components/ExampleComponent.vue';

const app = createApp({});
app.component('example', ExampleComponent);

app.mount('#app');
