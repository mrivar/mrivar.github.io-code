<template>
  <header>
    <div class="header-container">
      <Logo />
      <slot></slot>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
header {
  padding: 30px;
  width: 100%;
  top: 0;

  & .header-container {
    position: relative;
  }

  & .logo {
    max-height: 35px;
    cursor: pointer;
  }
}
</style>
