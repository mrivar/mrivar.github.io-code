<template>
  <div class="editor-container">
    <Segments />
    <Map class="rounded map" @route-changed="handleRouteChanged" />
    <Menu />
    <div class="settings"></div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fit'
})

const gpsPoints = ref<{ lat: number; lng: number }[]>([])

// handler for emitted event
function handleRouteChanged(points: { lat: number; lng: number }[]) {
  gpsPoints.value = points
  console.log("GPS points:", points)
}
</script>

<style scoped lang="scss">
.editor-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
  column-gap: 28px;
  font-weight: $semi-bold;
  //grid-template-areas: "l m r";
}
</style>
