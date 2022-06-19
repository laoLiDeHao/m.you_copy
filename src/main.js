import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
(function (){
    function change(){
        // 375为开发界面尺寸
        document.documentElement.style.fontSize = document.documentElement.clientWidth*10/375 + 'px'
    }
    change()
    window.addEventListener('resize',change)
})()
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

