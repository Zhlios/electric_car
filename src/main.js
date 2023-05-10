import Vue, { createApp } from 'vue';
import { VueI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import zn from '@/lang/zn';
import en from '@/lang/en';

const I18n = new VueI18n({
  legacy: false,
  locale: 'zn',
  messages: {
    zn,
    en,
  },
});

const app = createApp(App);
app.use(I18n).mount('#app');
