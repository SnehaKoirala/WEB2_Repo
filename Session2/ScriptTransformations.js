//Exercise 8 
 require("./script.js")

function oldestLivingScript(scripts) {
    return scripts.filter(s => s.living)
                .reduce((res, s) => (res.year < s.year ? res : s))
}

console.log(oldestLivingScript(SCRIPTS).name)
// → Han