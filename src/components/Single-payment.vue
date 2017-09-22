<template lang="pug">
  #single-payment
    form#form.form
      label.label(for="amount-sel")
        span.text 捐款金額*
        p.control
          select#amount-sel.select(
            name="amountSel",
            :class="{ 'is-danger': errors.has('amountSel') }"
            v-model="formData.amount",
            v-validate="rules"
            )
            option(value="", disabled, hidden) 請選擇
            option(value="100") 100
            option(value="200") 200
            option(value="500") 500
            option(value="1000") 1000
            option(value="2000") 2000
            option(value="5000") 5000
            option(value="10000") 10000
            option(value="20000") 20000
            option(value="other") 其它
          input#amount-input.input(
            name="amountInput",
            type="number",
            min="100",
            @change="updateAmount",
            :class="{ 'is-danger': errors.has('amountInput') }"
            placeholder="請輸入捐款金額",
            v-show="amountInput",
            v-validate="rulesInput"
            )
          span.help.is-danger(v-show="errors.has('amountSel')") {{ errors.first('amountSel') }}
          span.help.is-danger(v-show="errors.has('amountInput')") {{ errors.first('amountInput') }}
      label.label
        span.text 付款方式*
        p.control
          select#method.select(
            name="method",
            :class="{ 'is-danger': errors.has('method') }"
            v-model="formData.paymentType"
            v-validate="'required'"
            )
            option(value="", disabled, hidden) 請選擇付款方式
            option(value="0") 信用卡
            option(value="1") Web-ATM
            option(value="2") 銀行虛擬帳號
            option(value="3") 超商條碼
            option(value="4") 全家 FamiPort
            option(value="5") 萊爾富 Life-ET
            option(value="6") OK 超商 OK-GO
          span.help.is-danger(v-show="errors.has('method')") {{ errors.first('method') }}
      .btn-container
        router-link.btn.btn--grey(to="single-check") 回上一步
        //- router-link.btn(to="/") 確認付款
        .btn(@click="handleSubmit") 確認付款
</template>
<script>
import swal from 'sweetalert2';

export default {
  data() {
    return {
    };
  },
  computed: {
    formData: {
      get() {
        return this.$store.state.formData;
      },
    },
    amountInput() {
      const amountSelects = ['100', '200', '500', '1000', '2000', '5000', '10000', '20000'];
      return amountSelects.includes(this.formData.amount) ? '' : true;
    },
    rules() {
      return !this.formData.amount.length ? 'required' : false;
    },
    rulesInput() {
      return this.formData.amount === 'other' ? 'required' : false;
    },
  },
  mounted() {
    this.$store.commit('updatePageTitle', '單次捐款');
    this.$store.commit('updateProgress', 3);
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === '/') {
      this.validateForm()
        .then(() => {
          // this.$store.commit('updateFormData', this.formData);
          // sessionStorage.setItem('formData', JSON.stringify(this.formData));
          next();
        })
        .catch((errMsg) => {
          // auto scroll to error field
          const errorFirst = this.$el.querySelector('input.is-danger, select.is-danger');
          if (errorFirst) {
            errorFirst.scrollIntoView({ behavior: 'instant' });
            errorFirst.focus();
          }
          console.error(errMsg);
          swal(
            '請檢查填寫的資料',
            '您填寫的資料可能有誤，請確認有無漏填',
            'warning',
          );
        });
    } else {
      next();
    }
  },
  methods: {
    updateAmount(e) {
      this.formData.amount = e.target.value;
    },
    validateForm() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            console.log('validateForm success');
            resolve(result);
            return;
          }
          const errorMsg = 'validateForm: 請檢查表單資料';
          reject(errorMsg);
        });
      });
    },
    handleSubmit() {
      console.log('str');
      this.validateForm()
        .then(() => {
          console.log('starting POST formData...');
          // POST 送出表單
          this.axios.post('http://localhost:3000/posts', this.formData)
            .then((response) => {
              console.log(response.data);
              swal(
                '成功送出',
                '資料成功送出！',
                'success',
              );
              sessionStorage.clear(); // 清空 session
              this.$router.push('/'); // 回到首頁
            })
            .catch((err) => {
              console.error(err);
              swal(
                '送出失敗',
                '資料送出失敗，請稍後再試，或洽詢網站管理員',
                'error',
              );
            });
        })
        .catch((errorMsg) => {
          console.error(errorMsg);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import url(../../node_modules/sweetalert2/dist/sweetalert2.min.css);
// edit style in sass/module/_form.scss
</style>
