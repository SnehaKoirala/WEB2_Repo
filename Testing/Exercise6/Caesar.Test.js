import { caesarCipher } from "./Caesar";

it("shifts abc once", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd")
})

it("works with punctuation", () => {
    expect(caesarCipher("ab.c", 1)).toBe("bc.d")
})

it("wraps from z to a", () => {
    expect(caesarCipher("xyz", 2)).toBe("zab")
})

it("maintains capitalization", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd")
    expect(caesarCipher("ABC", 1)).not.toBe("bcd")
})

it("works with negativ shift", () => {
    expect(caesarCipher("abc", -1)).toBe("zab")
})