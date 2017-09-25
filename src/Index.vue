<template lang="pug">
  div#app
    Logo
    h1.title 支持 TFT
    Support
</template>

<script>
import Logo from './components/Logo.vue';
import Support from './components/Support.vue';
import { headMeta, headLink } from './head';

export default {
  data() {
    return {
    };
  },
  head: {
    title: {
      inner: '支持我們',
    },
    meta() {
      return headMeta;
    },
    link: headLink,
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
