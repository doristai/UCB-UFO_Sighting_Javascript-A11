
//D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage. 
//It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), for presentation.

// Reference the HTML table using d3
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

// Takes two numbers and add them 
function addition(a, b){
    return a + b;
}

// One line presentation
function addition(a, b) {return a + b; }

console.log(addition(4, 5));

// Converted to an arrow function
addition = (a, b) => a + b;


// Functions can call other functions 
function doubleAddition(c, d){
    var total = addition(c, d) * 2;
    return total;
}

// Arrow function format
doubleAddition = (c, d) => addition(a, b) * 2;

// Simplified way on defining a function 
printHello = () => "Hello there!";

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// for loop in Javascript
function listLoop(userList){
    for (var i = 0; i < userList.length; i++){
        console.log(userList[i]);
    }
}


/*
1. var i = 0
    - assign an iterable variable and set its value to zero
        - when we assign a zero value, we are starting a counter from the beginning
    - letter i = iterate

2. i < userList.length
    - if this iterable(i) is still smaller than the total number of iterables in the list (userList)
        then move to the next step

3. i++
    - increases the iterable by 1 
*/

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 function buildTable(data) {
    tbody.html("");
  }