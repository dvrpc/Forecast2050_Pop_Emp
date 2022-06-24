const layers = {
  countyOutline: {
    id: "county-outline",
    type: "line",
    source: "boundaries",
    "source-layer": "county",
    paint: {
      "line-width": 3,
      "line-color": "#505a5e",
    },
    filter: ["==", "dvrpc", "Yes"],
  },
  county: {
    id: "CNTY",
    type: "fill",
    source: "CNTY",
    layout: {},
    paint: {
      "fill-opacity": 0,
    },
  },
  muniLine: {
    id: "MCD-line",
    type: "line",
    source: "MCD",
    layout: {},
    paint: {
      "line-width": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        6,
        1,
      ],
      "line-color": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        "#FF0000",
        "#9cafb5",
      ],
      "line-opacity": {
        base: 9,
        stops: [
          [9, 0.4],
          [10, 0.5],
          [11, 0.65],
          [12, 0.7],
          [13, 0.8],
          [14, 0.9],
        ],
      },
    },
  },
  muniFill: {
    id: "MCD",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-color": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        "#FFD662",
        "#0078ae",
      ],
      "fill-outline-color": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        "#39398e",
        "#fff",
      ],
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        0.8,
        0,
      ],
    },
  },
  muniSelect: {
    id: "muniSelect",
    type: "line",
    source: "MCD",
    paint: {
      "line-width": 4,
      "line-color": "#FF0000"
      // "fill-opacity": 0.8
    },
    layout: {visibility: "none"},
  },
};

export default layers;
