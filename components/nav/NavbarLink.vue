<template>
  <n-link
    :to="path"
    class="navbar-item"
  >{{ name }}</n-link>
</template>

<script>
export default {
  name: "NavbarLink",
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      default: "",
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: black;
  border-bottom: 0px solid;
  margin-left: 10px;

  &:focus,
  &:hover,
  &.nuxt-link-exact-active {
    font-weight: 500;
  }

  &.nuxt-link-exact-active {
    border-bottom-width: 2px;
  }
}
</style>
