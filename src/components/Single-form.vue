<template lang="pug">
  //- autocomplete off for security
  form#form.form
    label.label(for="name")
      span.text 姓名／單位名稱*
      .control
        input#name.input(
          name="name",
          type="text",
          :class="{ 'is-danger': errors.has('name') }"
          placeholder="請輸入姓名／單位名稱",
          v-model="formData.name",
          v-validate="'required'",
        )
        span.help.is-danger(v-show="errors.has('name')") {{ errors.first('name') }}
    label.label(for="code", placeholder="請輸入企業代碼")
      span.text 企業代碼
      .control
        input#code.input(
          name="code",
          type="text",
          :class="{ 'is-danger': errors.has('code') }"
          placeholder="請輸入企業代碼"
          v-model="formData.code",
          v-validate="'max:20'",
        )
        span.help.is-danger(v-show="errors.has('code')") {{ errors.first('code') }}
    label.label(for="id-number")
      span.text 身分證字號／統一編號
      .control
        input#id-number.input(
          name="idNumber",
          type="text",
          :class="{ 'is-danger': errors.has('idNumber') }"
          autocomplete="off",
          placeholder="請輸入身分證字號／統一編號",
          v-model="formData.idNumber",
          v-validate="'max:10'",
        )
        span.help.is-danger(v-show="errors.has('idNumber')") {{ errors.first('idNumber') }}
    label.label(for="gender")
      span.text 性別
      select#gender.select(v-model="formData.gender")
        option(value="", disabled, hidden) 請選擇性別
        option(value="男") 男
        option(value="女") 女
        option(value="其他") 其他
    label.label(for="birth")
      span.text 出生日期
      input#birth.input(name="birth", type="date", v-model="formData.birth")
    label.label(for="tel")
      span.text 聯絡電話*
      p.control
        input#tel.input(
          name="tel",
          type="tel",
          :class="{ 'is-danger': errors.has('tel') }",
          autocomplete="off",
          placeholder="請輸入聯絡電話",
          v-model="formData.tel",
          v-validate="'required'"
          )
        span.help.is-danger(v-show="errors.has('tel')") {{ errors.first('tel') }}
    label.label(for="email")
      span.text 電子信箱*
      p.control
        input#email.input(
          name="email",
          type="email",
          :class="{ 'is-danger': errors.has('email') }",
          placeholder="請輸入電子信箱",
          v-model="formData.email",
          v-validate="'required|email'"
          )
        span.help.is-danger(v-show="errors.has('email')") {{ errors.first('email') }}
    label.label(role="tw-city-selector")
      span.text 通訊地址*
      .input-set
        select#county.select(
          name="county",
          :class="{ 'is-danger': errors.has('county') }",
          @change="updateReceiptData",
          v-model="formData.county",
          v-validate="'required'"
          )
          //- option(selected, disabled) 縣市
        select#district.select(
          name="district",
          :class="{ 'is-danger': errors.has('district') }",
          @change="updateReceiptData",
          v-model="formData.district",
          v-validate="'required'"
          )
          //- option(selected, disabled) 鄉鎮市區
        input#address.input(
          name="address",
          type="text",
          :class="{ 'is-danger': errors.has('address') }",
          @change="updateReceiptData",
          placeholder="請輸入地址",
          v-model="formData.address",
          v-validate="'required'"
          )
        span.help.is-danger(v-show="errors.has('address')") {{ errors.first('address') }}
    label.label(for="receipt")
      span.text 收據寄發*
      select#receipt.select(
        name="receipt",
        :class="{ 'is-danger': errors.has('receipt') }",
        v-model="formData.receipt",
        v-validate="'required'"
        )
        option(value="", disabled, hidden) 請選擇是否需要收據
        option(value="年度收據") 年度收據
        option(value="單次收據") 單次收據
        option(value="不寄收據") 不寄收據
    label.label(for="receipt-title")
      span.text 收據抬頭*
      p.control
        input#receipt-title.input(
          name="receiptTitle",
          type="text",
          :class="{ 'is-danger': errors.has('receiptTitle') }",
          placeholder="請輸入收據抬頭",
          v-model="formData.receiptTitle",
          v-validate="'required'"
          )
        span.help.is-danger(v-show="errors.has('receiptTitle')") {{ errors.first('receiptTitle') }}
    label.label.label--checkbox(
      for="receipt-check",
      :class="{ 'is-checked': formData.receiptCheck }",
      @click.prevent="handleReceiptCheck"
      )
      .radio-container
        .radio
          input#receipt-check.input(type="checkbox")
      span.text 收據資訊同通訊資訊
    transition(name="height")
      label.label(role="tw-city-selector--receipt", v-show="!formData.receiptCheck")
        span.text 收據地址*
        .input-set
          select#receipt-county.select(
            name="receiptCounty",
            :class="{ 'is-danger': errors.has('receiptCounty') }",
            v-model="formData.receiptCounty",
            )
            //- option(selected, disabled) 縣市
          select#receipt-district.select(
            name="receiptDistrict",
            :class="{ 'is-danger': errors.has('receiptDistrict') }",
            v-model="formData.receiptDistrict",
            )
            //- option(selected, disabled) 鄉鎮市區
          input#receipt-address.input(
            name="receiptAddress",
            type="text",
            :class="{ 'is-danger': errors.has('receiptAddress') }",
            placeholder="請輸入地址",
            v-model="formData.receiptAddress",
            v-validate="'required'"
            )
          span.help.is-danger(v-show="errors.has('receiptAddress')") {{ errors.first('receiptAddress') }}
    .label-wrap
      span.text 是否願意收到實體文宣，了解TFT的近況與成果？
      .radio-container
        label.label.label--radio(for="campaign-1", :class="{ 'is-checked': formData.campaign === 'true' }")
          .radio
            input#campaign-1.input(
              name="campaign",
              type="radio",
              value="true",
              v-model="formData.campaign"
              )
          span.text 是
        label.label.label--radio(for="campaign-2", :class="{ 'is-checked': formData.campaign === 'false' }")
          .radio
            input#campaign-2.input(
              name="campaign",
              type="radio",
              value="false",
              v-model="formData.campaign"
              )
          span.text 否
    .label-wrap
      span.text 是否願意訂閱TFT電子報？
      .radio-container
        label.label.label--radio(for="newsletter-1", :class="{ 'is-checked': formData.newsletter === 'true' }")
          .radio
            input#newsletter-1.input(
              name="newsletter",
              type="radio",
              value="true",
              v-model="formData.newsletter"
              )
          span.text 是
        label.label.label--radio(for="newsletter-2", :class="{ 'is-checked': formData.newsletter === 'false' }")
          .radio
            input#newsletter-2.input(
              name="newsletter",
              type="radio",
              value="false",
              v-model="formData.newsletter"
              )
          span.text 否
    .btn-container
      router-link.btn.btn--grey(to="single")
        span 回上一步
      router-link.btn(to="single-check")
        span 下一步
</template>

<script>
import TWCitySelector from 'tw-city-selector/tw-city-selector.min';
import swal from 'sweetalert2';

export default {
  data() {
    return {
      receiptCheck: false,
    };
  },
  computed: {
    formData: {
      get() {
        return this.$store.state.formData;
      },
    },
  },
  methods: {
    updateReceiptData() {
      if (this.formData.receiptCheck) {
        this.formData.receiptCounty = this.formData.county;
        this.formData.receiptDistrict = this.formData.district;
        this.formData.receiptAddress = this.formData.address;
      }
    },
    handleReceiptCheck() {
      this.formData.receiptCounty = this.formData.county;
      this.formData.receiptDistrict = this.formData.district;
      this.formData.receiptAddress = this.formData.address;
      this.formData.receiptCheck = !this.formData.receiptCheck;
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
  },
  mounted() {
    /* eslint-disable no-new */
    this.$store.commit('updatePageTitle', '單次捐款');
    this.$store.commit('updateProgress', 2);
    // address
    new TWCitySelector({
      el: '[role="tw-city-selector"]',
      elCounty: '#county',
      elDistrict: '#district',
    });
    // receipt address
    new TWCitySelector({
      el: '[role="tw-city-selector--receipt"]',
      elCounty: '#receipt-county',
      elDistrict: '#receipt-district',
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === '/single-check') {
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
};
</script>

<style lang="scss" scoped>
@import url(../../node_modules/sweetalert2/dist/sweetalert2.min.css);
// edit style in sass/module/_form.scss
[role=tw-city-selector] select,
[role=tw-city-selector--receipt] select {
  flex: .4;
  padding: .55rem .5rem;
  margin-right: 15px;
  margin-bottom: 15px;
}

.height-enter-active,
.height-leave-active {
  transition: all .5s ease-in-out, max-height .7s;
  max-height: 500px;
}

.height-enter,
.height-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
