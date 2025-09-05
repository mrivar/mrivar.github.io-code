<template>
  <div class="map-container" ref="map-container"></div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MapboxDraw from "maplibre-gl-draw"
import "maplibre-gl-draw/dist/mapbox-gl-draw.css"

const gps: [number, number][] = [
  [12.564, 55.7],
  [12.565, 55.702],
  [12.566, 55.698],
  [12.567, 55.7],
]

const mapContainer = useTemplateRef<HTMLDivElement>('map-container')

onMounted(() => {
  if (!mapContainer.value) return

  const map = new maplibregl.Map({
    container: mapContainer.value,
    style:
      'https://api.maptiler.com/maps/019909c8-f2ef-7fec-b28a-f69043b2f910/style.json?key=BkBcJmTAKx5buK8JISEo', // OSM-based tiles
    center: [12.564, 55.7],
    zoom: 13
  })

  map.on("load", () => {
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true, // allow drawing routes
        //point: true,       // allow adding points
        trash: true,
      },
      defaultMode: "draw_line_string",
    })

    map.addControl(draw)
    //draw.changeMode("draw_line_string")

    useMapStyles(map, {
      lineInactive: { color: "#fc5200", width: 4, opacity: 0.9 },
      lineActive: { color: "#ff6600", width: 4, opacity: 1 },
    })

    // Listen to updates
    map.on("draw.create", (e) => {
      //console.log("Created:", e.features)
    })
    map.on("draw.update", (e) => {
      //console.log("Updated:", e.features)
    })


    /**map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: gps,
        },
      },
    })

    map.addLayer({
      id: "route-line",
      type: "line",
      source: "route",
      paint: {
        "line-color": "#FF0001",
        "line-width": 4,
      },
    })
     */
  })
})
</script>

<style scoped lang="scss">
.map-container {
  height: 450px;
  width: 750px;
}
</style>
