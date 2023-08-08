import { createApp } from 'vue'
import App from './App'
import {router} from './router'
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App)
app.use(router)
app.mount('#app')
