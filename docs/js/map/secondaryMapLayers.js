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
1, '#DFEFFB',
2000, '#A6CFE1',
4000, '#4D9DC0',
6000, '#0078AE'
];  

// let empColor = ['interpolate',['linear'],
// ['get', 'emp50'],
// 5000, '#E4E7F4',
// 10000, '#C8CDE1',
// 20000, '#A3ACCD',
// 40000, '#757CA5',
// 290000, '#545A80'
// ]; 

let empColor = ['interpolate',['linear'],
['get', 'emp50'],
5000, '#dadaeb',
10000, '#bcbddc',
20000, '#9e9ac8',
40000, '#756bb1',
290000, '#54278f'
]; 

const secondaryMapLayers = {
    pop:{
    id:"pop",
    type: "fill",
    source: "forecastsMCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, .9],
          [12, .7],
          [13, .6],
        ],
      },
      "fill-color": popColor       
    },},
    popABS:{
      id:"popABS",
      type: "fill",
      source: "forecastsMCD",
      layout: {},
      paint: {
        "fill-outline-color": "#748388",
        "fill-opacity": {
          base: 9,
          stops: [
            [10, .9],
            [12, .7],
            [13, .6],
          ],
        },
        "fill-color": popColor2       
      },},
      emp:{
        id:"emp",
        type: "fill",
        source: "forecastsMCD",
        layout: {},
        paint: {
          "fill-outline-color": "#748388",
          "fill-opacity": {
            base: 9,
            stops: [
              [10, .9],
              [12, .7],
              [13, .6],
            ],
          },
          "fill-color": empColor       
        },}
}

export default secondaryMapLayers