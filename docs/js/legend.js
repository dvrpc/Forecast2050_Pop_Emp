import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];
  // console.log(legendConfig["truck-v3"]);
  if (legendDetails.label === "pop") {
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <span><b>Population Forecast</b></span>
  <div id="legend-box-Item" class="circle pop-1"><span>Less Than 10,000</span></div>
  <div id="legend-box-Item" class="circle pop-2"><span>10,000 to 24,999</span></div>
  <div id="legend-box-Item" class="circle pop-3"><span>25,000 to 49,999</span></div>
  <div id="legend-box-Item" class="circle pop-4"><span>50,000 to 99,999</span></div>
  <div id="legend-box-Item" class="circle pop-5"><span>100,000 or More</span></div>
</div>
 </div>
`;
  }
  else if (legendDetails.label === "popABS") {
    return `
  <div class="flex-row flex-align-center legend-item">
  <div id="legend-box2">
  <span><b>Absolute Change</b></span>
  <div id="legend-box-Item" class="circle popABS-1"><span>Less Than 0</span></div>
  <div id="legend-box-Item" class="circle popABS-2"><span>0 to 1,999</span></div>
  <div id="legend-box-Item" class="circle popABS-3"><span>2,000 to 3,999</span></div>
  <div id="legend-box-Item" class="circle popABS-4"><span>4,000 to 5,999</span></div>
  <div id="legend-box-Item" class="circle popABS-5"><span>6,000 or More</span></div>
</div>
 </div>
`;
}
else if (legendDetails.label === "emp") {
  return `
<div class="flex-row flex-align-center legend-item">
<div id="legend-box2">
<span><b>Employment Forecast</b></span>
<div id="legend-box-Item" class="circle emp-1"><span>Less Than 5,000</span></div>
<div id="legend-box-Item" class="circle emp-2"><span>5,000 to 9,999</span></div>
<div id="legend-box-Item" class="circle emp-3"><span>10,000 to 19,999</span></div>
<div id="legend-box-Item" class="circle emp-4"><span>20,000 to 39,999</span></div>
<div id="legend-box-Item" class="circle emp-5"><span>40,000 or More</span></div>
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
