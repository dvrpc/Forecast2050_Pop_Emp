const handleDistrict = function (props, map) {
  if (props.mun_name === "Pine Valley Borough") {
    var mcdInfo = `
      <h1>${props.mun_name}<br>
      <small>${props.co_name} County, ${props.state}</small>
      </h1>
      <i>As of 2020, Pine Valley has been incorporated into Pine Hill but that data is not reflected here.</i>
      `;
  } else {
    var mcdInfo = `
      <h2 class='sidebar-h2-large'>
        ${props.mun_name}
        <small>${props.co_name} County, ${props.state}</small>
      </h2>
      `;
  }
  document.getElementById("mcdName").innerHTML = mcdInfo;

  const formatPercent = function (val, dec) {
    return val.toLocaleString("en", {
      style: "percent",
      minimumFractionDigits: dec,
    });
  };

  const formatNumber = function (val) {
    return val.toLocaleString("en-US", {
      maximumFractionDigits: 0,
    });
  };

  var years = ["20", "25", "30", "35", "40", "45", "50"];
  var emp = {};
  var pop = {};
  years.map(function (year) {
    let _popabs = props[`pop${year}`] - props[`pop${parseInt(year) - 5}`];
    pop[year] = {
      abs: formatNumber(_popabs),
      pct: formatPercent(_popabs / props[`pop${parseInt(year) - 5}`], 1),
    };
    let _empabs = props[`emp${year}`] - props[`emp${parseInt(year) - 5}`];
    emp[year] = {
      abs: formatNumber(_empabs),
      pct: formatPercent(_empabs / props[`emp${parseInt(year) - 5}`], 1),
    };
  });

  const forecastRows = function () {
    let _tablefrag = "";
    years.map(function (year) {
      _tablefrag += `
      <tr>
        <th>20${year}</th>
        <td>${formatNumber(props[`pop${year}`])}</td>
        <td>${pop[year].abs} (${pop[year].pct})</td>
        <td>${formatNumber(props[`emp${year}`])}</td>
        <td>${emp[year].abs} (${emp[year].pct})</td>
      </tr>
      `;
    });

    return _tablefrag;
  };

  var info = `<div class='table-wrapper'>
      <table class='crashtable'>
        <h3 class='sidebar-group-header'>Forecasts (2015-2050)</h3>
        <tbody>
          <tr>
            <td></td>
            <th class="th-true">Population</th>
            <th class="th-true">Employment</th>
          <tr>
            <th>Absolute Change</th>
            <td>${formatNumber(props.popabs50)}</td>
            <td>${formatNumber(props.empabs50)}</td>
          </tr>
          <tr>
            <th>Percent Change</th>
            <td>${formatPercent(props.poppct50, 2)}</td>
            <td>${formatPercent(props.emppct50, 2)}</td>
          </tr>
          <tr>
            <th>Absolute Change per Square Mile</th>
            <td>${formatNumber(props.popabssq)}</td>
            <td>${formatNumber(props.empabssq)}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class='table-wrapper'>
      <table class='crashtable'>
        <h3 class='sidebar-group-header'>Five-year Increment Forecasts (2015 to 2050)</h3>
        <tbody>
          <tr>
            <td></td>
            <th class="th-true">Population</th>
            <th class="th-true">Change in Population</th>
            <th class="th-true">Employment</th>
            <th class="th-true">Change in Employment</th>
          </tr>
          <tr>
            <th>2015</th>
            <td>${formatNumber(props.pop15)}</td>
            <td>-</td>
            <td>${formatNumber(props.emp15)}</td>
            <td>-</td>
          </tr>
          ${forecastRows()}
        </tbody>
      </table>
    </div>`;

  document.getElementById("results").innerHTML = info;

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
