import Vue from 'vue';
import Router from 'vue-router';
// components
import Single from '../components/Single.vue'; // 單次捐款
import SingleForm from '../components/Single-form.vue';
import SingleCheck from '../components/Single-check.vue';
import SinglePayment from '../components/Single-payment.vue';
import Regular from '../components/Regular.vue'; // 定期定額
import RegularForm from '../components/Regular-form.vue';
import RegularCheck from '../components/Regular-check.vue';
import RegularPayment from '../components/Regular-payment.vue';
import CreditCheck from '../components/Credit-check.vue'; // 捐款徵信

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: CreditCheck,
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
      path: '/single-payment',
      name: 'SinglePayment',
      component: SinglePayment,
    },
    {
      path: '/regular',
      component: Regular,
    },
    {
      path: '/regular-form',
      component: RegularForm,
    },
    {
      path: '/Regular-check',
      name: 'RegularCheck',
      component: RegularCheck,
    },
    {
      path: '/Regular-payment',
      name: 'RegularPayment',
      component: RegularPayment,
    },
    {
      path: '/credit-check',
      name: 'CreditCheck',
      component: CreditCheck,
    },
    {
      path: '/*',
      redirect: '/',
    },
  ],
});
