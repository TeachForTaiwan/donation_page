import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import validatorDict from './validate';
// custom js
import './js/header';
// custom style
import './sass/main.scss';

Vue.use(VeeValidate);
Vue.use(VueAxios, axios);

Validator.updateDictionary(validatorDict);
Validator.setLocale('zh_TW');

/* eslint-disable no-new */
const app = new Vue({
  el: 'app',
  router,
  store,
  render: h => h(App),
});

export default app;

window.store = store;
