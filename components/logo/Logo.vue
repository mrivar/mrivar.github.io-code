<template>
  <img class="logo" src="@/public/logo.svg"  alt="logo"/>
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

<style scoped lang="scss">
.logo {
  animation: 1s appear;
  margin: auto;
  height: 75px;
  max-width: 90%;
  //fill: $light-red;
  filter: invert(60%) sepia(47%) saturate(3808%) hue-rotate(324deg) brightness(106%) contrast(91%);
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
