<template>
  <img class="logo" src="@/public/mr_logo.svg" alt="logo" />
</template>

<script>
export default {
  name: "OldLogo",
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
