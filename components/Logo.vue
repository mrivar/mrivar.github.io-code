<template>
  <img class="Logo" src="@/static/logo_tech.svg" />
</template>
<script>
import logo from '@/static/logo.svg'
import logo_tech from '@/static/logo_tech.svg'

export default {}
</script>
<style>
.Logo {
  animation: 1s appear;
  margin: auto;
  height: 300px;
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
