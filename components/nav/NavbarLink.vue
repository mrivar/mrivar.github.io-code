<template>
  <NuxtLink :to="path" class="navbar-item">
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
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/fonts.scss";
@import "@/assets/styles/fonts-weight.scss";

/*.navbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}*/
a {
  font-family: $barlow;
  font-size: 25px;
  font-weight: $bold;
  color: $gray3;
  border-bottom: 0px solid;
  margin-left: 27px;

  &:focus,
  &:hover,
  &.nuxt-link-exact-active {
    color: $dark-gray;
    //font-weight: 500;
  }

  &.nuxt-link-exact-active {
    color: $dark-gray;
    border-bottom-width: 2px;
    border-color: $light-red;
  }
}
</style>
