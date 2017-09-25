import Vue from 'vue';
import VueHead from 'vue-head';
import Materials from 'vue-materials';
import VModal from 'vue-js-modal';
import App from './Index.vue';
// custom js
import './js/header';
// custom style
import './sass/main.scss';

Vue.use(VueHead);
Vue.use(Materials);
Vue.use(VModal);

const app = new Vue({
  el: 'app',
  render: h => h(App),
});

export default app;
