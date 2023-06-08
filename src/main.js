import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import './index.css'
import { Icon } from '@iconify/vue';
import { setDatas } from '../src/shared/storesShared/auth.js';

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
setDatas()

app.component("Icon", Icon)

app.mount('#app')
