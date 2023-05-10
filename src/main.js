import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import zh from '@/lang/zh';
import en from '@/lang/en';

const I18n = new createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    zh,
    en,
  },
});

const app = createApp(App);
app.use(I18n).mount('#app');
