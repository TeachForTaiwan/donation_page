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
@import '../sass/variable';
.form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .label-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    .label {
      margin: 0;
    }
  }

  .label {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 10px 0;
    .text {
      min-width: 32%;
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
    @mixin radio($color: $c-primary) {
      .radio {
        margin-right: 5px;
        background: #e6e6e6;
        width: 18px;
        height: 18px;
        position: relative;
        border: 1px solid #979797;
        background: #FFF;
        border-radius: 50%;
        position: relative;
        .input {
          opacity: 0;
        }
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: $color;
          transform: translate(-50%, -50%);
          transition: .1s ease-in-out;
        }
      }
      &.is-checked {
        .radio:after {
          width: 60%;
          height: 60%;
        }
      }
      .text {
        min-width: initial;
      }
    }
    &--checkbox {
      align-items: center;
      @include radio();
    }
    &--radio {
      @include radio();
    }
  }
  .radio-container {
    display: flex;
    .label {
      align-items: center;
      padding: .55em .5em;
    }
    .text {
      padding: .4em;
    }
  }
  .btn-container {
    color: $c-white;
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    .btn {
      margin: 20px;
    }
  }
}

</style>
