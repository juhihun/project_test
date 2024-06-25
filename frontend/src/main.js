import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import mixins from "./mixins";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App)
.use(mixins)
.use(router)
.mount('#app');