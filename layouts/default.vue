<template>
  <div class="main-container">
    <div class="grid-rows">
      <TheHeader />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.grid-rows {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
