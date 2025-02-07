const sources = {
  boundaries: {
    type: "vector",
    url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
  },
  MCD: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/demographics/forecast_2050_mcd_v2/FeatureServer/0/query?where=1%3D1&outFields=*&geometryPrecision=6&outSR=4326&f=geojson",
    generateId: true,
  },
  CNTY: {
    type: "geojson",
    data: "https://arcgis.dvrpc.org/portal/rest/services/demographics/forecast_2050_county_v2/FeatureServer/0/query?where=1%3D1&outFields=*&geometryPrecision=5&outSR=4326&f=geojson",
    generateId: true,
  },
};

export default sources;
