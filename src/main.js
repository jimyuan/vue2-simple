import 'normalize.css/normalize.css'
import '@/assets/scss/docs.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import svgIcon from '@/components/g-svg-icon'
// import store from './store'

Vue.config.productionTip = false
Vue.component('svg-icon', svgIcon)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
