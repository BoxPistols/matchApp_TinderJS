import Vue from 'vue'
import App from './App.vue'

// import head from './components/Header.vue'

import router from './router'
import store from './store'
// import dev from './assets/js/dev'

import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')


Vue.config.productionTip = false

new Vue({
  router,
  store,
  // dev,
  render: h => h(App)
}).$mount('#app')
