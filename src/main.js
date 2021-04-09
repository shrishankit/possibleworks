import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import

import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately

import vuetify from './plugins/vuetify';

Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists 

// // Import Framework7 Core
// // import Framework7 from 'framework7/framework7-lite.js';
// /*
// Or import bundle with all components:*/
// import Framework7 from 'framework7/framework7-lite.esm.bundle.js';


// // Import Framework7 Vue
// import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// // Init plugin
// Framework7.use(Framework7Vue)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  vuetify,
  render: h => h(App)
}).$mount('#app')
