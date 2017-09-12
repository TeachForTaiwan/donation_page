import Vue from 'vue';
import Router from 'vue-router';
import Single from '../components/Single.vue';
import SingleForm from '../components/Single-form.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Single,
    },
    {
      path: '/single',
      component: Single,
    },
    {
      path: '/single-form',
      name: 'SingleForm',
      component: SingleForm,
    },
    {
      path: '/*',
      redirect: '/single',
    },
  ],
});
