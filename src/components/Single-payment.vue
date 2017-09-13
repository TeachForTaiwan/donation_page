<template lang="pug">
  #single-payment
    form#form.form
      label.label
        span.text 捐款金額*
        select#amount.select
          option(selected, disabled) 請輸入捐款金額
          option(value="500") 500
          option(value="1000") 1000
          option(value="2000") 2000
      label.label
        span.text 付款方式*
        select#method.select
          option(selected, disabled) 請選擇付款方式
          option(value="0") 付款方式0
          option(value="1") 付款方式1
      .btn-container
        router-link.btn.btn--grey(to="single-check") 回上一步
        router-link.btn(to="") 確認付款


</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
// edit style in sass/module/_form.scss
</style>
