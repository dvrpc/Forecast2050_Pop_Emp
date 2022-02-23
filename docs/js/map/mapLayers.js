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
  // muniOutline: {
  //   id: "municipality-outline",
  //   type: "line",
  //   source: "boundaries",
  //   "source-layer": "municipalities",
  //   paint: {
  //     "line-width": 0.5,
  //     "line-color": "#748388",
  //   },
  // },
  // add default layers here
};

export default layers;
