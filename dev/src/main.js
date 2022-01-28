import { createApp } from 'vue'
import App from './App.vue'
import '@/service-worker/register'
createApp(App).mount('#app')
