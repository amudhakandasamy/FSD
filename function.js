
//normal function with Array return

var evenOdd = [] //Array dec
function odd (arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            evenOdd.push(arr[i])
        }
    }
    return evenOdd
    }
console.log(odd([2,4,5,7,9,1,4,10,13,4,6,7]));


//Ananymous function

var result = []
var odd = function (arr){ //function dec without any name
    for(let i=0;i<arr.length;i++){   
     if(arr[i]%2!==0){        
    result.push(arr[i])    
    }  
  } 
   return result

}
console.log(odd([2,4,5,7,9,1,4,10,13,4,6,7]));

//IIFE
var result = []; 
(function (arr) {  //immdt involked function
 for (let i = 0; i < arr.length; i++) { 
   if (arr[i] % 2 !== 0) {   
   result.push(arr[i]);    }  } 
console.log(result);
}
)([2,4,5,7,9,1,4,10,13,4,6,7]);

//Arrow
 var result = []
const odd = (arr) => {    //its a keyword
for(let i=0;i<arr.length;i++){        
if(arr[i]%2!==0){            
result.push(arr[i])        }    }    
return result}
console.log(odd([2,4,5,7,9,1,4,10,13,4,6,7]));




