<template>
  <div class="skeleton-title bone"></div>
  <div class="skeleton-container">
    <div class="bone" style="width: 80px"></div>
    <div class="bone" style="width: 40px"></div>
    <div class="bone" style="width: 120px"></div>
    <div class="bone" style="width: 90px"></div>
    <div class="bone" style="width: 30px"></div>
    <div class="bone" style="width: 50px"></div>
    <div class="bone" style="width: 100px"></div>
    <div class="bone" style="width: 50px"></div>
    <div class="bone" style="width: 30px"></div>
    <div class="bone" style="width: 130px"></div>
    <div class="bone" style="width: 80px"></div>
    <div class="bone" style="width: 60px"></div>
  </div>
  <div class="skeleton-container">
    <div class="bone bone-2" style="width: 80px"></div>
    <div class="bone bone-2" style="width: 40px"></div>
    <div class="bone bone-2" style="width: 120px"></div>
    <div class="bone bone-2" style="width: 90px"></div>
    <div class="bone bone-2" style="width: 30px"></div>
    <div class="bone bone-2" style="width: 50px"></div>
    <div class="bone bone-2" style="width: 100px"></div>
    <div class="bone bone-2" style="width: 50px"></div>
    <div class="bone bone-2" style="width: 30px"></div>
    <div class="bone bone-2" style="width: 130px"></div>
    <div class="bone bone-2" style="width: 80px"></div>
    <div class="bone bone-2" style="width: 60px"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.skeleton-title {
  margin-top: 10px;
  min-width: 180px;
  margin-bottom: 24px;
  min-height: 40px;
}

.skeleton-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  text-align: left;
  margin-bottom: 24px;
}

.bone {
  width: 50px;
  height: 20px;
  border-radius: 5px;
  background-color: #DDD;//#D6D9E0;
}

html.dark-mode {
  & .bone {
    background-color: #353A46;
  }
}
</style>
