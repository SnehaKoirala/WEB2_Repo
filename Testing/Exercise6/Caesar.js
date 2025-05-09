
export function caesarCipher(string, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return [...string]
        .map(char => {
            let charIndex = alphabet.indexOf(char.toLowerCase())
            if (charIndex === -1) return char
            let shiftedIndex = (charIndex + shift) % alphabet.length
            if (shiftedIndex < 0) shiftedIndex += alphabet.length
            return char === char.toUpperCase() ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex]
        })
        .join("")
}