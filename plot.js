// Plot line graph
// Plotly.newPlot("plotArea", [{x:[1,2,3], y:[10,20,30]}]);

// Plotly.newPlot("plotArea", [{x: [10, 20, 130], y: [8, 2, 12]}]);

// Plotly.newPlot("plotArea", [{x: [5,10,15,20], y:[3,6,9,12]}])

// Plot a Bar Chart
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };
//  Plotly.newPlot("plotArea", [trace]);

// Plot bar chart
//  var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];
// // Adds titles
// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", [trace], layout);

//  var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };
// // hide the object variable within another variable
// var data = [trace];
// // Adds titles
// var layout = {
//  title: "'Bar' Chart",
//  xaxis: { title: "Drinks"},
//  yaxis: { title: "% of Drinks Ordered"}
// };
// Plotly.newPlot("plotArea", data, layout);

// Pie Chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
    mode: 'markers',
    type: 'scatter',
    name: 'Team A',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 12 }
  };
  
  var trace2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'markers',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  };
  
  var data = [ trace1, trace2 ];
  
  var layout = {
    xaxis: {
      range: [ 0.75, 5.25 ]
    },
    yaxis: {
      range: [0, 8]
    },
    title:'Data Labels Hover'
  };
  
  Plotly.newPlot('plotArea', data, layout);

  var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// trace specifies the type of graph as a bar chart and defines x- and y-axis data
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  // the variable data encloses trace in an array to meet Plotly's format req
  var data = [trace];
  // the variable layout is assigned to an object that specifies the chart's title and axis labels
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  // render graph
  Plotly.newPlot("bar-plot", data, layout);


// Skill Drill: create bar chart of the 7 largest cities by population
var topSevenCityNames = cityGrowths.map(city => city.City);
var topSevenCityGrowths = city.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x:  topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace]
var layout = {
    title: "Top Seven Rapidly Growing Cities"
    xaxis: {title: "City"},
    yaxis: {title: "Popuation Growth. 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout)
