<template>
  <header>
    <div class="header-container">
      <NuxtLink :to="'/'" class="logo-container">
        <Logo />
      </NuxtLink>
      <slot></slot>
      <TheNavbar class="navbar" :routes="routes">
        <DarkMode />
      </TheNavbar>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/logo/Logo.vue';
import TheNavbar from '~/components/nav/TheNavbar.vue';

const routes = [
  {
    name: "Blog",
    path: "/"
  },
  {
    name: "Links",
    path: "/links/"
  },
  {
    name: "About",
    path: "/"
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

<style scoped>
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

  & .logo-container {
    align-self: start;
  }

  & .logo {
    margin: 0;
    height: 80px;
    cursor: pointer;
  }
}
</style>
