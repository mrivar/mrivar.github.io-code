import type { Map as MapLibreMap } from "maplibre-gl"

export const useMapStyles = (
  map: MapLibreMap,
  options: {
    lineInactive?: { color?: string; width?: number; opacity?: number }
    lineActive?: { color?: string; width?: number; opacity?: number }
  }
) => {
  const applyStyles = () => {
    // inactive line
    if (options.lineInactive && map.getLayer("gl-draw-line-inactive")) {
      const { color, width, opacity } = options.lineInactive
      if (color) map.setPaintProperty("gl-draw-line-inactive", "line-color", color)
      if (width) map.setPaintProperty("gl-draw-line-inactive", "line-width", width)
      if (opacity) map.setPaintProperty("gl-draw-line-inactive", "line-opacity", opacity)
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
