export function analyzeArray(array) {
    const length = array.length

    if (length === 0) return { average: undefined, min: undefined, max: undefined, length }

    const min = Math.min(...array)
    const max = Math.max(...array)
    const sum = array.reduce((acc, curr) => acc + curr)
    const average = sum / length

    if (Number.isNaN(average)) return { average, min: undefined, max: undefined, length }

    return { average, min, max, length }
}