const handleDistrict = function (props, map) {
  if (props.mun_name === "Pine Valley Borough") {
    var mcdInfo =
      "<h1>" +
      props.mun_name +
      "<br><small><span> " +
      props.co_name +
      "</span><span></span> County, <span>" +
      props.state +
      "</span></small></h1><i>As of 2020, Pine Valley has been incorporated into Pine Hill but that data is not reflected here.</i>";
  } else {
    var mcdInfo =
      "<h2 class='sidebar-h2-large'>" +
      props.mun_name +
      "<small><span> " +
      props.co_name +
      "</span><span></span> County, <span>" +
      props.state +
      "</span></small></h2>";
  }
  document.getElementById("mcdName").innerHTML = mcdInfo;

  var popABS20 = props.pop20 - props.pop15;
  var popPER20 = popABS20 / props.pop15;
  var popABS25 = props.pop25 - props.pop20;
  var popPER25 = popABS25 / props.pop20;
  var popABS30 = props.pop30 - props.pop25;
  var popPER30 = popABS30 / props.pop25;
  var popABS35 = props.pop35 - props.pop30;
  var popPER35 = popABS35 / props.pop30;
  var popABS40 = props.pop40 - props.pop35;
  var popPER40 = popABS40 / props.pop35;
  var popABS45 = props.pop45 - props.pop40;
  var popPER45 = popABS45 / props.pop40;
  var popABS50 = props.pop50 - props.pop45;
  var popPER50 = popABS50 / props.pop45;

  var empABS20 = props.emp20 - props.emp15;
  var empPER20 = empABS20 / props.emp15;
  var empABS25 = props.emp25 - props.emp20;
  var empPER25 = empABS25 / props.emp20;
  var empABS30 = props.emp30 - props.emp25;
  var empPER30 = empABS30 / props.emp25;
  var empABS35 = props.emp35 - props.emp30;
  var empPER35 = empABS35 / props.emp30;
  var empABS40 = props.emp40 - props.emp35;
  var empPER40 = empABS40 / props.emp35;
  var empABS45 = props.emp45 - props.emp40;
  var empPER45 = empABS45 / props.emp40;
  var empABS50 = props.emp50 - props.emp45;
  var empPER50 = empABS50 / props.emp45;

  var info =
    "<div class='table-wrapper'>" +
      "<table class='crashtable'>" +
        "<h3 class='sidebar-group-header'>Forecasts (2015-2050)</h3>" +
        "<tbody>" +
          '<tr class="odd">' +
            '<td></td><th class="th-true">Population</th><th class="th-true">Employment</th>' +
          '<tr class="even">' +
            "<th>Absolute Change</th><td>" +
            numeral(props.popabs50).format("0,0") +
            "</td><td>" +
            numeral(props.empabs50).format("0,0") +
            "</td>" +
            '<tr class="odd">' +
            "<th>Percent Change</th><td>" +
            numeral(props.poppct50).format("0.00%") +
            "</td><td>" +
            numeral(props.emppct50).format("0.00%") +
            "</td>" +
            '<tr class="even">' +
            "<th>Absolute Change per Square Mile</th><td>" +
            numeral(props.popabssq).format("0,0") +
            "</td><td>" +
            numeral(props.empabssq).format("0,0") +
            "</td>" +
        "</tbody>" +
      "</table>" +
    "</div>" +
    "<div class='table-wrapper'>" +
      "<table class='crashtable'>" +
        "<h3 class='sidebar-group-header'>Five-year Increment Forecasts (2015 to 2050)</h3>" +
        "<tbody>" +
          '<tr class="odd">' +
          '<td></td><th class="th-true">Population</th><th class="th-true">Change in Population</th class="th-true"><th class="th-true">Employment</th><th class="th-true">Change in Employment</th>' +
          '<tr class="even">' +
          "<th>2015</th><td>" +
          numeral(props.pop15).format("0,0") +
          "</td><td>-</td><td>" +
          numeral(props.emp15).format("0,0") +
          "</td><td>-</td>" +
          '<tr class="odd">' +
          "<th>2020</th><td>" +
          numeral(props.pop20).format("0,0") +
          "</td><td>" +
          numeral(popABS20).format("0,0") +
          " (" +
          numeral(popPER20).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp20).format("0,0") +
          "</td><td>" +
          numeral(empABS20).format("0,0") +
          " (" +
          numeral(empPER20).format("0.0%") +
          ")</td>" +
          '<tr class="even">' +
          "<th>2025</th><td>" +
          numeral(props.pop25).format("0,0") +
          "</td><td>" +
          numeral(popABS25).format("0,0") +
          " (" +
          numeral(popPER25).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp25).format("0,0") +
          "</td><td>" +
          numeral(empABS25).format("0,0") +
          " (" +
          numeral(empPER25).format("0.0%") +
          ")</td>" +
          '<tr class="odd">' +
          "<th>2030</th><td>" +
          numeral(props.pop30).format("0,0") +
          "</td><td>" +
          numeral(popABS30).format("0,0") +
          " (" +
          numeral(popPER30).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp30).format("0,0") +
          "</td><td>" +
          numeral(empABS30).format("0,0") +
          " (" +
          numeral(empPER30).format("0.0%") +
          ")</td>" +
          '<tr class="even">' +
          "<th>2035</th><td>" +
          numeral(props.pop35).format("0,0") +
          "</td><td>" +
          numeral(popABS35).format("0,0") +
          " (" +
          numeral(popPER35).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp35).format("0,0") +
          "</td><td>" +
          numeral(empABS35).format("0,0") +
          " (" +
          numeral(empPER35).format("0.0%") +
          ")</td>" +
          '<tr class="odd">' +
          "<th>2040</th><td>" +
          numeral(props.pop40).format("0,0") +
          "</td><td>" +
          numeral(popABS40).format("0,0") +
          " (" +
          numeral(popPER40).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp40).format("0,0") +
          "</td><td>" +
          numeral(empABS40).format("0,0") +
          " (" +
          numeral(empPER40).format("0.0%") +
          ")</td>" +
          '<tr class="even">' +
          "<th>2045</th><td>" +
          numeral(props.pop45).format("0,0") +
          "</td><td>" +
          numeral(popABS45).format("0,0") +
          " (" +
          numeral(popPER45).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp45).format("0,0") +
          "</td><td>" +
          numeral(empABS45).format("0,0") +
          " (" +
          numeral(empPER45).format("0.0%") +
          ")</td>" +
          '<tr class="odd">' +
          "<th>2050</th><td>" +
          numeral(props.pop50).format("0,0") +
          "</td><td>" +
          numeral(popABS50).format("0,0") +
          " (" +
          numeral(popPER50).format("0.0%") +
          ")</td><td>" +
          numeral(props.emp50).format("0,0") +
          "</td><td>" +
          numeral(empABS50).format("0,0") +
          " (" +
          numeral(empPER50).format("0.0%") +
          ")</td>" +
        "</tbody>" +
      "</table>" +
    "</div>";

  document.getElementById("results").innerHTML = info;

  // map.flyTo({
  //   // created a parameter that pulls the lat/long values from the geojson
  //   center: coordinates,
  //   pitch: 20,
  //   speed: 0.7,
  //   zoom: 15,
  // });

  // charts

  var chartHeader =
    "<h3 class='sidebar-group-header'>" + props.mun_name + "</h3>";
  document.getElementById("chartMCD-header").innerHTML = chartHeader;

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
  updatepopForecastChart(popForecast, empForecast);

  function updatepopForecastChart(Values, Values2) {
    var CntyChart = {
      chart: {
        renderTo: "Chart1",
        type: "line",
        backgroundColor: "white",
        height: 250,
        marginTop: 10,
        // width: 290,
      },
      title: {
        text: "",
        x: -0, //center
      },
      xAxis: {
        categories: [
          "2015",
          "2020",
          "2025",
          "2030",
          "2035",
          "2040",
          "2045",
          "2050",
        ],
      },
      colors: ["#0074ad", "#54278f"],
      yAxis: {
        title: {
          text: "Totals",
        },
      },
      legend: {
        enabled: true,
        x: 15,
        y: 15,
      },
      tooltip: {
        formatter: function () {
          return (
            Highcharts.numberFormat(this.point.y, 0, ",", ",") + "</b><br/>"
          );
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Population",
          //  id: 'Values',
          data: Values,
        },
        {
          name: "Employment",
          id: "Values",
          data: Values2,
        },
      ],
    };
    var Labels = [
        "2015",
        "2020",
        "2025",
        "2030",
        "2035",
        "2040",
        "2045",
        "2050",
      ],
      countData2 = [];
    for (var i = 0; i < Values.length; i++) {
      countData2.push({
        name: Labels[i],
        y: Values[i],
      });
    }
    CntyChart.series[0].data = countData2;
    var chart2 = new Highcharts.Chart(CntyChart);
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
  updatepopForecastChart(popForecast, empForecast);

  var chartHeader2 =
    "<h3 class='sidebar-group-header'>" + props.co_name + " County</h3>";
  document.getElementById("chartCO-header").innerHTML = chartHeader2;

  function updatepopForecastChart(Values, Values2) {
    var CntyChart = {
      chart: {
        renderTo: "Chart3",
        type: "line",
        backgroundColor: "white",
        height: 250,
        marginTop: 10,
        // width: 290,
      },
      title: {
        text: "",
        x: -0, //center
      },
      xAxis: {
        categories: [
          "2015",
          "2020",
          "2025",
          "2030",
          "2035",
          "2040",
          "2045",
          "2050",
        ],
      },
      colors: ["#0074ad", "#54278f"],
      yAxis: {
        title: {
          text: "Totals",
        },
      },
      legend: {
        enabled: true,
        x: 15,
        y: 15,
      },
      tooltip: {
        formatter: function () {
          return (
            Highcharts.numberFormat(this.point.y, 0, ",", ",") + "</b><br/>"
          );
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Population",
          //  id: 'Values',
          data: Values,
        },
        {
          name: "Employment",
          id: "Values",
          data: Values2,
        },
      ],
    };
    var Labels = [
        "2015",
        "2020",
        "2025",
        "2030",
        "2035",
        "2040",
        "2045",
        "2050",
      ],
      countData2 = [];
    for (var i = 0; i < Values.length; i++) {
      countData2.push({
        name: Labels[i],
        y: Values[i],
      });
    }
    CntyChart.series[0].data = countData2;
    var chart2 = new Highcharts.Chart(CntyChart);
  }
};

export { handleDistrict, handleCounty };
