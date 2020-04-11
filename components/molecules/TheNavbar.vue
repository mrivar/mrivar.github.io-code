<template>
  <nav>
    <NavbarLink
      v-for="route in routes"
      :key="route.name"
      :name="route.name"
      :route="route.route"
    />
  </nav>
</template>

<script>
import NavbarLink from '~/components/atoms/NavbarLink.vue';

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

<style>

</style>
