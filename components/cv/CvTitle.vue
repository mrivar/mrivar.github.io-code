<script setup lang="ts">

</script>

<template>
  <div>
    <span class="title text gray"><slot /></span>
  </div>
</template>

<style scoped lang="scss">
div {
  text-align: left;
}
span.title {
  font-size: $text-xl;
}
</style>
