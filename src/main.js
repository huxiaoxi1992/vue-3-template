import { createApp } from 'vue';
import ElementPlus from 'element-plus/es';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
