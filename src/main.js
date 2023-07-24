import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
// import { required, email } from '@vee-validate/rules';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style/all.css';

// 定義驗證規則
// defineRule('required', required);
// defineRule('email', email);
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
// 全域註冊VeeValidate元件
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');

