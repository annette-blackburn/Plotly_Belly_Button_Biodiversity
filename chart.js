function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

/// DELIVERABLE 1

// 1. Create the buildCharts function
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array
    var samples_data = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number
    var samples_filtered = samples_data.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array
    var first_sample = samples_filtered[0];


    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values
    var sample_otuIds = first_sample.otu_ids;
    var sample_otuLabels = first_sample.otu_labels;
    var sample_values = first_sample.sample_values;

    // 7. Create the yticks for the bar chart
    // Hint: Get the the top 10 otu_ids and map them in descending order so the otu_ids with the most bacteria are last

    var yticks = sample_otuIds.map((id,idx) => {
      return {otuID:`OTU ${id}`, sample_value:sample_values[idx], label:sample_otuLabels[idx]};
    })
    .sort((a,b)=>b.sample_value - a.sample_value)
    .slice(0,10)
    .reverse();

    var top_otuIds = yticks.map(bacteria=>bacteria.otuID);
    var top_otuLabels = yticks.map(bacteria=>bacteria.label);
    var top_values = yticks.map(bacteria=>bacteria.sample_value);


    // 8. Create the trace for the bar chart
    var barData = [{
      x: top_values,
      y: top_otuIds,
      hovertext: top_otuLabels,
      type:"bar",
      orientation:"h"
    }];
    // 9. Create the layout for the bar chart
    var barLayout = {
      title: "<b>Top 10 Bacteria Cultures Found</b>",
    };
    // 10. Use Plotly to plot the data with the layout
    Plotly.newPlot("bar", barData, barLayout);

/// DELIVERABLE 2
    // 1. Create the trace for the bubble chart
    var bubble_data = [{
      x: result_otuIds,
      y: result_values,
      text: result_otuLabels,
      mode: "markers",
      marker: {
        size: result_values,
        color: result_otuIds,
        colorscale: "Earth",
      }
  }];

    // 2. Create the layout for the bubble chart
    var bubble_layout = {
      title: "<b>Bacteria Cultures Per Sample</b>",
      xaxis: {title: "OTU ID"},
      margin: {
        l: 50,
        r: 50,
        t: 50,
        b: 100
      },
      hovermode: "closest",
    };

    // 3. Use Plotly to plot the data with the layout
    Plotly.newPlot("bubble", bubble_data, bubble_layout); 


/// DELIVERABLE 3

    // 1. Create a variable that filters the metadata array for the object with the desired sample number
    var result_array = data.metadata.filter(sampleObj => sampleObj.id == sample);

    // 2. Create a variable that holds the first sample in the metadata array
    var result = result_array[0];

    // 3. Create a variable that holds the washing frequency
    var wfreq = parseFloat(result.wfreq);

    // 4. Create the trace for the gauge chart
    var gauge_data = [{
      type:"indicator",
      value: wfreq,
      title: {text: "Scrubs per Week"},
      mode: "gauge+number",
      gauge: {
        axis: {range: [null,10], dtick: 2},
        steps:[
          {range: [0,2], color:"red"}, 
          {range: [2,4], color:"orange"}, 
          {range: [4,6], color:"yellow"}, 
          {range: [6,8], color:"yellowgreen"}, 
          {range: [8,10], color:"green"}],
        bar:{color: "black"}
      }
    }];
    
    // 5. Create the layout for the gauge chart
    var gauge_layout = {
      title: "<b>Belly Button Washing Frequency</b>",
      margin: { t: 100, r: 50, l: 50, b: 50 },
    };

    // 6. Use Plotly to plot the gauge data and layou
    Plotly.newPlot("gauge", gauge_data, gauge_layout);

  });
}
