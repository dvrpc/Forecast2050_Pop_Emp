// HOVER AccessScore
const wire_layer_hover = (map) => {
  var stationID = null;

  map.on("mousemove", "MCD", (e) => {
    map.getCanvas().style.cursor = "pointer";
    // var coordinates = e.features[0].geometry.coordinates.slice();
    // var description = '<h3>'+ e.features[0].properties.station +' : '+e.features[0].properties.AS_SCORE+'</h3>';
    // // var description = '<h3>'+ e.features[0].properties.station +' : '+e.features[0].properties.AS_SCORE+'</h3>';
    // var Popclass = 'station-popup';

    if (e.features.length > 0) {
      // When the mouse moves over the station layer, update the
      // feature state for the feature under the mouse
      if (stationID) {
        map.removeFeatureState({
          source: "MCD",
          id: stationID,
        });
      }
      stationID = e.features[0].id;
      map.setFeatureState(
        {
          source: "MCD",
          id: stationID,
        },
        {
          hover: true,
        }
      );
    }
    // Populate the popup and set its coordinates
    // based on the feature found.
    // popup.setLngLat(coordinates).setHTML(description).addTo(map);
    //  createPopUp(e.features[0]);
  });

  // When the mouse leaves the station layer, update the eature state of the previously hovered feature
  // Hover Leave - AccessScore
  map.on("mouseleave", "MCD", function () {
    if (stationID) {
      map.setFeatureState(
        {
          source: "MCD",
          id: stationID,
        },
        {
          hover: false,
        }
      );
    }
    stationID = null;
    // Reset the cursor style
    // close popup
    map.getCanvas().style.cursor = "";
    closePopUp();
    // popup.remove();
  });

  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    // var popup = new mapboxgl.Popup({ closeOnClick: false })
    new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>${currentFeature.properties.mun_name}<br><small>${currentFeature.properties.co_name}</small></h3><h4>AccessScore: ${currentFeature.properties.AS_SCORE}</h4>`
      )
      .addTo(map);
  }

  function closePopUp() {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
  }
  // map.on("mousemove", "transit_stops", function (e) {
  //   map.getCanvas().style.cursor = "pointer";
  //   createPopUpBUS(e.features[0]);
  // });

  // // change mouse tip upon leaving feature
  // map.on("mouseleave", "transit_stops", function (e) {
  //   closePopUp();
  // });
};
export { wire_layer_hover };
