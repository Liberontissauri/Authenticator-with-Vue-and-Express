import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuesax)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
