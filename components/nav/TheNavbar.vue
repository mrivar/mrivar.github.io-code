<template>
  <nav>
    <NavbarLink
      v-for="route in routes"
      :key="route.name"
      :name="route.name"
      :path="route.path"
    />
  </nav>
</template>

<script>
import NavbarLink from '~/components/nav/NavbarLink.vue';

export default {
  name: "TheNavbar",
  props: {
    /**
     * Array of routes with name and route
     */
    routes: Array
  },
  components: {
    NavbarLink
  }
}
</script>

<style scoped>
nav {
  align-self: start;
}
</style>
