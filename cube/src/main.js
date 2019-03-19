import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Cube)
new Vue({
  render: h => h(App),
}).$mount('#app')
