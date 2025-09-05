<template>
  <NuxtLink :to="path" class="navbar-item text-button">
      {{ name }}
      <!--div class="red-circle"></div-->
  </NuxtLink>
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
/*.navbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}*/
a {
  font-family: $barlow;
  font-size: $text-xl;
  font-weight: $bold;
  border-bottom: 0px solid;

  /*
  &.router-link-active {
    color: $dark-gray;
    border-bottom-width: 2px;
    border-color: $primary-color;
  }
  */
}
@include phone {
  a {
    font-size: $text-m;
    font-weight: $semi-bold;
  }
}
</style>
