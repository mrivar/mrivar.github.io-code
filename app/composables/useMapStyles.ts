import type { Map as MapLibreMap } from "maplibre-gl"

export const useMapStyles = (
  map: MapLibreMap,
  options: {
    lineInactive?: { color?: string; width?: number; opacity?: number }
    lineActive?: { color?: string; width?: number; opacity?: number }
  }
) => {
  const applyStyles = () => {
    //console.log(map.getLayersOrder().filter((el) => el.includes("line")))
    // inactive line: both hot + cold
    if (options.lineInactive) {
      const { color, width, opacity } = options.lineInactive
      ;["gl-draw-line-inactive.cold", "gl-draw-line-inactive.hot",
        "gl-draw-line-static.cold", "gl-draw-line-static.hot"].forEach((layerId) => {
        if (color) map.setPaintProperty(layerId, "line-color", color)
        if (width) map.setPaintProperty(layerId, "line-width", width)
        if (opacity) map.setPaintProperty(layerId, "line-opacity", opacity)
      })
    }

    // active line: both hot + cold
    if (options.lineActive) {
      const { color, width, opacity } = options.lineActive
      ;["gl-draw-line-active.cold", "gl-draw-line-active.hot"].forEach((layerId) => {
        if (map.getLayer(layerId)) {
          if (color) map.setPaintProperty(layerId, "line-color", color)
          if (width) map.setPaintProperty(layerId, "line-width", width)
          if (opacity) map.setPaintProperty(layerId, "line-opacity", opacity)
        }
      })
    }
  }

  map.on("draw.render", applyStyles)
  return { applyStyles }
}
