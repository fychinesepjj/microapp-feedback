import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'
import Antd from 'ant-design-vue';

const app = createApp(App);
app.use(router)
app.use(Antd)

microApp.start({
  inline: true,
  "keep-alive": true,
  "keep-router-state": false,
  'router-mode': 'native-scope',
  iframe: true
})

window.$microApp = microApp

app.mount('#app')


