// definition of SpaceX URL
const url = "https://api.spacexdata.com/v2/launchpads";
// place call to SpaceX's API, retrieve data, print to browser console
d3.json(url).then(receivedData => console.log(receivedData));

// JSON file
d3.json("samples.json").then(function(data){
    console.log("hello");
});

// when you get it to work...
d3.json("samples.json").then(function(data){
    console.log(data);
});