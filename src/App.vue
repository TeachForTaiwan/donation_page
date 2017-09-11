<template lang="pug">
  div#app
    Logo
    Single
</template>

<script>
import Logo from './components/Logo.vue';
import Single from './components/Single.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    Logo,
    Single
  }
}
</script>

<style lang="scss" scoped>
.message {}
</style>
