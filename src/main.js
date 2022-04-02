import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import { store } from './store/store';

const appStore = createStore(store);

const app = createApp(App);

app.use(router);
app.use(appStore);

app.mount('#app');
