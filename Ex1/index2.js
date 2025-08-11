/*
1. Add new colors at the beginning
*/
let color = ["red", "green"];

color.unshift("blue", "yellow");
console.log(color);

/*
2. Remove the first element and store it
*/
let firstColor = color.shift();
/*
3. print the remove color and updated array
*/
console.log(firstColor);
console.log(color);

