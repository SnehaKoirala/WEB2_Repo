// Exercise 6 
// some: returrns true if any of the element met the criteria.

function checkPositive(array){
 return array.some(n => n > 0)
}
console.log(checkPositive([1,2,3,-4,5])) 