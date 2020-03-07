<template>
  <img class="Logo" src="@/static/logo.svg" />
</template>
<style>
.Logo {
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
