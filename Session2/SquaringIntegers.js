// Exercise 1
let numbers = [1, 2, 3, 4.5, 6, 9.5, 8]

let squareNumbers = numbers
            .filter((number =>number % 1 === 0))
            .map(number => number * number);

console.log(squareNumbers);

