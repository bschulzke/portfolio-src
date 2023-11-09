import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App).use(router).mount("#app");

//use it 
App.use(Toast)
