import legendConfig from "./legendConfig.js";

// fncs to handle legends
const createLegendItem = (val) => {
  const legendDetails = legendConfig[val];

  /*
      <div class="flex-row flex-align-center legend-item">
        <div id="legend-box2">
          <span><b>People</b></span>
          <div id="legend-box-Item" class="circle pop-1">
            <span>Less than 10,000</span>
          </div>
          <div id="legend-box-Item" class="circle pop-2">
            <span>10,000 to 24,999</span>
          </div>
          <div id="legend-box-Item" class="circle pop-3">
            <span>25,000 to 49,999</span>
          </div>
          <div id="legend-box-Item" class="circle pop-4">
            <span>50,000 to 99,999</span>
          </div>
          <div id="legend-box-Item" class="circle pop-5">
            <span>100,000 or More</span>
          </div>
        </div>
      </div>
  */

  if (legendDetails.label === "pop") {
    return `
        <div class="flex-column">
          <h3 class="legend-h3">People</h3>
          
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-1"></span>
            <span>Less than 10,000</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-2"></span>  
            <span>10,000 to 24,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-3"></span>  
            <span>25,000 to 49,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-4"></span>
            <span>50,000 to 99,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-5"></span>  
            <span>100,000 or More</span>
          </div>
        </div>
    `;
  } else if (legendDetails.label === "popABS") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">People</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popABS-1"></span>
            <span>Loss of Population</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popABS-2"></span>
            <span>0 to 1,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popABS-3"></span>
            <span>2,000 to 3,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popABS-4"></span>
            <span>4,000 to 5,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popABS-5"></span>
            <span>6,000 or More</span>
          </div>
        </div>
      </div> 
    `;
  } else if (legendDetails.label === "popPER") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Percent Change</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popPER-1"></span>
            <span>Stable (-5% to +5%)</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popPER-2"></span>
            <span>Moderate Growth (+6% to +25%)</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popPER-3"></span>
            <span>Significant Growth (+26% to +50%)</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon popPER-4"></span>
            <span>Exceptional Growth (Above 50%)</span>
          </div>
        </div>
      </div> 
    `;
  } else if (legendDetails.label === "popSQM") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">People per Square Mile</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-1"></span>
            <span>Less than 1,000</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-2"></span>  
            <span>10,000 to 2,499</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-3"></span>  
            <span>25,000 to 4,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-4"></span>
            <span>50,000 to 7,499</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon pop-5"></span>  
            <span>7,500 or More</span>
          </div>
        </div>
      </div>
    `;
  } else if (legendDetails.label === "emp") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Employees</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-1"></span>
            <span>Fewer than 5,000</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-2"></span>
            <span>5,000 to 9,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-3"></span>
            <span>10,000 to 19,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-4"></span>
            <span>20,000 to 39,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-5"></span>
            <span>40,000 or More</span>
          </div>
        </div>
      </div>
    `;
  } else if (legendDetails.label === "empABS") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Employees</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-0"></span>
            <span>Loss of Employees</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-1"></span>
            <span>1 to 999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-2"></span>
            <span>1,000 to 1,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-3"></span>
            <span>2,000 to 2,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-4"></span>
            <span>3,000 or More</span>
          </div>
        </div>
      </div>
    `;
  } else if (legendDetails.label === "empPER") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Percent Change</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-1"></span>
            <span>Stable (-5% to +5%)</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-2"></span>
            <span>Moderate Growth (+6% to +25%)</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-3"></span>
            <span>Significant Growth (+26% to +50%)</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-4"></span>
            <span>Exceptional Growth (Above 50%)</span>
          </div>
        </div>
      </div>
    `;
  } else if (legendDetails.label === "empSQM") {
    return `
      <div class="flex-column">
        <h3 class="legend-h3">Employees per Square Mile</h3>

          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-1"></span>
            <span>Fewer than 500</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-2"></span>
            <span>500 to 1,499</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-3"></span>
            <span>1,500 to 2,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-4"></span>
            <span>3,000 to 5,999</span>
          </div>
          <div class="flex-row flex-align-center legend-box-item">
            <span class="legend-icon emp-5"></span>
            <span>6,000 or more</span>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="flex-row flex-align-center legend-item">
      <span
        class="legend-icon-${legendDetails.iconType}"
        style="background-color:${legendDetails.color};"
      ></span>
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
