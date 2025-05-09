import { calculator } from "./Calc.js";

it ("adds two numbers", () =>{
    expect(calculator.add(2,2)).toBe(4)
})

it ("adds two numbers", () =>{
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
})

it ("subtracts two numbers", () =>{
    expect(calculator.subtract(2,2)).toBe(0)
})

it ("divides two numbers", () =>{
    expect(calculator.divide(2,2)).toBe(1)
})

it("divides with zero", () => {
    expect(calculator.divide(2, 0)).toBe(Infinity)
})

it("multiplies two numbers", () => {
    expect(calculator.multiply(5, 2)).toBe(10)
})
