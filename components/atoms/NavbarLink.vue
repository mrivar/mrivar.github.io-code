<template>
  <n-link
    :to="route"
    class="navbar-item"
  >
    {{ name }}
  </n-link>
</template>

<script>
export default {
  name: "NavbarLink",
  props: {
    name: {
      type: String,
      required: true
    },
    route: {
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

  &:focus,
  &:hover,
  & .nuxt-link-active {
    font-weight: 500;
  }

  & .nuxt-link-active {
    border-bottom-width: 2px;
  }
}
</style>
