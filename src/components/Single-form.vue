<template lang="pug">
  form#form.form
    label.label(for="name")
      span.text 姓名／單位名稱*
      input#name.input(type="text", placeholder="請輸入姓名／單位名稱")
    label.label(for="code", placeholder="請輸入企業代碼")
      span.text 企業代碼
      input#code.input(type="text")
    label.label(for="id-number")
      span.text 身分證字號／統一編號
      input#id-number.input(type="text", placeholder="請輸入身分證字號／統一編號")
    label.label(for="gender")
      span.text 性別
      select#gender.select
        option(selected, disabled) 請選擇性別
        option(value="0") 男
        option(value="1") 女
        option(value="2") 其他
    label.label(for="birth")
      span.text 出生日期
      input#birth.input(type="date")
    label.label(for="tel")
      span.text 聯絡電話*
      input#tel.input(type="tel", placeholder="請輸入聯絡電話")
    label.label(for="email")
      span.text 電子信箱*
      input#email.input(type="email", placeholder="請輸入電子信箱")
    label.label
      span.text 通訊地址*
      .input-set
        select#city.select
          option(selected, disabled) 縣市
        select#town.select
          option(selected, disabled) 鄉鎮市區
        input#address.input(type="text", placeholder="請輸入地址")
    label.label(for="receipt")
      span.text 收據寄發*
      select#receipt.select
        option(selected, disabled) 請選擇是否需要收據
        option(value="0") 年度收據
        option(value="1") 單次收據
        option(value="2") 不寄收據
    label.label(for="receipt-title")
      span.text 收據抬頭*
      input#receipt-title.input(type="text", placeholder="請輸入收據抬頭")
    label.label
      span.text 收據地址*
      .input-set
        select#receipt-city.select
          option(selected, disabled) 縣市
        select#receipt-town.select
          option(selected, disabled) 鄉鎮市區
        input#receipt-address.input(type="text", placeholder="請輸入地址")
    label.label.label--radio(for="receipt-check")
      span.text
      input#receipt-check.input(type="checkbox", data-text="收據資訊同通訊資訊")

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  .label {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 10px 0;
    .text {
      min-width: 40%;
      text-align: right;
      padding: .55rem 1rem;
    }
    .input,
    .select {
      flex: 1;
      padding: .55rem .5rem;
    }
    .input-set {
      display: flex;
      flex-wrap: wrap;
      >.select {
        flex: .4;
        margin-right: 15px;
        margin-bottom: 15px;
      }
    }
    &--radio {
      .input {
        position: relative;
        &:after {
          content: attr(data-text);
          position: absolute;
          right: 0;

        }
      }
    }
  }
}
</style>


