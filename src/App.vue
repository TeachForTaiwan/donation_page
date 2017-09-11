<template lang="pug">
  div#app
    Logo
    Single
    Single-form
</template>

<script>
import Logo from './components/Logo.vue';
import Single from './components/Single.vue';
import SingleForm from './components/Single-form.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    Logo,
    Single,
    SingleForm
  }
}
</script>

<style lang="scss" scoped>
.message {}
</style>
