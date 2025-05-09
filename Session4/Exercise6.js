// In the browser 
// Example for experiment 1

function foo() {
    setTimeout(function fooTimer() {
        bar()
    }, 1000)
}

function bar() {
    setTimeout(function barTimer() {
        baz()
    }, 1000)
}

function baz() {
    setTimeout(function bazTimer() {
        console.log("THE END!")
    }, 1000)
}

foo()

// Example for experiment 2
function tightChain() {
    setTimeout(function timer() {
        tightChain()
    }, 0)
}

tightChain()

$.on("button", "click", function onClick() {
    console.log("You clicked the button!")
})

// Example for experiment 3
function chain() {
    setTimeout(function timer() {
        chain()
    }, 6000)
}

function chain2() {
    setTimeout(function timer2() {
        chain2()
    }, 1000)
}

chain()
chain2()