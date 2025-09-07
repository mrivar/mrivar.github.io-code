<template>
  <div class="main-container">
    <div class="grid-rows">
      <FitHeader />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.main-container {
  min-width: 90vw;
  //background: linear-gradient(180deg,rgba(236, 238, 242, 1) 0%, rgba(189, 204, 216, 1) 100%);
}
.grid-rows {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
