import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import {  faUpload } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add( faUpload);

Vue.config.productionTip = false


Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultIconComponent: FontAwesomeIcon
})

new Vue({
  render: h => h(App),
}).$mount('#app')
