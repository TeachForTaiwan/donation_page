<!-- 單次捐款 -->
<template lang="pug">
  div#single
    h1.title {{ title }}
    ul.list
      li.item 本公益勸募資料傳送採用SSL (Secure Socket Layer) 256 bits 安全加密機制傳輸並使用歐付寶ALLPAY付款閘道。
      li.item 您的重要資料皆用複雜的數學運算方式進行亂數編碼再進行資料傳送，且取得網際威信的伺服器數位憑證（HiTrust），讓您能夠安全安心地進行線上捐款動作。
      li.item 您捐贈的每一筆金額，皆可開立捐款收據！財團法人為台灣而教教育基金會不會將您的個人資料透漏給第三者，請放心填寫之！
      li.item 請註明捐款人姓名、身分證字號、地址（含戶籍地址與收件人地址以便寄發收據）、電話。
      li.item 於申報所得稅時，捐款金額可作為列舉扣除額；每申報戶最高為綜合所得額20%，且上限為新台幣20萬元。
      li.item 如對線上捐款機制有任何疑問，請洽 02-2345-6225。
    button 我知道了
</template>

<script>
export default {
  name: 'single',
  data() {
    return {
      title: '單次捐款'
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  list-style: disc;
  .item {
    line-height: 1.71;
    margin: .5em auto;
  }
}
</style>
