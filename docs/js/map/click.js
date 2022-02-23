const handleDistrict = function (props,map) {

    var info =
      "<div id='d-name'><h3 style='margin-top:0;'>" +
      props.mun_name  +
      ", </span><small><span> " +
      props.co_name  +
      "</span><span></span> County, <span>" +
      props.state +
      "</span></small></h3></div>"+
      '<table id="crashtable">'+
      // '<tr><b><font color="#0074ad">'+ (props.mun_name )+' , '+(props.co_name)+' County</font></b></tr>'+
      'Absolute Change (2015-2045): <b>'+numeral(props.popabs50).format('0,0')+'</b></br>'+
      'Percent Change (2015-2045): <b>'+numeral(props.poppct50).format('0.00%')+
      '</b><br>Absolute Change per Square Mile (2015-2045): <b>'+numeral(props.popabssq).format('0,0')+'</b>'+
      '<tbody>'+
      '<tr class="odd">'+
      '<th>2015 Population</th><td>' + numeral(props.pop15).format('0,0') + '</td>' + 
      '<tr class="even">'+
      '<th>2020 Forecast</th><td>' + numeral(props.pop20).format('0,0')+ '</td>' + 
      '<tr class="odd">'+
      '<th>2025 Forecast</th><td>' + numeral(props.pop25).format('0,0')+ '</td>' + 
      '<tr class="even">'+
      '<th>2030 Forecast</th><td>' + numeral(props.pop30).format('0,0')+ '</td>' + 
      '<tr class="odd">'+
      '<th>2035 Forecast</th><td>' + numeral(props.pop35).format('0,0')+ '</td>' + 
      '<tr class="even">'+
      '<th>2040 Forecast</th><td>' + numeral(props.pop40).format('0,0')+ '</td>' + 
      '<tr class="odd">'+
      '<th>2045 Forecast</th><td>' + numeral(props.pop45).format('0,0')+ '</td>' + 
      '<tr class="even">'+
      '<th>2050 Forecast</th><td>' + numeral(props.pop50).format('0,0')+ '</td>' + 
      '</tbody>'+						
        '<table>'; 
  
    document.getElementById("resultsPOP").innerHTML = info;

    var infoEMP =
    "<div id='d-name'><h3 style='margin-top:0;'>" +
    props.mun_name  +
    ", </span><small><span> " +
    props.co_name  +
    "</span><span></span> County, <span>" +
    props.state +
    "</span></small></h3></div>"+
    '<table id="crashtable">'+
    // '<tr><b><font color="#0074ad">'+ (props.mun_name )+' , '+(props.co_name)+' County</font></b></tr>'+
    'Absolute Change (2015-2045): <b>'+numeral(props.empabs50).format('0,0')+'</b></br>'+
    'Percent Change (2015-2045): <b>'+numeral(props.emppct50).format('0.00%')+
    '</b><br>Absolute Change per Square Mile (2015-2045): <b>'+numeral(props.empabssq).format('0,0')+'</b>'+
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

  document.getElementById("resultsEMP").innerHTML = infoEMP;
  
    // map.flyTo({
    //   // created a parameter that pulls the lat/long values from the geojson
    //   center: coordinates,
    //   pitch: 20,
    //   speed: 0.7,
    //   zoom: 15,
    // });

    // charts
    let popForecast = [
      props.pop15,
      props.pop20,
      props.pop25,
      props.pop30,
      props.pop35,
      props.pop40,
      props.pop45,
      props.pop50,
    ];
    updatepopForecastChart(popForecast);

    let empForecast = [
      props.emp15,
      props.emp20,
      props.emp25,
      props.emp30,
      props.emp35,
      props.emp40,
      props.emp45,
      props.emp50,
    ];
    updateempForecastChart(empForecast);
  
    function updatepopForecastChart(Values) {
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

  function updateempForecastChart(Values) {
    var CntyChart = {
      chart: {
          renderTo: 'Chart2',
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
  };


  const handleCounty = function (props) {

    // charts
    let popForecast = [
      props.pop15,
      props.pop20,
      props.pop25,
      props.pop30,
      props.pop35,
      props.pop40,
      props.pop45,
      props.pop50,
    ];
    updatepopForecastChart(popForecast);

    let empForecast = [
      props.emp15,
      props.emp20,
      props.emp25,
      props.emp30,
      props.emp35,
      props.emp40,
      props.emp45,
      props.emp50,
    ];
    updateempForecastChart(empForecast);
  
    function updatepopForecastChart(Values) {
      var CntyChart = {
        chart: {
            renderTo: 'Chart3',
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

  function updateempForecastChart(Values) {
    var CntyChart = {
      chart: {
          renderTo: 'Chart4',
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
  };
  
export {handleDistrict, handleCounty};