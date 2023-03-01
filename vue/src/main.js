import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import kyClient from "./ky-client.js";

const roles = kyClient('roles').json();

console.log(roles);

createApp(App).mount('#app')
