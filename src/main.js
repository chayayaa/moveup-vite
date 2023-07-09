import './assets/main.css';
import './style/nav.css';


import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import BootstrapVue from 'bootstrap-vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
// app.use(bootstrap);
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.mount('#app');

