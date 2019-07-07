import Vue from 'vue'
import App from './App.vue'

// import head from './components/Header.vue'

import router from './router'
import store from './store'
// import dev from './assets/js/dev'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // dev,
  render: h => h(App)
}).$mount('#app')
