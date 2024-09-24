<template>
  <img class="logo" src="@/static/logo.svg" />
</template>

<script>
export default {
  name: "Logo",
  props: {
    route: {
      type: String,
      default: "",
      required: false
    }
  }
}
</script>

<style scoped>
.logo {
  animation: 1s appear;
  margin: auto;
  height: 500px;
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
