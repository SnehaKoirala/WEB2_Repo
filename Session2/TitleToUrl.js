// Exercise 5

function titleToUrl(title){

 return title.toLowerCase().trim().split(/\s+/).join("-")
}
console.log(titleToUrl("Winter in Denmark is terrible"))