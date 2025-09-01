<template>
  <div class="main-container centered">
    <div>
      <OldLogo />
      <h1 class="title loading">This page is under construction...</h1>
      <h2 class="subtitle">Come back soon</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
</script>

<style lang="scss">
html {
  background-color: $black !important;
}
.main-container {
  max-width: none !important;
}
.title {
  display: block;
  font-weight: 100;
  font-size: 40px;
  color: $light-red;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 100;
  font-size: 20px;
  color: $light-gray;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
