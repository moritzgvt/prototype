import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import router from './router/router';
import store from './store/store';
import VuePrism from 'vue-prism';

import './index.css';
import './assets/prism-themes/theme.css';


Vue.config.productionTip = false;
Vue.use(VuePrism);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
