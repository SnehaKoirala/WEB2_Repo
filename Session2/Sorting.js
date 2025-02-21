// Exercise 4

function alphabeticalOrder(array){
return [...array].sort((a,b) => (a === b ? 0: a < b ? -1 : 1))
}

const letters =["a", "c", "b", "d", "e"]

console.log(alphabeticalOrder(letters))

console.log(letters) 