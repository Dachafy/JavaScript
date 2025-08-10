/*
1. Define if the number is divisible by 3 or 5 or both
*/

let nr = 10;

if(nr % 3 == 0 && nr % 5 == 0){
    console.log("Your number is divisible by 3 and 5.");
} else if (nr % 3 == 0){
    console.log("Your number is only divisible by 3.");
} else if (nr % 5 == 0){
    console.log("Your number is only divisible by 5.");
}

/*
3. Define a day string whether it is weekends or weekdays
*/

let day = "Sunday"

if(day != "Sunday" || day != "Saturday"){
    console.log("The day is weekdays.");
} else {
    console.log("The day is weekends.")
}

/*
3. Define a traffic color
*/

let trafficLight = "Red";

if(trafficLight == "Red"){
    console.log("Stop.");
} else if(trafficLight == "Yellow"){
    console.log("Slow down.");
} else if(trafficLight == "Green"){
    console.log("Go.");
} else {
    console.log("Invalid color.")
}
