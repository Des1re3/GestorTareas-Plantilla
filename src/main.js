import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importa Bootstrap CSS y los íconos de Bootstrap aquí

Vue.config.productionTip = false

import 'bootstrap/dist/js/bootstrap'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
