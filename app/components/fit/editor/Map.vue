<template>
  <div class="map-container" ref="map-container"></div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import maplibregl from 'maplibre-gl'
import MapboxDraw, { type DrawCreateEvent, type DrawUpdateEvent } from 'maplibre-gl-draw'
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl"
import 'maplibre-gl/dist/maplibre-gl.css'
import 'maplibre-gl-draw/dist/mapbox-gl-draw.css'
import "@maptiler/geocoding-control/style.css"
import type { Feature } from 'geojson'

const mapContainer = useTemplateRef<HTMLDivElement>('map-container')
const MAP_TILER_KEY = "BkBcJmTAKx5buK8JISEo"

const emit = defineEmits<{
  (e: "route-changed", points: { lat: number; lng: number }[]): void
}>()

onMounted(() => {
  if (!mapContainer.value) return

  const map = new maplibregl.Map({
    container: mapContainer.value,
    style:
      `https://api.maptiler.com/maps/019909c8-f2ef-7fec-b28a-f69043b2f910/style.json?key=${MAP_TILER_KEY}`, // OSM-based tiles
    center: [12.564, 55.7],
    zoom: 13
  })

  map.on('load', () => {
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true, // allow drawing routes
        //point: true,       // allow adding points
        trash: true
      },
      defaultMode: 'draw_line_string'
    })

    map.addControl(draw)
    //draw.changeMode("draw_line_string")

    useMapStyles(map, {
      lineInactive: { color: '#fc5200', width: 4, opacity: 0.9 },
      lineActive: { color: '#ff6600', width: 4, opacity: 1 }
    })

    // Helper to extract and emit points
    const emitGpsPoints = (features: Feature[]) => {
      const line = features.find((f: Feature) => f.geometry.type === "LineString")
      if (!line) return
      const coords = line.geometry.coordinates
      const gpsPoints = coords.map(([lng, lat]: [number, number]) => ({ lat, lng }))
      emit("route-changed", gpsPoints)
    }

    // Listen to updates
    map.on('draw.create', (e: DrawCreateEvent) => {
      //console.debug('Created:', e.features)
      emitGpsPoints(e.features)
    })

    map.on('draw.update', (e: DrawUpdateEvent) => {
      //console.debug('Updated:', e.features)
      emitGpsPoints(e.features)
    })

    const geocoder = new GeocodingControl({
      apiKey: MAP_TILER_KEY,
      maplibregl,
      placeholder: "Search...",
    })

    map.addControl(geocoder, "top-left")

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
  height: 500px;
  width: 750px;
}
</style>
