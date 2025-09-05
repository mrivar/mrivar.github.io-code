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
const routes = [
  {
    name: "Links",
    path: "/links/"
  },
  {
    name: "Blog",
    path: "/blog/"
  },
  {
    name: "CV",
    path: "/cv/"
  },
]

export default {
  data() {
    return {
      routes
    };
  }
}
</script>

<style scoped lang="scss">
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

@include phone {
  header {
    padding-top: 60px;
  }
}
@include small-phone {
  header {
    padding-top: 50px;
    padding-bottom: 20px;
  }
}
</style>
