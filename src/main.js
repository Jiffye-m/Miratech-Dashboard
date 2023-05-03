import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import { createPinia } from 'pinia'
import './assets/main.css'

Vue.config.productionTip = false
Vue.use(createPinia())
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
