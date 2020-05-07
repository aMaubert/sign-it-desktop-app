import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";

import App from './App.vue'
import icons from './fontawesome-icons';
import {routes} from './routes';

Vue.config.productionTip = false

library.add( icons);

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultIconComponent: FontAwesomeIcon
})


Vue.use(VueRouter);

const router = new VueRouter({
  routes
});


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
