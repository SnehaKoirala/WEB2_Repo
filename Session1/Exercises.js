/* Exercise  2  */
let abc = "#"

for (let i = 0; i < 7; i++) {
    console.log(abc);
    abc += "#";
}

/*for (let triangle = "#"; triangle.length <= 7; triangle += "#") {
    console.log(triangle);
}*/

/* Exercise  3  */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Check this first
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

/* Exercise  4  */
function min(a, b) {
   return a < b ? a : b ; // Ternary operator (?) // same as if else statement
}                           // Value if true : value if false

console.log(min(5, 10));
console.log(min(2, 6));

/* Exercise  5  */

function countChar(string,ch){
    let count = 0;
    for(let i =0; i  < string.length; i++){
        if(string[i] == ch){
            count += 1
        }
    }
    return count
}
function countBs(string){
    return countChar(string, "B");
} 
console.log(countBs("BBBBible"));
console.log(countChar("kakkerlak, k"));


/* Exercise  6  */
/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.*/
function range(start, end, ){

    function range(start, end, step = start < end ? 1 : -1) {
        let array = []
    
        if (step > 0) {
            for (let i = start; i <= end; i += step) array.push(i)
        } else {
            for (let i = start; i >= end; i += step) array.push(i)
        }
        return array
    }

        console.log (range(1, 10));
        console.log(sum(range(5, 2) -1));
        console.log(sum(range(1, 10))); 
}    

/* Exercise  7  */

function range(start, end, step = start < end ? 1 : -1) {
    if (end === undefined) return end => range(start, end)
    let array = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }
    return array
}

let rangeFrom3To = range(3)
let rangeFrom7To = range(7)

console.log(rangeFrom3To(3))

console.log(rangeFrom3To(8))

console.log(rangeFrom7To(9))

/* Exercise  8  */
function reverseArray(array) {
    let output = []
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i])
    }
    return output
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array
}

console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1] 


/* Exercise  9  */  

function deepEqual(a, b) {
    if (a === b) return true

    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false

    let keysA = Object.keys(a),
        keysB = Object.keys(b)

    if (keysA.length != keysB.length) return false

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
    }

    return true
}

let obj = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
// → true  