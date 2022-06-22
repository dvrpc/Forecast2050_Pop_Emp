let popColor = [
  "interpolate",
  ["linear"],
  ["get", "pop50"],
  10000,
  "#DFEFFB",
  25000,
  "#A6CFE1",
  50000,
  "#4D9DC0",
  100000,
  "#0078AE",
  180000,
  "#004E76",
];

let popColor2 = [
  "interpolate",
  ["linear"],
  ["get", "popabs50"],
  0,
  "#CCCCCC",
  1,
  "#DFEFFB",
  2000,
  "#A6CFE1",
  4000,
  "#4D9DC0",
  6000,
  "#0078AE",
];

let popColor3 = [
  "interpolate",
  ["linear"],
  ["get", "poppct50"],
  0.05,
  "#DFEFFB",
  0.25,
  "#A6CFE1",
  0.5,
  "#4D9DC0",
  1,
  "#0078AE",
];

let popColorSQM = [
  "interpolate",
  ["linear"],
  ["get", "popabssq"],
  1000,
  "#DFEFFB",
  2500,
  "#A6CFE1",
  5000,
  "#4D9DC0",
  7500,
  "#0078AE",
  28000,
  "#004E76",
];

let empColor = [
  "interpolate",
  ["linear"],
  ["get", "emp50"],
  5000,
  "#dadaeb",
  10000,
  "#bcbddc",
  20000,
  "#9e9ac8",
  40000,
  "#756bb1",
  290000,
  "#54278f",
];
let empColorABS = [
  "interpolate",
  ["linear"],
  ["get", "empabs50"],
  0,
  "#CCCCCC",
  1000,
  "#E4E7F4",
  2000,
  "#C8CDE1",
  3000,
  "#A3ACCD",
  48000,
  "#757CA5",
];
let empColorPER = [
  "interpolate",
  ["linear"],
  ["get", "emppct50"],
  0.05,
  "#E4E7F4",
  0.25,
  "#C8CDE1",
  0.5,
  "#A3ACCD",
  1.5,
  "#757CA5",
];
let empColorSQM = [
  "interpolate",
  ["linear"],
  ["get", "empabssq"],
  500,
  "#E4E7F4",
  1500,
  "#C8CDE1",
  3000,
  "#A3ACCD",
  6000,
  "#757CA5",
  45000,
  "#545A80",
];

const secondaryMapLayers = {
  pop: {
    id: "pop",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor,
    },
  },
  popABS: {
    id: "popABS",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor2,
    },
  },
  popPER: {
    id: "popPER",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor3,
    },
  },
  popSQM: {
    id: "popSQM",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColorSQM,
    },
  },
  emp: {
    id: "emp",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColor,
    },
  },
  empABS: {
    id: "empABS",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColorABS,
    },
  },
  empPER: {
    id: "empPER",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColorPER,
    },
  },
  empSQM: {
    id: "empSQM",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColorSQM,
    },
  },
};

export default secondaryMapLayers;
