import makeMap from "./map/map.js";
import sources from "./map/mapSources.js";
import layers from "./map/mapLayers.js";
import handleModal from "./modal.js";
import handleForms from "./forms.js";
import handleLegend from "./legend.js";
// import { wire_layer_hover } from "./map/hover.js";
import { handleDistrict, handleCounty } from "./map/click.js";

const modal = document.getElementById("modal");
const modalToggle = document.getElementById("modal-toggle");
const closeModal = document.getElementById("close-modal");
const legendContainer = document.getElementById("legend-container");
const toggleForm = document.getElementById("toggle-form");
const inputs = toggleForm.querySelectorAll("input");
const selects = toggleForm.querySelectorAll("select");

function generatePopup(popup, e) {
  var props = e.features[0].properties;
  popup
    .setLngLat(e.lngLat)
    .setHTML(
      "<p>" +
        props.mun_name +
        "</p><hr /><p>" +
        props.co_name +
        " County, " +
        props.state +
        "</p>"
    )
    .addTo(map);
}

var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: true,
});
// map
const map = makeMap();

map.on("load", () => {
  for (const source in sources) map.addSource(source, sources[source]);
  //  for(const layer in layers) map.addLayer(layers[layer], 'road-label')
  for (const layer in layers) map.addLayer(layers[layer]);

  // set default form state
  let activeInputs = handleForms("input", inputs, map);
  let activeSelects = handleForms("select", selects, map);
  let allActiveToggles = [...activeSelects, ...activeInputs];

  handleLegend(allActiveToggles, legendContainer);
  //  map.moveLayer('pop');
  // handle simple toggles - layers on/off and corresponding legend items on/off
  toggleForm.onchange = () => {
    activeInputs = handleForms("input", inputs, map);
    activeSelects = handleForms("select", selects, map);
    allActiveToggles = [...activeSelects, ...activeInputs];

    handleLegend(allActiveToggles, legendContainer);
  };

  var hoveredStateId = null;
  var mcdID = null;
  // When the user moves their mouse over the state-fill layer, we'll update the
  // feature state for the feature under the mouse.
  map.on("mousemove", "MCD-line", (e) => {
    if (e.features.length > 0) {
      if (hoveredStateId !== null) {
        map.setFeatureState(
          { source: "MCD", id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = e.features[0].id;
      map.setFeatureState(
        { source: "MCD", id: hoveredStateId },
        { hover: true }
      );
    }
  });

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on("mouseleave", "MCD-line", () => {
    if (hoveredStateId !== null) {
      map.setFeatureState(
        { source: "MCD", id: hoveredStateId },
        { hover: false }
      );
    }
    hoveredStateId = null;
  });

  map.on("mousemove", "MCD", (e) => {
    if (e.features.length > 0) {
      if (hoveredStateId !== null) {
        map.setFeatureState(
          { source: "MCD", id: hoveredStateId },
          { hover: false }
        );
      }
      hoveredStateId = e.features[0].id;
      map.setFeatureState(
        { source: "MCD", id: hoveredStateId },
        { hover: true }
      );
    }
    generatePopup(popup, e);
  });

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on("mouseleave", "MCD", () => {
    if (hoveredStateId !== null) {
      map.setFeatureState(
        { source: "MCD", id: hoveredStateId },
        { hover: false }
      );
    }
    hoveredStateId = null;
    popup.remove();
  });

  map.on("click", "MCD", (e) => {
    // mapbox function calling of geojson properties
    document.getElementById("mcdStart").style.display = "none";
    document.getElementById("mcdDetails").style.display = "inline-block";
    mcdID = e.features[0].properties.geoid;
    var props = e.features[0].properties;
    if (mcdID) {
      map.setFilter("muniSelect", ["==", "geoid", mcdID]);
      map.setLayoutProperty("muniSelect", "visibility", "visible");
    }
    handleDistrict(props, map);
  });

  map.on("click", "CNTY", (e) => {
    var props = e.features[0].properties;
    handleCounty(props);
  });
});
// End Map Load
// loading spinner
map.on("idle", () => {
  const spinner = map["_container"].querySelector(".lds-ring");
  spinner.classList.remove("lds-ring-active");
});
// modal
handleModal(modal, modalToggle, closeModal);
