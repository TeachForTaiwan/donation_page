<template lang="pug">
  #regular-payment
    form#form.form
      label.label(for="amount")
        span.text 每月固定捐款金額*
        .control
          input#amount.input(
            name="amount",
            type="number",
            min="100",
            :class="{ 'is-danger': errors.has('amount') }"
            placeholder="請輸入捐款金額",
            v-model="formData.amount",
            v-validate="'required|min_value:100'",
          )
          span.help.is-danger(v-show="errors.has('amount')") {{ errors.first('amount') }}
      label.label(for="card")
        span.text 信用卡別*
        .control
          select#card.select(
            name="card",
            :class="{ 'is-danger': errors.has('card') }"
            v-model="formData.card"
            v-validate="'required'"
          )
            option(value="", disabled, hidden) 請選擇信用卡別
            option(value="VISA") VISA
            option(value="Master") Master
            option(value="JCB") JCB
          span.help.is-danger(v-show="errors.has('card')") {{ errors.first('card') }}
      label.label(for="card-number")
        span.text 信用卡號*
        .control
          input#card-number.input(
            name="cardNumber",
            type="number",
            :class="{ 'is-danger': errors.has('cardNumber') }"
            placeholder="請輸入卡號",
            v-model="formData.cardNumber",
            v-validate="'required|digits:16'"
          )
          span.help.is-danger(v-show="errors.has('cardNumber')") {{ errors.first('cardNumber') }}
      label.label
        span.text 有效月年*
        .control
          .input-set
            select#expire-m.select(
              name="expireM",
              :class="{ 'is-danger': errors.has('expireM') }"
              v-model="formData.expireM"
              v-validate="'required'"
            )
              option(value="", disabled, hidden) 月
              - for (var x = 1; x <= 12; x++)
                option(value=x) #{x}
            span(style="padding:0 .5em;") /
            select#expire-y.select(
              name="expireY",
              :class="{ 'is-danger': errors.has('expireY') }",
              v-model="formData.expireY",
              v-validate="'required'",
            )
              option(value="", disabled, hidden) 年
              - for (var x = 17; x <= 37; x++)
                option(value='20'+x) 20#{x}
          span.help.is-danger(v-show="errors.has('expireM') || errors.has('expireY')") {{ errors.first('expireM') || errors.first('expireY') }}
      label.label(for="card-check-number")
        span.text 卡片背面末 3 碼*
        .control
          input#card-check-number.input(
            name="cardCheckNumber",
            type="number",
            :class="{ 'is-danger': errors.has('cardCheckNumber') }"
            placeholder="請輸入末 3 碼",
            v-model="formData.cardCheckNumber",
            v-validate="'required|digits:3'"
          )
          span.help.is-danger(v-show="errors.has('cardCheckNumber')") {{ errors.first('cardCheckNumber') }}
      .btn-container
        router-link.btn.btn--grey(to="regular-check") 回上一步
        router-link.btn(to="/") 確認授權
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
  },
  mounted() {
    this.$store.commit('updatePageTitle', '定期定額捐款');
    this.$store.commit('updateProgress', 3);
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === '/') {
      this.validateForm()
        .then(() => {
          this.$store.commit('updateFormData', this.formData);
          sessionStorage.setItem('formData', JSON.stringify(this.formData));
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
            console.log(result);
            // eslint-disable-next-line
            console.log('Form Submitted!');
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
          console.log('okokokok');
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
.form{
  .label{
    .input-set{
      width: 100%;
        align-items: center;
        >.select{
          margin: 0;
        }
    }
  }
}
</style>
