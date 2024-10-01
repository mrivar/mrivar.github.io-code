<template>
  <button
    aria-label="Color Mode"
    class="text-button"
    @click="changeColor"
  >
    <ColorScheme placeholder="...">
      <Icon v-if="$colorMode.value === 'dark'" name="heroicons-outline:moon" />
      <Icon v-else name="heroicons-outline:sun" />
    </ColorScheme>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<style scoped lang="scss">
.text-button {
  display: flex;
  align-items: center;
  font-size: $text-xl;
  min-width: $text-xl;
  & span {
    margin-top: 2px;
  }
}
@include phone {
  .text-button {
    font-size: $text-m;
    min-width: $text-m;
  }
}
</style>
