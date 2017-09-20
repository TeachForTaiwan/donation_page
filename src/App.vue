<template lang="pug">
  div#app
    Logo
    h1.title {{ pageTitle }}
    ProgressBar(ref="ProgressBar")
    //- 換頁動畫
    //- https://router.vuejs.org/zh-cn/advanced/transitions.html
    transition(name="fade", mode="out-in")
      router-view
</template>

<script>
import Logo from './components/Logo.vue';
import ProgressBar from './components/Progress-bar.vue';

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
    pageTitle: {
      get() {
        return this.$store.state.pageTitle;
      },
    },
  },
  components: {
    Logo,
    ProgressBar,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.title{
  margin: 1.5em auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
