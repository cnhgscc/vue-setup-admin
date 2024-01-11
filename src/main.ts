import './assets/main.css'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus, {locale: zhCn})

app.mount('#app')
