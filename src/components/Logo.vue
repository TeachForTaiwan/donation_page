<template lang="pug">
  .logo-container
    img.logo(src="../assets/logo_350px.png", alt="Logo")
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../sass/variable';
.logo-container {
  background: $c-white;
  text-align: center;
  padding: 50px 10px;
}
</style>
