<template>
  <div class="main-container">
    <div>
      <img src="@/static/404.svg" />
      <h1 v-if="error.statusCode === 404" class="title">Page not found</h1>
      <h1 v-else class="title">An error occurred</h1>
      <nuxt-link to="/" class="subtitle">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
img {
  animation: 1s appear;
  margin: auto;
  height: 200px;
  max-width: 90%;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
