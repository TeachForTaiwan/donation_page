<template lang="pug">
  #single-check
    em.warn 請確認以下資料填寫無誤。
    ul.list
      li.item
        .key 姓名／單位名稱*
        .value {{ formData.name }}
      li.item
        .key 企業代碼
        .value {{ formData.code }}
      li.item
        .key 身分證字號／統一編號
        .value {{ formData.idNumber }}
      li.item
        .key 性別
        .value {{ formData.gender }}
      li.item
        .key 出生日期
        .value {{ formData.birth }}
      li.item
        .key 聯絡電話*
        .value {{ formData.tel }}
      li.item
        .key 電子信箱*
        .value {{ formData.email }}
      li.item
        .key 通訊地址*
        .value {{ formData.address }}
      li.item
        .key 收據寄發*
        .value {{ formData.receipt }}
      li.item
        .key 收據抬頭*
        .value {{ formData.receiptTitle }}
      li.item
        .key 收據地址*
        .value {{ formData.receiptAddress }}
    .btn-container
      router-link.btn.btn--grey(to="single-form") 回上一步
      router-link.btn(to="single-payment") 確認無誤
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
};
</script>

<style lang="scss" scoped>
@import '../sass/variable';
#single-check {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto 80px;
}

.warn {
  color: $c-primary;
  margin: 2em auto;
}

.list {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .item {
    display: flex;
    align-items: flex-start;
    .key {
      min-width: 45%;
      text-align: right;
      padding: .55rem 2rem;
    }
    .value {
      flex: 1;
      padding: .55rem 2rem;
      padding-left: .5rem;
    }
  }
}

.btn-container {
  color: $c-white;
  display: flex;
  justify-content: center;
  .btn {
    margin: 20px;
  }
}
</style>


