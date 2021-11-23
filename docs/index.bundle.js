/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{var e={895:function(e,t){var r;(function(){var o,n={},a="en",i=null,l="0,0",s=e.exports;function c(e){this._value=e}function u(e,t,r,o){var n,a,i=Math.pow(10,t);return a=(r(e*i)/i).toFixed(t),o&&(n=new RegExp("0{1,"+o+"}$"),a=a.replace(n,"")),a}function d(e,t,r){return t.indexOf("$")>-1?function(e,t,r){var o,i=t.indexOf("$")<=1,l="";t.indexOf(" $")>-1?(l=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(l=" ",t=t.replace("$ ","")):t=t.replace("$","");o=m(e._value,t,r),i?o.indexOf("(")>-1||o.indexOf("-")>-1?((o=o.split("")).splice(1,0,n[a].currency.symbol+l),o=o.join("")):o=n[a].currency.symbol+l+o:o.indexOf(")")>-1?((o=o.split("")).splice(-1,0,l+n[a].currency.symbol),o=o.join("")):o=o+l+n[a].currency.symbol;return o}(e,t,r):t.indexOf("%")>-1?function(e,t,r){var o,n="",a=100*e._value;t.indexOf(" %")>-1?(n=" ",t=t.replace(" %","")):t=t.replace("%","");(o=m(a,t,r)).indexOf(")")>-1?((o=o.split("")).splice(-1,0,n+"%"),o=o.join("")):o=o+n+"%";return o}(e,t,r):t.indexOf(":")>-1?function(e){var t=Math.floor(e._value/60/60),r=Math.floor((e._value-60*t*60)/60),o=Math.round(e._value-60*t*60-60*r);return t+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)}(e):m(e._value,t,r)}function p(e,t){var r,o,l,s,c,u=t,d=["KB","MB","GB","TB","PB","EB","ZB","YB"],p=!1;if(t.indexOf(":")>-1)e._value=function(e){var t=e.split(":"),r=0;3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1]));return Number(r)}(t);else if(t===i)e._value=0;else{for("."!==n[a].delimiters.decimal&&(t=t.replace(/\./g,"").replace(n[a].delimiters.decimal,".")),r=new RegExp("[^a-zA-Z]"+n[a].abbreviations.thousand+"(?:\\)|(\\"+n[a].currency.symbol+")?(?:\\))?)?$"),o=new RegExp("[^a-zA-Z]"+n[a].abbreviations.million+"(?:\\)|(\\"+n[a].currency.symbol+")?(?:\\))?)?$"),l=new RegExp("[^a-zA-Z]"+n[a].abbreviations.billion+"(?:\\)|(\\"+n[a].currency.symbol+")?(?:\\))?)?$"),s=new RegExp("[^a-zA-Z]"+n[a].abbreviations.trillion+"(?:\\)|(\\"+n[a].currency.symbol+")?(?:\\))?)?$"),c=0;c<=d.length&&!(p=t.indexOf(d[c])>-1&&Math.pow(1024,c+1));c++);e._value=(p||1)*(u.match(r)?Math.pow(10,3):1)*(u.match(o)?Math.pow(10,6):1)*(u.match(l)?Math.pow(10,9):1)*(u.match(s)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=p?Math.ceil(e._value):e._value}return e._value}function m(e,t,r){var o,l,s,c,d,p,m=!1,f=!1,h=!1,b="",v="",g="",y=Math.abs(e),x=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],w="",M=!1;if(0===e&&null!==i)return i;if(t.indexOf("(")>-1?(m=!0,t=t.slice(1,-1)):t.indexOf("+")>-1&&(f=!0,t=t.replace(/\+/g,"")),t.indexOf("a")>-1&&(t.indexOf(" a")>-1?(b=" ",t=t.replace(" a","")):t=t.replace("a",""),y>=Math.pow(10,12)?(b+=n[a].abbreviations.trillion,e/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)?(b+=n[a].abbreviations.billion,e/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)?(b+=n[a].abbreviations.million,e/=Math.pow(10,6)):y<Math.pow(10,6)&&y>=Math.pow(10,3)&&(b+=n[a].abbreviations.thousand,e/=Math.pow(10,3))),t.indexOf("b")>-1)for(t.indexOf(" b")>-1?(v=" ",t=t.replace(" b","")):t=t.replace("b",""),s=0;s<=x.length;s++)if(o=Math.pow(1024,s),l=Math.pow(1024,s+1),e>=o&&e<l){v+=x[s],o>0&&(e/=o);break}return t.indexOf("o")>-1&&(t.indexOf(" o")>-1?(g=" ",t=t.replace(" o","")):t=t.replace("o",""),g+=n[a].ordinal(e)),t.indexOf("[.]")>-1&&(h=!0,t=t.replace("[.]",".")),c=e.toString().split(".")[0],d=t.split(".")[1],p=t.indexOf(","),d?(c=(w=d.indexOf("[")>-1?u(e,(d=(d=d.replace("]","")).split("["))[0].length+d[1].length,r,d[1].length):u(e,d.length,r)).split(".")[0],w=w.split(".")[1].length?n[a].delimiters.decimal+w.split(".")[1]:"",h&&0===Number(w.slice(1))&&(w="")):c=u(e,null,r),c.indexOf("-")>-1&&(c=c.slice(1),M=!0),p>-1&&(c=c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+n[a].delimiters.thousands)),0===t.indexOf(".")&&(c=""),(m&&M?"(":"")+(!m&&M?"-":"")+(!M&&f?"+":"")+c+w+(g||"")+(b||"")+(v||"")+(m&&M?")":"")}(o=function(e){return o.isNumeral(e)?e=e.value():0===e||void 0===e?e=0:Number(e)||(e=o.fn.unformat(e)),new c(Number(e))}).version="1.5.2",o.isNumeral=function(e){return e instanceof c},o.language=function(e,t){if(!e)return a;if(e&&!t){if(!n[e])throw new Error("Unknown language : "+e);a=e}return!t&&n[e]||function(e,t){n[e]=t}(e,t),o},o.languageData=function(e){if(!e)return n[a];if(!n[e])throw new Error("Unknown language : "+e);return n[e]},o.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),o.zeroFormat=function(e){i="string"==typeof e?e:null},o.defaultFormat=function(e){l="string"==typeof e?e:"0.0"},o.fn=c.prototype={clone:function(){return o(this)},format:function(e,t){return d(this,e||l,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:p(this,e||l)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){return this._value=this._value+Number(e),this},subtract:function(e){return this._value=this._value-Number(e),this},multiply:function(e){return this._value=this._value*Number(e),this},divide:function(e){return this._value=this._value/Number(e),this},difference:function(e){var t=this._value-Number(e);return t<0&&(t=-t),t}},s&&(e.exports=o),"undefined"==typeof ender&&(this.numeral=o),void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}).call(this)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(895);const t=document.getElementById("search");var o={};$(document).ready((function(){$('[data-toggle="tooltip"]').tooltip(),$("#aboutModal").modal("show"),$(".form-control").change((function(){"load_image"==$(this).val()?(n.setPaintProperty("districts","fill-color",mapColor),document.getElementById("legend-box1").style.display="block",document.getElementById("legend-box2").style.display="none"):"load_image1"==$(this).val()&&(n.setPaintProperty("districts","fill-color",mapColor2),document.getElementById("legend-box1").style.display="none",document.getElementById("legend-box2").style.display="block")}))})),mapboxgl.accessToken="pk.eyJ1IjoiY3J2YW5wb2xsYXJkIiwiYSI6ImNqMHdvdnd5MTAwMWEycXBocm4zbXVjZm8ifQ.3zjbFccILu6mL7cOTtp40A";var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v9",center:[-75.24,40.023],bearing:0,zoom:8,attributionControl:!1});n.addControl(new mapboxgl.NavigationControl,["top-right"]),n.addControl(new mapboxgl.AttributionControl,"bottom-right"),document.getElementById("zoomtoregion").addEventListener("click",(function(){n.flyTo({center:[-75.24,40.023],zoom:8,bearing:0,pitch:0,speed:.5})})),fetch("https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Retail/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson").then((e=>e.json())).then((e=>{e.features.forEach((function(e){o[e.properties.DISTRICT]=e}))})),console.log(o),n.on("load",(function(){new mapboxgl.Popup({className:"station-popup",closeButton:!1,closeOnClick:!1});n.addLayer({id:"county",type:"line",source:{type:"vector",url:"https://tiles.dvrpc.org/data/dvrpc-municipal.json"},"source-layer":"county",layout:{},paint:{"line-width":2,"line-color":"#5d5d5d"},filter:["==","dvrpc","Yes"]});n.addLayer({id:"districts",type:"fill",source:{type:"geojson",data:"https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson"},layout:{},paint:{"fill-outline-color":"#1d1b1b","fill-opacity":.8,"fill-color":["interpolate",["linear"],["get","emp45"],1,"#fef0d9",1e3,"#fdcc8a",2500,"#fc8d59",5e3,"#e34a33",1e4,"#b30000"]}}),n.addSource("d2",{type:"geojson",data:"https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson",generateId:!0}),n.addLayer({id:"d2",type:"fill",source:"d2",layout:{},paint:{"fill-color":["case",["boolean",["feature-state","hover"],!1],"#FFD662","#0078ae"],"fill-outline-color":["case",["boolean",["feature-state","hover"],!1],"#39398e","#fff"],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.9,0]}});var r=null,a=null;n.on("mousemove","d2",(e=>{e.features.length>0&&(null!==r&&n.setFeatureState({source:"d2",id:r},{hover:!1}),r=e.features[0].id,n.setFeatureState({source:"d2",id:r},{hover:!0}))})),n.on("mouseleave","d2",(()=>{null!==r&&n.setFeatureState({source:"d2",id:r},{hover:!1}),r=null})),n.on("click","districts",(e=>{var t=e.features[0].properties,r=e.features[0].id;"2021"==t.RD_Year?($("#chart2013").css("display","none"),$("#data-wrapper").css("display","none"),l(t,n),i(r)):($("#chart2013").css("display","block"),$("#data-wrapper").css("display","block"),l(t,n),i(r))})),t.onsubmit=function(e){e.preventDefault();const t=e.target.children[0].children[0],r=t.value,a=o[r];if(!a)return alert("Please select a value from the dropdown list"),void(t.value="");var s=a.properties,c=a.geometry.coordinates,u=s.RETAIL_ID;"2021"==s.RD_Year?($("#chart2013").css("display","none"),$("#data-wrapper").css("display","none"),l(s,c,n),i(u-1)):($("#chart2013").css("display","block"),$("#data-wrapper").css("display","block"),l(s,c,n),i(u-1))};const i=function(e){e>0&&(a&&n.removeFeatureState({source:"d2",id:a}),a=e,n.setFeatureState({source:"d2",id:a},{click:!0}))},l=function(t,r){var o="<div id='d-name'><h3 style='margin-top:0;'>"+t.mun_name+"</span><small><span> "+t.co_name+"</span><span></span> County, <span>"+t.state+"</span></small></h3></div><div id='dt-section'><h4 style=''>Municipal-Level Employment Forecasts, 2015-2045</h4></div><table id=\"crashtable\"><tr><b><font color=\"#0074ad\">"+t.mun_name+" , "+t.co_name+" County</font></b></tr><br>Absolute Change (2015-2045): <b>"+e(t.ABS2045).format("0,0")+"</b></br>Percent Change (2015-2045): <b>"+e(t.PER2045).format("0.00%")+"</b><br>Absolute Change per Square Mile (2015-2045): <b>"+e(t.ABCHSQMI).format("0,0")+'</b><tbody><tr class="odd"><th>2015 Employment</th><td>'+e(t.emp15).format("0,0")+'</td><tr class="even"><th>2020 Forecast</th><td>'+e(t.emp20).format("0,0")+'</td><tr class="odd"><th>2025 Forecast</th><td>'+e(t.emp25).format("0,0")+'</td><tr class="even"><th>2030 Forecast</th><td>'+e(t.emp30).format("0,0")+'</td><tr class="odd"><th>2035 Forecast</th><td>'+e(t.emp35).format("0,0")+'</td><tr class="even"><th>2040 Forecast</th><td>'+e(t.emp40).format("0,0")+'</td><tr class="odd"><th>2045 Forecast</th><td>'+e(t.emp45).format("0,0")+'</td><tr class="even"><th>2050 Forecast</th><td>'+e(t.emp50).format("0,0")+"</td></tbody><table>";document.getElementById("resultsHeaderMCD").innerHTML=o,function(e){for(var t={chart:{renderTo:"Chart1",type:"line",backgroundColor:"white",height:250,marginTop:10},title:{text:"",x:-0},xAxis:{categories:["2015","2020","2025","2030","2035","2040","2045","2050"]},colors:["#0074ad"],yAxis:{title:{text:"Population"}},legend:{enabled:!1},tooltip:{formatter:function(){return Highcharts.numberFormat(this.point.y,0,",",",")+"</b><br/>"}},credits:{enabled:!1},series:[{name:"Population",id:"Values",data:[]}]},r=["2015","2020","2025","2030","2035","2040","2045","2050"],o=[],n=0;n<e.length;n++)o.push({name:r[n],y:e[n]});t.series[0].data=o;new Highcharts.Chart(t)}([t.emp15,t.emp20,t.emp25,t.emp30,t.emp35,t.emp40,t.emp45,t.emp50])};!function(e){const t=document.getElementById("retail-districts-list"),r=document.createDocumentFragment();Object.keys(e).sort(((e,t)=>e>t)).forEach((function(e){const t=document.createElement("option");t.value=e,r.appendChild(t)})),t.appendChild(r)}(o)}))})()})();