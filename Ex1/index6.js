/*
1. flatten the array completely
*/
let nested = [1, [2, [3, 4]], 5, [6, 7]];

let flatNested = nested.flat(2);
/*
2. reverse the flattened array 
*/
flatNested.reverse();
/*
1. print the array 
*/
console.log(flatNested);