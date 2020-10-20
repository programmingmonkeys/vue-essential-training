import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'

import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'

import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faDollarSign)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
