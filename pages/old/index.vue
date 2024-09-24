<template>
  <div class="main-container">
    <div>
      <OldLogo />
      <h1 class="title loading">This page is under construction...</h1>
      <h2 class="subtitle">Come back soon</h2>
    </div>
  </div>
</template>

<script>
import OldLogo from '~/components/logo/OldLogo.vue';

export default {
  components: {
    OldLogo
  }
}
</script>

<style lang="scss">
@import "./assets/style/colors.scss";

html {
  background-color: $black;
}
</style>
