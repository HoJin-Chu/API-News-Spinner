import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { store } from './store/index'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
