import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';

let app = null
// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  app = createApp(App)
  app.use(router)
  app.use(Antd)
  app.mount('#app')
  console.warn('mount app')
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
window.unmount = () => {
  router.options.history.destroy()
  app.unmount()
  app = null
  console.warn('unmount app')
}

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
