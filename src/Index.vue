<template lang="pug">
  div#app
    Logo
    h1.title 支持 TFT
    Support
</template>

<script>
import Logo from './components/Logo.vue';
import Support from './components/Support.vue';

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    Logo,
    Support,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 1.5em auto;
}
</style>
