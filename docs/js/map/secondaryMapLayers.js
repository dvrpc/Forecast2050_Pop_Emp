let emp0 = '#CCCCCC';
let emp1 = '#dadaeb';
let emp2 = '#bcbddc';
let emp3 = '#9e9ac8';
let emp4 = '#756bb1';
let emp5 = '#54278f';

let popColor = ["step",
  ["get", "pop50"],
  "#DFEFFB",
  10000,
  "#A6CFE1",
  25000,
  "#4D9DC0",
  50000,
  "#0078AE",
  100000,
  "#004E76"
];

let popColor2 = ["step",
  ["get", "popabs50"],
  "#CCCCCC",
  0,
  "#DFEFFB",
  1,
  "#A6CFE1",
  2000,
  "#4D9DC0",
  4000,
  "#0078AE",
];

let popColor3 = ["step",
  ["get", "poppct50"],
  "#DFEFFB",
  0.05,
  "#A6CFE1",
  0.25,
  "#4D9DC0",
  0.5,
  "#0078AE",
];

let popColorSQM = ["step",
  ["get", "popabssq"],
  "#DFEFFB",
  1000,
  "#A6CFE1",
  2500,
  "#4D9DC0",
  5000,
  "#0078AE",
  7500,
  "#004E76",
];

let empColor = ["step",
  ["get", "emp50"],
  emp1,
  5000,
  emp2,
  10000,
  emp3,
  20000,
  emp4,
  40000,
  emp5
];
let empColorABS = ["step",
  ["get", "empabs50"],
  emp0,
  0,
  emp1,
  1000,
  emp2,
  2000,
  emp3,
  3000,
  emp4
];
let empColorPER = ["step",
  ["get", "emppct50"],
  emp1,
  0.05,
  emp2,
  0.25,
  emp3,
  0.5,
  emp4
];
let empColorSQM = ["step",
  ["get", "empabssq"],
  emp1,
  500,
  emp2,
  1500,
  emp3,
  3000,
  emp4,
  6000,
  emp5
];

const secondaryMapLayers = {
  pop: {
    id: "pop",
    type: "fill",
    source: "MCD",
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
    source: "MCD",
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
    source: "MCD",
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
    source: "MCD",
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
    source: "MCD",
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
    source: "MCD",
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
    source: "MCD",
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
    source: "MCD",
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
