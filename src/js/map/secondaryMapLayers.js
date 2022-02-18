let popColor = ['interpolate',['linear'],
['get', 'pop50'],
10000, '#DFEFFB',
25000, '#A6CFE1',
50000,'#4D9DC0',
100000, '#0078AE',
180000, '#004E76'
];  

let popColor2 = ['interpolate',['linear'],
['get', 'popabs50'],
0, '#CCCCCC',
2000, '#DFEFFB',
4000, '#A6CFE1',
6000, '#4D9DC0',
48000, '#0078AE'
];  

const secondaryMapLayers = {
    pop:{
    id:"pop",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": .8,
      "fill-color": popColor       
    },},
    popABS:{
      id:"popABS",
      type: "fill",
      source: "forecastsMCD",
      layout: {},
      paint: {
        "fill-outline-color": "#748388",
        "fill-opacity": .8,
        "fill-color": popColor2       
      },}
}

export default secondaryMapLayers