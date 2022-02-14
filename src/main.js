import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './permission' // permission control
import '@/styles/index.scss'

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
