<template>
  <img class="logo" src="@/static/logo.svg" />
</template>

<style>
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
