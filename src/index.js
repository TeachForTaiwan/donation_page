import Vue from 'vue';
import VueHead from 'vue-head';
import Materials from 'vue-materials';
import VModal from 'vue-js-modal';
import App from './Index.vue';
import router from './router/index';
import store from './store';
// custom js
import './js/header';
// custom style
import './sass/main.scss';

Vue.use(VueHead);
Vue.use(Materials);
Vue.use(VModal);

const app = new Vue({
  el: 'app',
  router,
  store,
  render: h => h(App),
});

export default app;
