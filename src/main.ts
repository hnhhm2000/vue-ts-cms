import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import store from './store'
import registerIcons from './global/register-icons'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 按需引入
// import { ElButton } from 'element-plus'

const app = createApp(App)

app.use(store)
app.use(registerIcons)
// app.use(ElementPlus)
app.use(router)
app.mount('#app')
