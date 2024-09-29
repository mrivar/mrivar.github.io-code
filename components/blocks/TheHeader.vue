<template>
  <header>
    <div class="header-container">
      <Logo />
      <slot></slot>
      <TheNavbar class="navbar" :routes="routes" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/logo/Logo.vue';
import TheNavbar from '~/components/nav/TheNavbar.vue';

const routes = [
  {
    name: "Homepage",
    path: "/"
  },
  {
    name: "Education",
    path: "/education/"
  },
  {
    name: "About",
    path: "/about"
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
@import "@/assets/styles/devices.scss";

header {
  padding: 80px 0 40px;
  min-width: 70vw;
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
    height: 75px;
    cursor: pointer;
  }
}

@include phone {
  .navbar {
    display: none;
  }
}
</style>
