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
      email: {
        required: '此欄位必填',
        email: '請輸入正確的 email 格式',
      },
      name: {
        required: '此欄位必填',
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
