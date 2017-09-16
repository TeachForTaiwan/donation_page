<template lang="pug">
  //- autocomplete off for security
  form#form.form
    label.label(for="name")
      span.text 姓名／單位名稱*
      p.control
        input#name.input(name="name", type="text", placeholder="請輸入姓名／單位名稱", v-model="formData.name", v-validate="'required'", :class="{ 'is-danger': errors.has('name') }")
        span.help.is-danger(v-show="errors.has('name')") {{ errors.first('name') }}
    label.label(for="code", placeholder="請輸入企業代碼")
      span.text 企業代碼
      input#code.input(type="text", v-model="formData.code")
    label.label(for="id-number")
      span.text 身分證字號／統一編號
      input#id-number.input(type="text", placeholder="請輸入身分證字號／統一編號", autocomplete="off", v-model="formData.idNumber")
    label.label(for="gender")
      span.text 性別
      select#gender.select(v-model="formData.gender")
        option(selected, disabled) 請選擇性別
        option(value="0") 男
        option(value="1") 女
        option(value="2") 其他
    label.label(for="birth")
      span.text 出生日期
      input#birth.input(type="date", v-model="formData.birth")
    label.label(for="tel")
      span.text 聯絡電話*
      input#tel.input(type="tel", placeholder="請輸入聯絡電話", autocomplete="off", v-model="formData.tel", v-validate="'required'")
    label.label(for="email")
      span.text 電子信箱*
      p.control
        input#email.input(name="email", type="email", placeholder="請輸入電子信箱", :class="{ 'is-danger': errors.has('email') }", v-model="formData.email", v-validate="'required|email'")
        span.help.is-danger(v-show="errors.has('email')") {{ errors.first('email') }}
    label.label(role="tw-city-selector")
      span.text 通訊地址*
      .input-set
        select#county.select(v-model="formData.county")
          option(selected, disabled) 縣市
        select#district.select(v-model="formData.district")
          option(selected, disabled) 鄉鎮市區
        input#address.input(type="text", placeholder="請輸入地址", v-model="formData.address")
    label.label(for="receipt")
      span.text 收據寄發*
      select#receipt.select(v-model="formData.receipt")
        option(selected, disabled) 請選擇是否需要收據
        option(value="0") 年度收據
        option(value="1") 單次收據
        option(value="2") 不寄收據
    label.label(for="receipt-title")
      span.text 收據抬頭*
      input#receipt-title.input(type="text", placeholder="請輸入收據抬頭", v-model="formData.receiptTitle")
    label.label.label--checkbox(for="receipt-check", :class="{ 'is-checked': receiptCheck }", @click.prevent="handleReceiptCheck")
      .radio-container
        .radio
          input#receipt-check.input(type="checkbox")
      span.text 收據資訊同通訊資訊
    label.label(role="tw-city-selector--receipt")
      span.text 收據地址*
      .input-set
        select#receipt-county.select(v-model="formData.receiptCounty")
          option(selected, disabled) 縣市
        select#receipt-district.select(v-model="formData.receiptDistrict")
          option(selected, disabled) 鄉鎮市區
        input#receipt-address.input(type="text", placeholder="請輸入地址")
    .label-wrap
      span.text 是否願意收到實體文宣，了解TFT的近況與成果？
      .radio-container
        label.label.label--radio(for="campaign-1", :class="{ 'is-checked': formData.campaign === 'true' }")
          .radio
            input#campaign-1.input(name="campaign", type="radio", value="true", v-model="formData.campaign")
          span.text 是
        label.label.label--radio(for="campaign-2", :class="{ 'is-checked': formData.campaign === 'false' }")
          .radio
            input#campaign-2.input(name="campaign", type="radio", value="false", v-model="formData.campaign")
          span.text 否
    .label-wrap
      span.text 是否願意訂閱TFT電子報？
      .radio-container
        label.label.label--radio(for="newsletter-1", :class="{ 'is-checked': formData.newsletter === 'true' }")
          .radio
            input#newsletter-1.input(name="newsletter", type="radio", value="true", v-model="formData.newsletter")
          span.text 是
        label.label.label--radio(for="newsletter-2", :class="{ 'is-checked': formData.newsletter === 'false' }")
          .radio
            input#newsletter-2.input(name="newsletter", type="radio", value="false", v-model="formData.newsletter")
          span.text 否
    .btn-container
      router-link.btn.btn--grey(to="single")
        span(@click="emitFormData") 回上一步
      router-link.btn(to="single-check")
        span(@click="emitFormData") 下一步
</template>

<script>
import TWCitySelector from 'tw-city-selector/tw-city-selector.min';

export default {
  data() {
    return {
      receiptCheck: false,
      formData: this.$parent.formData || {
        name: '',
        code: '',
        idNumber: '',
        gender: '',
        birth: '',
        tel: '',
        email: '',
        county: '',
        district: '',
        address: '',
        receipt: '',
        receiptTitle: '',
        receiptCounty: '',
        receiptDistrict: '',
        receiptAddress: '',
        campaign: '',
        newsletter: '',
        amount: '',
        paymentType: '',
      },
    };
  },
  methods: {
    handleReceiptCheck() {
      this.receiptCheck = !this.receiptCheck;
    },
    emitFormData() {
      this.$emit('emitFormData', this.formData);
    },
  },
  mounted() {
    /* eslint-disable no-new */
    // address
    new TWCitySelector({
      el: '[role="tw-city-selector"]',
      elCounty: '#county',
      elDistrict: '#district',
      // elZipcode: '',
    });
    // receipt address
    new TWCitySelector({
      el: '[role="tw-city-selector--receipt"]',
      elCounty: '#receipt-county',
      elDistrict: '#receipt-district',
    });
  },
};
</script>

<style lang="scss" scoped>
// edit style in sass/module/_form.scss
[role=tw-city-selector] select,
[role=tw-city-selector--receipt] select {
  flex: .4;
  padding: .55rem .5rem;
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
