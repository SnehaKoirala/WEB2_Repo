import { analyzeArray } from "./Array.js"

it("returns the correct average", () => {
    const array = [1, 8, 3, 4, 2, 6]
    const result = analyzeArray(array)
    expect(result.average).toBe(4)
})

it("returns the correct min", () => {
    const array = [1, 8, 3, 4, 2, 6]
    const result = analyzeArray(array)
    expect(result.min).toBe(1)
})

it("returns the correct max", () => {
    const array = [1, 8, 3, 4, 2, 6]
    const result = analyzeArray(array)
    expect(result.max).toBe(8)
})

it("returns the correct length", () => {
    const array = [1, 8, 3, 4, 2, 6]
    const result = analyzeArray(array)
    expect(result.length).toBe(6)
})

it("returns an object with length 0 if given an empty array", () => {
    const array = []
    const result = analyzeArray(array)
    const expected = {
        average: undefined,
        min: undefined,
        max: undefined,
        length: 0,
    }
    expect(result).toEqual(expected)
})

it("returns an object with NaN for average if given an array with non-number elements", () => {
    const array = ["a", "b", 2]
    const result = analyzeArray(array)
    const expected = {
        average: NaN,
        min: undefined,
        max: undefined,
        length: 3,
    }
    expect(result).toEqual(expected)
})