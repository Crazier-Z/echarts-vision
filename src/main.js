import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入字体的文件
import './assets/font/iconfont.css'
// 引入全局的样式文件
import './assets/css/global.less'
import axios from 'axios'
import SocketService from './utils/socket_service'
// 对服务端进行websocket的连接
SocketService.Instance.connect()
// 方便其他组件通过 this.$socket 获取SocketService实列对象
Vue.prototype.$socket = SocketService.Instance
// 请求基准路径的配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api'
// 将axios挂载到Vue的原型对象上
// 在别的组件中 通过this.$http得到axios对象
Vue.prototype.$http = axios

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echarts
Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
