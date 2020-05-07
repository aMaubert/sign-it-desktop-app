import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'

Vue.config.productionTip = false


Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
