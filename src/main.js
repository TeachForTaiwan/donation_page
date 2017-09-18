import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import App from './App.vue';
import router from './router';

Vue.use(VeeValidate);

const css = require('./sass/main.scss');

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
    },
  },
};
Validator.updateDictionary(dict);
Validator.setLocale('zh_TW');

/* eslint-disable no-new */
new Vue({
  el: 'app',
  router,
  components: { App },
});
