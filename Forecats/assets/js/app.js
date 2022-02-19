// import "../css/main.css";
// import "../css/print.css";
// import * as numeral from "./numeral.js"

// var retail, districts, d2;
const searchForm = document.getElementById('search')

var mcdSearch = {};

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
  $("#aboutModal").modal("show");

  $('.form-control').change(function() {
    // If the load_image option was selected, call the loadImage() function
    if ($(this).val() == 'load_image') {
     // loadImage();
     // currentLayer = 'EMP2045';
      map.setPaintProperty('districts', "fill-color", mapColor);
      document.getElementById("legend-box1").style.display = "block"
      document.getElementById("legend-box2").style.display = "none"
    }
    else {
       if ($(this).val() == 'load_image1') {
     // loadImage1();
    //  currentLayer = 'ABS2045';
    map.setPaintProperty('districts', "fill-color", mapColor2);
    document.getElementById("legend-box1").style.display = "none"
    document.getElementById("legend-box2").style.display = "block"
     }
  }
});

});

mapboxgl.accessToken =
  "pk.eyJ1IjoiY3J2YW5wb2xsYXJkIiwiYSI6ImNqMHdvdnd5MTAwMWEycXBocm4zbXVjZm8ifQ.3zjbFccILu6mL7cOTtp40A";

// This adds the map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v9",
  center: [-75.24, 40.023],
  bearing: 0, // Rotate Philly ~9° off of north, thanks Billy Penn.
  zoom: 8,
  attributionControl: false,
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), ["top-right"]);
map.addControl(new mapboxgl.AttributionControl(), "bottom-right");

// Zoom to Extent
document.getElementById("zoomtoregion").addEventListener("click", function () {
  // handleFullMapDisplay()
  map.flyTo({
    center: [-75.24, 40.023],
    zoom: 8,
    bearing: 0,
    pitch: 0,
    speed: 0.5,
  });

});
// Handles Search Form function
fetch('https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson')
  .then(response => response.json())
  .then (data => {
    var mcd = data;
    mcd.features.forEach(function (geojsonrow) {
      mcdSearch[geojsonrow.properties.mun_name] = geojsonrow
    });
  });
 // .then(data => console.log(data));
 console.log(mcdSearch);

map.on("load", function () {
// add map events here (click, mousemove, etc)

// Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
      className: "station-popup",
      closeButton: false,
      closeOnClick: false
  });

  map.addLayer({
    id: "county",
    type: "line",
    source: {
      type: "vector",
      url: "https://tiles.dvrpc.org/data/dvrpc-municipal.json",
    },
    "source-layer": "county",
    layout: {},
    paint: {
      "line-width": 2,
      "line-color": "#5d5d5d",
    },
    filter: ["==", "dvrpc", "Yes"],
  });

let mapColor = ['interpolate',['linear'],
['get', 'emp45'],
1,'#fef0d9',
1000,'#fdcc8a',
2500,'#fc8d59',
5000,'#e34a33',
10000,'#b30000'
];  

let mapColor2 = ['interpolate',['linear'],
['get', 'emp50'],
1,'#f1eef6',
1000,'#bdc9e1',
2500,'#74a9cf',
5000,'#2b8cbe',
10000,'#045a8d'
];  

map.addLayer({
    id: "districts",
    type: "fill",
    source: {
      type: "geojson",
      'data':'https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson'
   //   data: districts,
    },
    layout: {},
    paint: {
      "fill-outline-color": "#1d1b1b",
      "fill-opacity": .8,
      "fill-color": mapColor       
    }
});

 // When the map loads, add the data from the USGS earthquake API as a source
 map.addSource('d2', {
  'type': 'geojson',
  'data':'https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson',
  //'data':d2, // Use the sevenDaysAgo variable to only retrieve quakes from the past week
  'generateId': true // This ensures that all features have unique IDs
});

  map.addLayer({
    id: "d2",
    type: "fill",
    source: "d2",
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
var polygonID = null;
// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.
map.on('mousemove', 'd2', (e) => {
  if (e.features.length > 0) {
  if (hoveredStateId !== null) {
  map.setFeatureState(
  { source: 'd2', id: hoveredStateId },
  { hover: false }
  );
  }
  hoveredStateId = e.features[0].id;
  map.setFeatureState(
  { source: 'd2', id: hoveredStateId },
  { hover: true }
  );
  }
  });
   
  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on('mouseleave', 'd2', () => {
  if (hoveredStateId !== null) {
  map.setFeatureState(
  { source: 'd2', id: hoveredStateId },
  { hover: false }
  );
  }
  hoveredStateId = null;
  });

map.on('click','districts', (marker) => {
    // mapbox function calling of geojson properties
    var props = marker.features[0].properties;
   // var coordinates = marker.features[0].geometry.coordinates;
    var FID = marker.features[0].id;
  //  console.log(FID);
    if (props.RD_Year == '2021') {
     // alert ("nope");
      $("#chart2013").css("display", "none");
      $("#data-wrapper").css("display", "none");
      // handleSidebarDisplay()
      handleDistrict(props,map)
      handleHighlight(FID)
    } else {
      $("#chart2013").css("display", "block");
      $("#data-wrapper").css("display", "block");
      // handleSidebarDisplay()
      handleDistrict(props,map)
      handleHighlight(FID)
    }
});  


searchForm.onsubmit = function (e) {
  e.preventDefault()
  const input = e.target.children[0].children[0]
  const searched = input.value
  const location = Search[searched]
  
  if(!location) {
    alert('Please select a value from the dropdown list')
    input.value = ''
    return
  }
 
  // non-mapbox function calling the geojson properties and coordinates that get pushed to the handleDisctrict function
  var props = location.properties;
  var coordinates = location.geometry.coordinates;
  var FID = props.RETAIL_ID;
 // console.log(FID);

  if (props.RD_Year == '2021') {
     // alert ("nope");
      $("#chart2013").css("display", "none");
      $("#data-wrapper").css("display", "none");
      // handleSidebarDisplay()
      handleDistrict(props,coordinates,map)
      handleHighlight(FID-1)
    } else {
      $("#chart2013").css("display", "block");
      $("#data-wrapper").css("display", "block");
      // handleSidebarDisplay()
      handleDistrict(props,coordinates,map)
      handleHighlight(FID-1)
    }
}

const handleHighlight = function (FID){

  if (FID > 0) {
    if(polygonID) { // Need to change this
        map.removeFeatureState({
            source: 'd2',
            id: polygonID
        });
    }
   // polygonID = marker.features[0].id; // Get generated ID
    polygonID = FID;
    map.setFeatureState({
        source: 'd2',
        id: polygonID
    }, {
        click: true
    });
}
// console.log(polygonID);
}

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
/*      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: true
          }
      },*/
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
// add typeahead
const populateOptions = function (obj) {
  const datalist = document.getElementById('mcd-list')
  const frag = document.createDocumentFragment()
  
  Object.keys(obj)
  .sort()
  .forEach(function (el) {
    const option = document.createElement("option");
    option.value = el;
    frag.appendChild(option);
  });
datalist.appendChild(frag);
}

populateOptions(mcdSearch)

}); 