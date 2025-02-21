let obj = {one: true, two: true, hasOwnProperty: true}
console.log(Object.prototype.hasOwnProperty.call(obj, "one"))

