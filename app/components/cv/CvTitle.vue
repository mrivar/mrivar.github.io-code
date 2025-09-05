<script setup lang="ts">

</script>

<template>
  <div>
    <span class="title text"><slot /></span>
  </div>
</template>

<style scoped lang="scss">
div {
  text-align: left;
}
span.title {
  font-size: $text-xxl;
}
</style>
