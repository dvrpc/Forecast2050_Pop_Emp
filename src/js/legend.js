import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];
  // console.log(legendConfig["truck-v3"]);
  if (legendDetails.label === "pop") {
    // alert("PA Future");
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <span><b>Population Forecast</b></span>
  <div id="legend-box-Item" class="circle bl-1"><span>Less Than 10,000</span></div>
  <div id="legend-box-Item" class="circle bl-2"><span>10,000 to 24,999</span></div>
  <div id="legend-box-Item" class="circle bl-3"><span>25,000 to 49,999</span></div>
  <div id="legend-box-Item" class="circle bl-4"><span>50,000 to 99,999</span></div>
  <div id="legend-box-Item" class="circle bl-5"><span>100,000 or more</span></div>
</div>
 </div>
`;
  }
  else if (legendDetails.label === "popABS") {
    // alert("PA Future");
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <span><b>Absolute Change</b></span>
  <div id="legend-box-Item" class="circle bl-1"><span>Less Than 10,000</span></div>
  <div id="legend-box-Item" class="circle bl-2"><span>10,000 to 24,999</span></div>
  <div id="legend-box-Item" class="circle bl-3"><span>25,000 to 49,999</span></div>
  <div id="legend-box-Item" class="circle bl-4"><span>50,000 to 99,999</span></div>
  <div id="legend-box-Item" class="circle bl-5"><span>100,000 or more</span></div>
</div>
 </div>
`;
  }
  return `
  <div class="flex-row flex-align-center legend-item">
              <span class="legend-icon-${legendDetails.iconType}" style="background-color:${legendDetails.color};"></span>
               <span class="legend-text">${legendDetails.label}</span>
 </div>
`;
};

const handleLegend = (vals, container) => {
  let legendItems = "";
  legendItems += vals.map((val) => createLegendItem(val)).join("");

  // wholesale clear and replace
  while (container.firstChild) container.removeChild(container.firstChild);
  container.insertAdjacentHTML("afterbegin", legendItems);
};

export default handleLegend;
