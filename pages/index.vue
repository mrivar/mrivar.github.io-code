<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title loading">This page is under construction...</h1>
      <h2 class="subtitle">Come back soon</h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-family: Roboto, normal;
  font-weight: 200;
  color: #666;
  padding-top: 25px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
