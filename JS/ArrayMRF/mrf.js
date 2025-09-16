const Arr = [2,3,4,5,6,7,8,9,10,12,13];

//normal function
//function mulThree(x){ 
  //  return x*3;
//} 
//const output = Arr.map(mulThree); 

//Ananymous function
//const output = Arr.map(function (x){
//    return x*3;
//} ); 

//IIFE function
//const output = Arr.map(function (x){
//    x = x*3;
//} ); 


const outputMap = Arr.map((x) => x * 3); //map iterates each value and multiple with 3 and push in a new array 

console.log("Map output");
console.log(outputMap);

const outputFilter = Arr.filter((x) => x < 10); //  iterates each values and filter less than 10 to a new array

console.log("filter output");
console.log(outputFilter);

const outputreduce = Arr.reduce(function(prevNum, currNum) // iterates each values and return the sum of array values
{
    prevNum = prevNum  + currNum;
    return prevNum;
},0);

console.log("reduce output");
console.log(outputreduce);

