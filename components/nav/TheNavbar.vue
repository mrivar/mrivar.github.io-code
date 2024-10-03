<template>
  <nav>
    <NavbarLink
      v-for="route in routes"
      :key="route.name"
      :name="route.name"
      :path="route.path"
    />
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
const { routes } = defineProps({
  /**
   * Array of routes with name and route
   */
  routes: Array
});
</script>

<style scoped lang="scss">
nav {
  display: flex;
  align-self: start;
  gap: 27px;
}
@include phone {
  nav {
    gap: 10px;
  }
}
@include small-phone {
  nav {
    flex-direction: column;
    align-items: end;
  }
}
</style>
