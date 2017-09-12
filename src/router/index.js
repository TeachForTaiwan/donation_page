import Vue from 'vue';
import Router from 'vue-router';
import Single from '../components/Single.vue';
import SingleForm from '../components/Single-form.vue';
import SingleCheck from '../components/Single-check.vue';

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
      path: '/single-check',
      name: 'SingleCheck',
      component: SingleCheck,
    },
    {
      path: '/*',
      redirect: '/single',
    },
  ],
});
