<template lang="pug">
  div#app
    Logo
    h1.title {{ pageTitle }}
    ProgressBar(ref="ProgressBar")
    //- 換頁動畫
    //- https://router.vuejs.org/zh-cn/advanced/transitions.html
    transition(name="fade", mode="out-in")
      router-view(@emitFormData="getFormData", @emitProgress="updateProgress")
</template>

<script>
import Logo from './components/Logo.vue';
import ProgressBar from './components/Progress-bar.vue';

export default {
  data() {
    return {
      pageTitle: '單次捐款',
      formData: '',
      progress: 1,
    };
  },
  components: {
    Logo,
    ProgressBar,
  },
  methods: {
    getFormData(data) {
      this.formData = JSON.parse(JSON.stringify(data));
    },
    updateProgress(progress) {
      console.log(this);
      this.progress = progress;
      this.$refs.ProgressBar.progress = this.progress;
    },
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
