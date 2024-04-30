export const nbYear = (
    p0: number,
    percent: number,
    aug: number,
    p: number
): number => {
    let n = 0
    let currentPopulation = p0
    while (currentPopulation < p) {
        currentPopulation += (currentPopulation * percent) / 100 + aug
        n += 1
    }

    return n
}
