<template>
  <div class="segments rounded">
    <div class="segment">SEGMENT 1</div>
    <span></span>
    <div class="segment">SEGMENT 2</div>
    <span></span>
    <div class="segment">SEGMENT 3</div>
    <span></span>
    <div class="segment">+</div>
  </div>
</template>

<script setup lang="ts">
</script>


<style scoped lang="scss">
.segments {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $strava-light;
  padding: 8px;

  & .segment {
    padding: 20px;
    color: $white;
  }

  & span {
    display: block;
    width: 75%;
    height: 1px;
    background-color: $white;
    opacity: 0.6;
  }
}
</style>
