<script lang="ts">
</script>

<template>
  <div class="title-container">
    <h1 class="title"><slot /></h1>
    <div class="red-block"></div>
  </div>
</template>

<style scoped lang="scss">
.title-container {
  margin-bottom: 50px;
  & .title {
    margin-bottom: 15px;
  }
}
</style>
