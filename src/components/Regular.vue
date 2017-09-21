<!-- 定期定額捐款 -->
<template lang="pug">
  div#single
    ul.list
      li.item 本公益勸募資料傳送採用SSL (Secure Socket Layer) 256 bits 安全加密機制傳輸並使用聯合信用卡中心付款閘道。
      li.item 您的重要資料皆用複雜的數學運算方式進行亂數編碼再進行資料傳送，且取得寰宇數位的伺服器數位憑證，讓您能夠安全安心地進行線上捐款動作。
      li.item 您捐贈的每一筆金額，皆可開立捐款收據！財團法人為台灣而教教育基金會不會將您的個人資料透漏給第三者，請放心填寫之！
      li.item 您的定期定額捐款將於每月最後一個交易日 (1/31、2/28、3/31...) 由本會委由聯合信用卡中心執行授權扣款作業。如您欲終止(修改)授權內容請儘速與本會連繫。
      li.item 請註明捐款人姓名、身分證字號、地址（含戶籍地址與收件人地址以便寄發收據）、電話。
      li.item 於申報所得稅時，捐款金額可作為列舉扣除額；每申報戶最高為綜合所得額20%，且上限為新台幣20萬元。
      li.item 如對線上捐款機制有任何疑問，請洽TFT 02-2345-6225。
    .btn-container
      router-link.btn(to="regular-form")
        span 我知道了
</template>

<script>
export default {
  name: 'single',
  data() {
    return {
    };
  },
  mounted() {
    this.$store.commit('updatePageTitle', '定期定額捐款');
    this.$store.commit('updateProgress', 1);
    this.$store.commit('updateProgressText', {
      step1: '捐款說明',
      step2: '填寫基本資料',
      step3: '信用卡授權',
    });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import '../sass/variable';
@import '../sass/mixin/breakpoint';
#single {
  max-width: 500px;
  margin: 50px auto 80px;
}

.list {
  list-style: disc;
  .item {
    line-height: 1.71;
    margin: .5em auto;
    @include for-phone-only{
      margin-left: 2em;
      margin-right: .5em;
      padding: 0;
    }
  }
}

.btn-container {
  text-align: center;
  margin: 40px auto;
  .btn {
    color: $c-white;
  }
}
</style>
