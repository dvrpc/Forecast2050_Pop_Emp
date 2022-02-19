import makeMap from './map/map.js'
import sources from './map/mapSources.js'
import layers from './map/mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
import handleLegend from './legend.js'
// import { wire_layer_hover } from "./map/hover.js";

const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const legendContainer = document.getElementById('legend-container')
const toggleForm = document.getElementById('toggle-form')
const inputs = toggleForm.querySelectorAll('input')
const selects = toggleForm.querySelectorAll('select')


// map
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
  //  for(const layer in layers) map.addLayer(layers[layer], 'road-label')
    for(const layer in layers) map.addLayer(layers[layer])

    // set default form state
    let activeInputs = handleForms('input', inputs, map)
    let activeSelects = handleForms('select', selects, map)
    let allActiveToggles = [... activeSelects, ... activeInputs]

    handleLegend(allActiveToggles, legendContainer)
  //  map.moveLayer('pop');
    // handle simple toggles - layers on/off and corresponding legend items on/off
    toggleForm.onchange = () => {
        activeInputs = handleForms('input', inputs, map)
        activeSelects = handleForms('select', selects, map)
        allActiveToggles = [... activeSelects, ... activeInputs]

        handleLegend(allActiveToggles, legendContainer)
    }

    // wire_layer_hover(map);
    // When the map loads, add the data from the USGS earthquake API as a source
 map.addSource('MCD', {
  'type': 'geojson',
  'data':'https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson',
  //'data':MCD, // Use the sevenDaysAgo variable to only retrieve quakes from the past week
  'generateId': true // This ensures that all features have unique IDs
  });

  map.addLayer({
    id: "MCD",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-color": [ 'case',
      ['boolean', ['feature-state', 'hover'], false],
      '#FFD662', '#0078ae'
      ],
      "fill-outline-color": [ 'case',
      ['boolean', ['feature-state', 'hover'], false],
      '#39398e', '#fff'
      ],
      'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        .90, 0
        ]
    }
  });

var hoveredStateId = null;
// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.
map.on('mousemove', 'MCD', (e) => {
  if (e.features.length > 0) {
  if (hoveredStateId !== null) {
  map.setFeatureState(
  { source: 'MCD', id: hoveredStateId },
  { hover: false }
  );
  }
  hoveredStateId = e.features[0].id;
  map.setFeatureState(
  { source: 'MCD', id: hoveredStateId },
  { hover: true }
  );
  }
  });
   
  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on('mouseleave', 'MCD', () => {
  if (hoveredStateId !== null) {
  map.setFeatureState(
  { source: 'MCD', id: hoveredStateId },
  { hover: false }
  );
  }
  hoveredStateId = null;
  });

  map.on('click','MCD', (e) => {
    // mapbox function calling of geojson properties
    var props = e.features[0].properties;
   // var coordinates = marker.features[0].geometry.coordinates;
    var FID = e.features[0].id;
  //  console.log(FID);
      $("#chart2013").css("display", "block");
      $("#data-wrapper").css("display", "block");
      // handleSidebarDisplay()
      handleDistrict(props,map)
      // handleHighlight(FID)
  });
  // pull click event into standalone function in order to apply to both form submit and map click
// added 2 parameters props and coordinates to handle the different approaches to working with GeoJson features
const handleDistrict = function (props,map) {

  var info =
    "<div id='d-name'><h3 style='margin-top:0;'>" +
    props.mun_name  +
    "</span><small><span> " +
    props.co_name  +
    "</span><span></span> County, <span>" +
    props.state +
    "</span></small></h3></div>"+
    '<table id="crashtable">'+
    // '<tr><b><font color="#0074ad">'+ (props.mun_name )+' , '+(props.co_name)+' County</font></b></tr>'+
    'Absolute Change (2015-2045): <b>'+numeral(props.ABS2045).format('0,0')+'</b></br>'+
    'Percent Change (2015-2045): <b>'+numeral(props.PER2045).format('0.00%')+
    '</b><br>Absolute Change per Square Mile (2015-2045): <b>'+numeral(props.ABCHSQMI).format('0,0')+'</b>'+
    '<tbody>'+
    '<tr class="odd">'+
    '<th>2015 Employment</th><td>' + numeral(props.emp15).format('0,0') + '</td>' + 
    '<tr class="even">'+
    '<th>2020 Forecast</th><td>' + numeral(props.emp20).format('0,0')+ '</td>' + 
    '<tr class="odd">'+
    '<th>2025 Forecast</th><td>' + numeral(props.emp25).format('0,0')+ '</td>' + 
    '<tr class="even">'+
    '<th>2030 Forecast</th><td>' + numeral(props.emp30).format('0,0')+ '</td>' + 
    '<tr class="odd">'+
    '<th>2035 Forecast</th><td>' + numeral(props.emp35).format('0,0')+ '</td>' + 
    '<tr class="even">'+
    '<th>2040 Forecast</th><td>' + numeral(props.emp40).format('0,0')+ '</td>' + 
    '<tr class="odd">'+
    '<th>2045 Forecast</th><td>' + numeral(props.emp45).format('0,0')+ '</td>' + 
    '<tr class="even">'+
    '<th>2050 Forecast</th><td>' + numeral(props.emp50).format('0,0')+ '</td>' + 
    '</tbody>'+						
      '<table>'; 

  document.getElementById("resultsHeaderMCD").innerHTML = info;

  // map.flyTo({
  //   // created a parameter that pulls the lat/long values from the geojson
  //   center: coordinates,
  //   pitch: 20,
  //   speed: 0.7,
  //   zoom: 15,
  // });
  // charts
  let Retail = [
    props.emp15,
    props.emp20,
    props.emp25,
    props.emp30,
    props.emp35,
    props.emp40,
    props.emp45,
    props.emp50,
  ];
  updateRetailChart(Retail);

  function updateRetailChart(Values) {
    var CntyChart = {
      chart: {
          renderTo: 'Chart1',
          type: 'line',
          backgroundColor: 'white',
          height: 250,
          marginTop: 10,
         // width: 290,
      },
      title: {
          text: '',
          x: -0 //center
        },	
     xAxis: {
          categories: ['2015', '2020', '2025', '2030', '2035', '2040','2045','2050']
      },
      colors: ['#0074ad'],
          yAxis: {
              title: {
                  text: 'Population'
              }
          },
     legend:{
    enabled: false
  },
   tooltip: {
          formatter:function(){

              return Highcharts.numberFormat(this.point.y,0,',',',')+'</b><br/>';
          }
      },
      credits: {
          enabled: false
      },
      series: [{
         name:'Population',
     id: 'Values',
         data: []
      }]
  };
  var Labels = ["2015", "2020", "2025", "2030","2035", "2040", "2045", "2050"],
  countData2 = [];
  for (var i = 0; i < Values.length; i++){
              countData2.push({
                  name: Labels[i],
                  y: Values[i]})
          }
  CntyChart.series[0].data = countData2;
  var chart2 = new Highcharts.Chart(CntyChart)
}
}

}) 
// loading spinner 
map.on('idle', () => {
    const spinner = map['_container'].querySelector('.lds-ring')
    spinner.classList.remove('lds-ring-active')
})



// modal
handleModal(modal, modalToggle, closeModal)
