import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faEdit, 
  faTrash, 
  faCheck, 
  faTasks,
  faList,
  faUserCircle,
  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'

import jquery from 'jquery';
global.jquery = jquery;
global.$ = jquery;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

library.add(faPlus, faEdit, faTrash, faCheck, faTasks, faList, faUserCircle, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
