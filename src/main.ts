
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import tab from './components/tab.vue'
import {createRouter,createWebHistory} from 'vue-router'
import axios from 'axios'
import tabVue from './components/tab.vue'


const routes =[
    {
        path: '/usr/:id',
        component : tab,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

axios.defaults.baseURL = 'db.json';
const app = createApp(App);
app.use(router);
app.mount('#app');