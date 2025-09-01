<template>
  <header>
    <div class="header-container">
      <NuxtLink to="/" class="text">
        <span class="light">ctr</span>
        <span class="light">+alt+</span>
        <span class="bold">fit</span>
      </NuxtLink>
      <slot></slot>
      <TheNavbar class="navbar" :routes="routes">
        <DarkMode />
      </TheNavbar>
    </div>
  </header>
</template>

<script>
const routes = []

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
  font-size: $text-l;

  & .header-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
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
