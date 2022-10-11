/// To run these, right click on a website, inspect, console, paste code, enter

// Trying out map function, num variable can be changed to other names
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// Skill Drill Practice
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(Jester){
    return Jester + 5;
});
console.log(doubled);

// Pulling data out of arrays
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

var cityNames = cities.map(function(city){
  return city.City;
});
console.log(cityNames);

// Skill Drill Practice
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

var cityNames = cities.map(function(pop){
  return pop.population;
});
console.log(cityNames);

// Using the filter funciton
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

// Using filter function
var familyAge = [2,3,39,37,9];
var olderThanFive = familyAge.filter(function(age){
  return age > 5;
});
console.log(olderThanFive);

// Skill Drill Practice: Filter by letter s
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
const filterItems = (letters) => {
    return words.filter(name => name.indexOf(letters) > -1);
} 
console.log(filterItems('s'));

// Use arrows to shorten code
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

// Use arrows to shorten code and SORT Ascending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// Sort Descending order
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

// Slice Method: try different numbers: integers.slice(0,2);
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,4);
console.log(slice1);

// Slice words 
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(3, );
console.log(slice1);

// Map and Filter Method
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);

// Map Method
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);