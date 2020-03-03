<template>
  <div class="container">
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
  props: ['error'],
  head() {
    return {
      title: 'Martín Riva'
      /*meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]*/
    }
  }
}
</script>
<style scoped>
img {
  animation: 1s appear;
  margin: auto;
  height: 200px;
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
