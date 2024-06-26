export const SeriesSum = (n: number): string =>
    [...Array(n).keys()]
        .reduce((sum, el) => (el === 0 ? 1 : sum + 1 / (1 + 3 * el)), 0)
        .toFixed(2)
