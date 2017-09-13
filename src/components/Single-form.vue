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
    label.label.label--checkbox(for="receipt-check", :class="{ 'is-checked': receiptCheck }", @click.prevent="toggleCheckbox")
      .radio
        input#receipt-check.input(type="checkbox", data-vue="receiptCheck")
      span.text 收據資訊同通訊資訊
    .label-wrap
      span.text 是否願意收到實體文宣，了解TFT的近況與成果？
      .radio-container
        label.label.label--radio(for="campaign-1", :class="{ 'is-checked': campaign[1] }")
          .radio
            input#campaign-1.input(name="campaign", type="radio", data-vue="1", value="y", @change="toggleRadio")
          span.text 是
        label.label.label--radio(for="campaign-2", :class="{ 'is-checked': campaign[2] }")
          .radio
            input#campaign-2.input(name="campaign", type="radio", data-vue="2", value="n", @change="toggleRadio")
          span.text 否
    .label-wrap
      span.text 是否願意訂閱TFT電子報？
      .radio-container
        label.label.label--radio(for="newsletter-1", :class="{ 'is-checked': newsletter[1] }")
          .radio
            input#newsletter-1.input(name="newsletter", type="radio", data-vue="1", value="y", @change="toggleRadio")
          span.text 是
        label.label.label--radio(for="newsletter-2", :class="{ 'is-checked': newsletter[2] }")
          .radio
            input#newsletter-2.input(name="newsletter", type="radio", data-vue="2", value="n", @change="toggleRadio")
          span.text 否
    .btn-container
      router-link.btn.btn--grey(to="single") 回上一步
      router-link.btn(to="single-check") 下一步
</template>

<script>
export default {
  data() {
    return {
      receiptCheck: false,
      campaign: {
        1: true,
        2: false,
      },
      newsletter: {
        1: true,
        2: false,
      },
    };
  },
  methods: {
    toggleCheckbox(e) {
      const targetData = e.currentTarget.querySelector('.input[type="checkbox"]').dataset.vue;
      this[targetData] = !this[targetData];
    },
    toggleRadio(e) {
      const targetData = e.target.name;
      const targetOrder = e.target.dataset.vue;
      for (let key in this[targetData]) {
        this[targetData][key] = false;
      }
      this[targetData][targetOrder] = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// edit style in sass/module/_form.scss
</style>
