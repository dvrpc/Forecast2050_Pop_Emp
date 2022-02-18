/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{var e={895:function(e,t){var r;(function(){var o,a={},n="en",i=null,l="0,0",s=e.exports;function c(e){this._value=e}function u(e,t,r,o){var a,n,i=Math.pow(10,t);return n=(r(e*i)/i).toFixed(t),o&&(a=new RegExp("0{1,"+o+"}$"),n=n.replace(a,"")),n}function d(e,t,r){return t.indexOf("$")>-1?function(e,t,r){var o,i=t.indexOf("$")<=1,l="";t.indexOf(" $")>-1?(l=" ",t=t.replace(" $","")):t.indexOf("$ ")>-1?(l=" ",t=t.replace("$ ","")):t=t.replace("$","");o=m(e._value,t,r),i?o.indexOf("(")>-1||o.indexOf("-")>-1?((o=o.split("")).splice(1,0,a[n].currency.symbol+l),o=o.join("")):o=a[n].currency.symbol+l+o:o.indexOf(")")>-1?((o=o.split("")).splice(-1,0,l+a[n].currency.symbol),o=o.join("")):o=o+l+a[n].currency.symbol;return o}(e,t,r):t.indexOf("%")>-1?function(e,t,r){var o,a="",n=100*e._value;t.indexOf(" %")>-1?(a=" ",t=t.replace(" %","")):t=t.replace("%","");(o=m(n,t,r)).indexOf(")")>-1?((o=o.split("")).splice(-1,0,a+"%"),o=o.join("")):o=o+a+"%";return o}(e,t,r):t.indexOf(":")>-1?function(e){var t=Math.floor(e._value/60/60),r=Math.floor((e._value-60*t*60)/60),o=Math.round(e._value-60*t*60-60*r);return t+":"+(r<10?"0"+r:r)+":"+(o<10?"0"+o:o)}(e):m(e._value,t,r)}function p(e,t){var r,o,l,s,c,u=t,d=["KB","MB","GB","TB","PB","EB","ZB","YB"],p=!1;if(t.indexOf(":")>-1)e._value=function(e){var t=e.split(":"),r=0;3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1]));return Number(r)}(t);else if(t===i)e._value=0;else{for("."!==a[n].delimiters.decimal&&(t=t.replace(/\./g,"").replace(a[n].delimiters.decimal,".")),r=new RegExp("[^a-zA-Z]"+a[n].abbreviations.thousand+"(?:\\)|(\\"+a[n].currency.symbol+")?(?:\\))?)?$"),o=new RegExp("[^a-zA-Z]"+a[n].abbreviations.million+"(?:\\)|(\\"+a[n].currency.symbol+")?(?:\\))?)?$"),l=new RegExp("[^a-zA-Z]"+a[n].abbreviations.billion+"(?:\\)|(\\"+a[n].currency.symbol+")?(?:\\))?)?$"),s=new RegExp("[^a-zA-Z]"+a[n].abbreviations.trillion+"(?:\\)|(\\"+a[n].currency.symbol+")?(?:\\))?)?$"),c=0;c<=d.length&&!(p=t.indexOf(d[c])>-1&&Math.pow(1024,c+1));c++);e._value=(p||1)*(u.match(r)?Math.pow(10,3):1)*(u.match(o)?Math.pow(10,6):1)*(u.match(l)?Math.pow(10,9):1)*(u.match(s)?Math.pow(10,12):1)*(t.indexOf("%")>-1?.01:1)*((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t.replace(/[^0-9\.]+/g,"")),e._value=p?Math.ceil(e._value):e._value}return e._value}function m(e,t,r){var o,l,s,c,d,p,m=!1,f=!1,h=!1,b="",v="",g="",y=Math.abs(e),x=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],w="",_=!1;if(0===e&&null!==i)return i;if(t.indexOf("(")>-1?(m=!0,t=t.slice(1,-1)):t.indexOf("+")>-1&&(f=!0,t=t.replace(/\+/g,"")),t.indexOf("a")>-1&&(t.indexOf(" a")>-1?(b=" ",t=t.replace(" a","")):t=t.replace("a",""),y>=Math.pow(10,12)?(b+=a[n].abbreviations.trillion,e/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)?(b+=a[n].abbreviations.billion,e/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)?(b+=a[n].abbreviations.million,e/=Math.pow(10,6)):y<Math.pow(10,6)&&y>=Math.pow(10,3)&&(b+=a[n].abbreviations.thousand,e/=Math.pow(10,3))),t.indexOf("b")>-1)for(t.indexOf(" b")>-1?(v=" ",t=t.replace(" b","")):t=t.replace("b",""),s=0;s<=x.length;s++)if(o=Math.pow(1024,s),l=Math.pow(1024,s+1),e>=o&&e<l){v+=x[s],o>0&&(e/=o);break}return t.indexOf("o")>-1&&(t.indexOf(" o")>-1?(g=" ",t=t.replace(" o","")):t=t.replace("o",""),g+=a[n].ordinal(e)),t.indexOf("[.]")>-1&&(h=!0,t=t.replace("[.]",".")),c=e.toString().split(".")[0],d=t.split(".")[1],p=t.indexOf(","),d?(c=(w=d.indexOf("[")>-1?u(e,(d=(d=d.replace("]","")).split("["))[0].length+d[1].length,r,d[1].length):u(e,d.length,r)).split(".")[0],w=w.split(".")[1].length?a[n].delimiters.decimal+w.split(".")[1]:"",h&&0===Number(w.slice(1))&&(w="")):c=u(e,null,r),c.indexOf("-")>-1&&(c=c.slice(1),_=!0),p>-1&&(c=c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+a[n].delimiters.thousands)),0===t.indexOf(".")&&(c=""),(m&&_?"(":"")+(!m&&_?"-":"")+(!_&&f?"+":"")+c+w+(g||"")+(b||"")+(v||"")+(m&&_?")":"")}(o=function(e){return o.isNumeral(e)?e=e.value():0===e||void 0===e?e=0:Number(e)||(e=o.fn.unformat(e)),new c(Number(e))}).version="1.5.2",o.isNumeral=function(e){return e instanceof c},o.language=function(e,t){if(!e)return n;if(e&&!t){if(!a[e])throw new Error("Unknown language : "+e);n=e}return!t&&a[e]||function(e,t){a[e]=t}(e,t),o},o.languageData=function(e){if(!e)return a[n];if(!a[e])throw new Error("Unknown language : "+e);return a[e]},o.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),o.zeroFormat=function(e){i="string"==typeof e?e:null},o.defaultFormat=function(e){l="string"==typeof e?e:"0.0"},o.fn=c.prototype={clone:function(){return o(this)},format:function(e,t){return d(this,e||l,void 0!==t?t:Math.round)},unformat:function(e){return"[object Number]"===Object.prototype.toString.call(e)?e:p(this,e||l)},value:function(){return this._value},valueOf:function(){return this._value},set:function(e){return this._value=Number(e),this},add:function(e){return this._value=this._value+Number(e),this},subtract:function(e){return this._value=this._value-Number(e),this},multiply:function(e){return this._value=this._value*Number(e),this},divide:function(e){return this._value=this._value/Number(e),this},difference:function(e){var t=this._value-Number(e);return t<0&&(t=-t),t}},s&&(e.exports=o),"undefined"==typeof ender&&(this.numeral=o),void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}).call(this)}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(895);const t=document.getElementById("search");var o={};$(document).ready((function(){$('[data-toggle="tooltip"]').tooltip(),$("#aboutModal").modal("show"),$(".form-control").change((function(){"load_image"==$(this).val()?(a.setPaintProperty("districts","fill-color",mapColor),document.getElementById("legend-box1").style.display="block",document.getElementById("legend-box2").style.display="none"):"load_image1"==$(this).val()&&(a.setPaintProperty("districts","fill-color",mapColor2),document.getElementById("legend-box1").style.display="none",document.getElementById("legend-box2").style.display="block")}))})),mapboxgl.accessToken="pk.eyJ1IjoiY3J2YW5wb2xsYXJkIiwiYSI6ImNqMHdvdnd5MTAwMWEycXBocm4zbXVjZm8ifQ.3zjbFccILu6mL7cOTtp40A";var a=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v9",center:[-75.24,40.023],bearing:0,zoom:8,attributionControl:!1});a.addControl(new mapboxgl.NavigationControl,["top-right"]),a.addControl(new mapboxgl.AttributionControl,"bottom-right"),document.getElementById("zoomtoregion").addEventListener("click",(function(){a.flyTo({center:[-75.24,40.023],zoom:8,bearing:0,pitch:0,speed:.5})})),fetch("https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson").then((e=>e.json())).then((e=>{e.features.forEach((function(e){o[e.properties.mun_name]=e}))})),console.log(o),a.on("load",(function(){new mapboxgl.Popup({className:"station-popup",closeButton:!1,closeOnClick:!1});a.addLayer({id:"county",type:"line",source:{type:"vector",url:"https://tiles.dvrpc.org/data/dvrpc-municipal.json"},"source-layer":"county",layout:{},paint:{"line-width":2,"line-color":"#5d5d5d"},filter:["==","dvrpc","Yes"]});a.addLayer({id:"districts",type:"fill",source:{type:"geojson",data:"https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson"},layout:{},paint:{"fill-outline-color":"#1d1b1b","fill-opacity":.8,"fill-color":["interpolate",["linear"],["get","emp45"],1,"#fef0d9",1e3,"#fdcc8a",2500,"#fc8d59",5e3,"#e34a33",1e4,"#b30000"]}}),a.addSource("d2",{type:"geojson",data:"https://arcgis.dvrpc.org/portal/rest/services/Demographics/Forecast_2015to2050_MCD/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson",generateId:!0}),a.addLayer({id:"d2",type:"fill",source:"d2",layout:{},paint:{"fill-color":["case",["boolean",["feature-state","hover"],!1],"#FFD662","#0078ae"],"fill-outline-color":["case",["boolean",["feature-state","hover"],!1],"#39398e","#fff"],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.9,0]}});var r=null,o=null;a.on("mousemove","d2",(e=>{e.features.length>0&&(null!==r&&a.setFeatureState({source:"d2",id:r},{hover:!1}),r=e.features[0].id,a.setFeatureState({source:"d2",id:r},{hover:!0}))})),a.on("mouseleave","d2",(()=>{null!==r&&a.setFeatureState({source:"d2",id:r},{hover:!1}),r=null})),a.on("click","districts",(e=>{var t=e.features[0].properties,r=e.features[0].id;"2021"==t.RD_Year?($("#chart2013").css("display","none"),$("#data-wrapper").css("display","none"),i(t,a),n(r)):($("#chart2013").css("display","block"),$("#data-wrapper").css("display","block"),i(t,a),n(r))})),t.onsubmit=function(e){e.preventDefault();const t=e.target.children[0].children[0],r=t.value,o=Search[r];if(!o)return alert("Please select a value from the dropdown list"),void(t.value="");var l=o.properties,s=o.geometry.coordinates,c=l.RETAIL_ID;"2021"==l.RD_Year?($("#chart2013").css("display","none"),$("#data-wrapper").css("display","none"),i(l,s,a),n(c-1)):($("#chart2013").css("display","block"),$("#data-wrapper").css("display","block"),i(l,s,a),n(c-1))};const n=function(e){e>0&&(o&&a.removeFeatureState({source:"d2",id:o}),o=e,a.setFeatureState({source:"d2",id:o},{click:!0}))},i=function(t,r){var o="<div id='d-name'><h3 style='margin-top:0;'>"+t.mun_name+"</span><small><span> "+t.co_name+"</span><span></span> County, <span>"+t.state+'</span></small></h3></div><table id="crashtable">Absolute Change (2015-2045): <b>'+e(t.ABS2045).format("0,0")+"</b></br>Percent Change (2015-2045): <b>"+e(t.PER2045).format("0.00%")+"</b><br>Absolute Change per Square Mile (2015-2045): <b>"+e(t.ABCHSQMI).format("0,0")+'</b><tbody><tr class="odd"><th>2015 Employment</th><td>'+e(t.emp15).format("0,0")+'</td><tr class="even"><th>2020 Forecast</th><td>'+e(t.emp20).format("0,0")+'</td><tr class="odd"><th>2025 Forecast</th><td>'+e(t.emp25).format("0,0")+'</td><tr class="even"><th>2030 Forecast</th><td>'+e(t.emp30).format("0,0")+'</td><tr class="odd"><th>2035 Forecast</th><td>'+e(t.emp35).format("0,0")+'</td><tr class="even"><th>2040 Forecast</th><td>'+e(t.emp40).format("0,0")+'</td><tr class="odd"><th>2045 Forecast</th><td>'+e(t.emp45).format("0,0")+'</td><tr class="even"><th>2050 Forecast</th><td>'+e(t.emp50).format("0,0")+"</td></tbody><table>";document.getElementById("resultsHeaderMCD").innerHTML=o,function(e){for(var t={chart:{renderTo:"Chart1",type:"line",backgroundColor:"white",height:250,marginTop:10},title:{text:"",x:-0},xAxis:{categories:["2015","2020","2025","2030","2035","2040","2045","2050"]},colors:["#0074ad"],yAxis:{title:{text:"Population"}},legend:{enabled:!1},tooltip:{formatter:function(){return Highcharts.numberFormat(this.point.y,0,",",",")+"</b><br/>"}},credits:{enabled:!1},series:[{name:"Population",id:"Values",data:[]}]},r=["2015","2020","2025","2030","2035","2040","2045","2050"],o=[],a=0;a<e.length;a++)o.push({name:r[a],y:e[a]});t.series[0].data=o;new Highcharts.Chart(t)}([t.emp15,t.emp20,t.emp25,t.emp30,t.emp35,t.emp40,t.emp45,t.emp50])};!function(e){const t=document.getElementById("mcd-list"),r=document.createDocumentFragment();Object.keys(e).sort().forEach((function(e){const t=document.createElement("option");t.value=e,r.appendChild(t)})),t.appendChild(r)}(retailSearch)}))})()})();