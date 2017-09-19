<template lang="pug">
  .progress-bar
    .progress-item.step-1(:class="{ 'is-active': progress >= 1, 'is-current': progress == 1 }")
      .circle
      .text 捐款說明
    .progress-item.step-2(:class="{ 'is-active': progress >= 2, 'is-current': progress == 2 }")
      .circle
      .text 填寫基本資料
    .progress-item.step-3(:class="{ 'is-active': progress >= 3, 'is-current': progress == 3 }")
      .circle
      .text 選擇付款方式

</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    progress: {
      get() {
        return this.$store.state.progress;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../sass/variable';
.progress-bar {
  max-width: 500px;
  margin: 30px auto 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .progress-item {
    flex: 1;
    position: relative;
    color: $c-grey;
    &.is-active {
      .circle {
        background: $c-green;
        border-color: transparent;
      }
      &:after {
        width: 100%;
      }
      &:last-child:after {
        width: 50%;
      }
    }
    &.is-current {
      .text {
        color: $c-green;
      }
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      height: 2px;
      background: $c-grey;
      transition: .5s ease-in-out;
      transform: translateY(-50%);
    }
    &:after {
      content: '';
      position: absolute;
      width: 0;
      left: 0;
      top: 50%;
      height: 2px;
      background: $c-green;
      transition: .5s ease-in-out;
      transform: translateY(-50%);
    }
    &:first-child:before,
    &:first-child:after {
      left: 50%;
    }
    &:last-child:before {
      width: 50%;
    }
    .circle {
      border: 2px solid $c-grey;
      border-radius: 50%;
      background: white;
      height: 20px;
      width: 20px;
      margin: 5px auto;
      position: relative;
      z-index: 2;
      transition: .5s ease-in-out;
    }
    .text {
      margin: .5em auto 0;
      text-align: center;
      font-size: 18px;
      position: absolute;
      left: 0;
      right: 0;
      transition: .5s ease-in-out;
    }
  }
}
</style>
