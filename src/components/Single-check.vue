<template lang="pug">
  #single-check
    em 請確認以下資料填寫無誤。
    ul.list
      li.item
        .key 姓名／單位名稱*
        .value {{ check.name }}
      li.item
        .key 企業代碼
        .value {{ check.code }}
      li.item
        .key 身分證字號／統一編號
        .value {{ check.idNumber }}
      li.item
        .key 性別
        .value {{ check.gender }}
      li.item
        .key 出生日期
        .value {{ check.birth }}
      li.item
        .key 聯絡電話*
        .value {{ check.tel }}
      li.item
        .key 電子信箱*
        .value {{ check.email }}
      li.item
        .key 通訊地址*
        .value {{ check.address }}
      li.item
        .key 收據寄發*
        .value {{ check.receipt }}
      li.item
        .key 收據抬頭*
        .value {{ check.receiptTitle }}
      li.item
        .key 收據地址*
        .value {{ check.receiptAddress }}
</template>

<script>
export default {
  data() {
    return {
      check: {
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


