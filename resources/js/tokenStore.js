import { ref } from 'vue';

export const token = ref(localStorage.getItem('token'));

export const setToken = (changedToken) => {
    if(changedToken) {
        localStorage.setItem('token', changedToken);
        token.value = changedToken;
    } else {
        localStorage.removeItem('token');
        token.value = null;
    }
}
