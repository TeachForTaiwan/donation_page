<template lang="pug">
  #single-payment
    form#form.form
      label.label(for="amount")
        span.text 捐款金額*
        select.select(@change="updateAmount", v-model="formData.amount")
          option(selected, disabled) 請選擇
          option(value="100") 100
          option(value="200") 200
          option(value="500") 500
          option(value="1000") 1000
          option(value="2000") 2000
          option(value="5000") 5000
          option(value="10000") 10000
          option(value="20000") 20000
          option(value="") 其它
        input#amount.input(type="number", min="100", placeholder="或輸入捐款金額", v-model="formData.amount")
      label.label
        span.text 付款方式*
        select#method.select(v-model="formData.paymentType")
          option(selected, disabled) 請選擇付款方式
          option(value="0") 信用卡
          option(value="1") Web-ATM
          option(value="2") 銀行虛擬帳號
          option(value="3") 超商條碼
          option(value="4") 全家 FamiPort
          option(value="5") 萊爾富 Life-ET
          option(value="6") OK 超商 OK-GO
      .btn-container
        router-link.btn.btn--grey(to="single-check") 回上一步
        router-link.btn(to="") 確認付款


</template>
<script>
export default {
  data() {
    return {
      formData: this.$parent.formData || {
        name: '',
        code: '',
        idNumber: '',
        gender: '',
        birth: '',
        tel: '',
        email: '',
        address: '',
        receipt: '',
        receiptTitle: '',
        receiptAddress: '',
        campaign: '',
        newsletter: '',
        amount: '',
        paymentType: '',
      },
    };
  },
  methods: {
    updateAmount(value) {
    },
  },
};
</script>
<style lang="scss" scoped>
// edit style in sass/module/_form.scss
</style>
