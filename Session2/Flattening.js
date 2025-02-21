
// Exercise 2

let arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arrays.reduce((accumulator ,currentValue) => [...accumulator, ...currentValue], []));

 