import { LayerProps } from "react-map-gl";

export const clusterLayer = {
  id: "clusters",
  type: "circle",
  source: "homes",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": [
      "step",
      ["get", "point_count"],
      "#668cde",
      100,
      "#4c6bae",
      750,
      "#3a5183",
    ],
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
    "circle-opacity": [
      "case",
      ["boolean", ["feature-state", "hover"], false],
      1,
      0.6,
    ],
  },
  layout: {
    visibility: "none",
  },
};

export const clusterCountLayer = {
  id: "cluster-count",
  type: "symbol",
  source: "homes",
  filter: ["has", "point_count"],
  layout: {
    visibility: "none",
    "text-field": "{point_count_abbreviated}",
    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
    "text-size": 12,
  },
  visibility: "none",
};

export const unclusteredHousePointLayer = {
  id: "unclustered-point-house",
  type: "symbol",
  source: "homes",
  //   filter: [["!", ["has", "point_count"]]],
  filter: [
    "all",
    ["!", ["has", "point_count"]],
    ["==", ["get", "type"], "House"],
  ],
  layout: {
    "icon-image": [
      "match",
      ["get", "id"],
      0,
      "house-marker-hover",
      "house-marker",
    ],

    visibility: "none",
  },
  //   paint: {
  //     "circle-color": "#11b4da",
  //     "circle-radius": 4,
  //     "circle-stroke-width": 1,
  //     "circle-stroke-color": "#fff",
  //   },
  interactive: "true",
};

export const unclusteredBuildingPointLayer = {
  id: "unclustered-point-building",
  type: "symbol",
  source: "homes",
  //   filter: [["!", ["has", "point_count"]]],
  filter: [
    "all",
    ["!", ["has", "point_count"]],
    ["==", ["get", "type"], "Flat"],
  ],
  layout: {
    "icon-image": "building-marker",
    visibility: "none",
  },
  //   paint: {
  //     "circle-color": "#f5725b",
  //     "circle-radius": 4,
  //     "circle-stroke-width": 1,
  //     "circle-stroke-color": "#fff",
  //   },
  interactive: "true",
};
