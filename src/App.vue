<template lang="pug">
  div#app
    Logo
    //- 換頁動畫
    //- https://router.vuejs.org/zh-cn/advanced/transitions.html
    transition(name="fade")
      router-view
</template>

<script>
import Logo from './components/Logo.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
