import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTypedJs from 'vue-typed-js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import CoreuiVue from '@coreui/vue';
import ToggleButton from 'vue-js-toggle-button'
 



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTypedJs)
Vue.use(VueAxios, axios)
Vue.use(CoreuiVue);
Vue.use(ToggleButton);





Vue.config.productionTip = false
new Vue({
  router,

  store :store,
  render: h => h(App)
  
}).$mount('#app')
