<template>
  <div class="link-container">
    <NuxtLink v-for="link in links" :to="link.path" class="big-button text" :target="_blank ? '_blank' : null">
      <Icon :name="link.icon"></Icon> {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { links } = defineProps({
  /**
   * Array of links with route and content
   */
  links: Array as PropType<Array<Link>>
});

class Link {
  name: String
  icon: String
  path: String
  _blank: Boolean = true
}
</script>

<style scoped>
.link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
