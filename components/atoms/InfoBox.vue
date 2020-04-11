<template>
  <div class="infobox">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InfoBox"
}
</script>

<style scoped>
.infobox {
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;
  border: 0px solid #000000;
}
</style>
