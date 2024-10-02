<template>
  <NuxtLink v-for="link in links" :to="link.route" class="link-container text">
    {{ link.content }}
  </NuxtLink>
</template>

<script setup lang="ts">
export default {
  props: {
    /**
     * Array of links with route and content
     */
    links: Array
  }
}
</script>

<style scoped></style>
