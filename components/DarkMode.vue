<template>
  <button
    aria-label="Color Mode"
    @click="changeColor"
  >
    <ColorScheme placeholder="...">
      <Icon v-if="$colorMode.value === 'dark'" name="heroicons-outline:moon" class="text-xl text-button" />
      <Icon v-else name="heroicons-outline:sun" class="text-xl text-button" />
    </ColorScheme>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<style scoped>

</style>
