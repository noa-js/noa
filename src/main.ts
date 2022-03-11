import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './locales';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import './styles/index.scss';

createApp(App).use(i18n).use(router).use(store).use(ElementPlus).mount('#app');
