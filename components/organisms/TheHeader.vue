<template>
  <header>
    <div class="header-container">
      <Logo />
      <slot></slot>
      <TheNavbar :routes="routes" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue';
import TheNavbar from '~/components/molecules/TheNavbar.vue';

const routes = [
  {
    name: "About",
    route: "/covid19/about"
  }
]

export default {
  components: {
    Logo,
    TheNavbar
  },
  data() {
    return {
      routes
    };
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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }

  & .logo {
    margin: 0;
    max-height: 35px;
    cursor: pointer;
  }
}
</style>
