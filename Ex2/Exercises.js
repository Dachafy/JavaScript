/*
1. addNumbers
*/
function addNumbers(a, b) {
    return a + b
}

let sum = addNumbers(10, 10)
console.log(sum)

/*
2. getRandomNumber
*/
function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

let number = getRandomNumber();
console.log(number);

/*
3. greetUser
*/
function greetUser(){
    let name = prompt("Enter your name: ");
    console.log("Hello " + name);
}

greetUser();

/*
4. calculateAverage
*/
function calculateAverage(array){
    let sum = 0;
    for(let numbers of array){
        sum += numbers
    }
    let average = sum / array.length;
    return average;
}

let array = [1, 4, 6, 3, 7];
let average = calculateAverage(array);
console.log("Average: ", average);

/*
5. multiply
*/
function multiply(){
    let x = prompt("Enter first number: ");
    let y = prompt("Enter second number: ");
    if(y == ""){
        y = 2;
    }
    return x * y
}

let result = multiply();
console.log("Result: ", result);
 
