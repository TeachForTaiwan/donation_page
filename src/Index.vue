<template lang="pug">
  div#app
    Logo
    h1.title {{ pageTitle }}
    transition(name="fade", mode="out-in")
      router-view
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
  computed: {
    pageTitle: {
      get() {
        return this.$store.state.pageTitle;
      },
    },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
