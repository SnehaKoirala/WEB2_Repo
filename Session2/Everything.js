//  Exercise 7
// every: every element should return true to be true.
// every: stops evaluating as soon as a element doesnot match.

function every(array, test){
return !array.some(element => !test(element)) 
}

function every(array, test){
    for(let element of array)
{
    if(!test(element)) return false
}
 return true
}

console.log(every([1,3,5], n => n < 10))
console.log(every([2,4,16], n => n < 10))
console.log(every([], n => n < 10))
