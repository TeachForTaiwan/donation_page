import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import './sass/main.scss'; // main style
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VeeValidate);

// http://vee-validate.logaretm.com/rules.html#custom-messages
const dict = {
  zh_TW: {
    custom: {
      name: {
        required: '此欄位必填',
      },
      tel: {
        required: '此欄位必填',
      },
      email: {
        required: '此欄位必填',
        email: '請輸入正確的 email 格式',
      },
      address: {
        required: '通訊地址必填',
      },
      receiptTitle: {
        required: '此欄位必填',
      },
      receiptAddress: {
        required: '收據地址必填',
      },
      dateS: {
        required: '此欄位必填',
      },
      dateE: {
        required: '此欄位必填',
      },
      amountSel: {
        required: '請選擇或輸入捐款金額',
      },
      amountInput: {
        required: '請輸入捐款金額',
      },
      method: {
        required: '請選擇付款方式',
      },
    },
  },
};
Validator.updateDictionary(dict);
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
