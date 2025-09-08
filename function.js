var evenOdd = []
function odd (arr){
    for(let i=0;arr.length;i++){
        if(arr[i]%2===0){
            evenOdd.push(arr[i])
        }
    }
    return evenOdd
    }
console.log(odd([2,4,5,7,9,1,4,10,13,4,6,7]));
