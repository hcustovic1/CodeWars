export const listSquared = (m: number, n: number) => {
    let currentIteration = m
    let results = []
    while (currentIteration <= n) {
        let divisorsSum = 0
        for (let i = 1; i <= Math.floor(Math.sqrt(currentIteration)); i++) {
            if (!(currentIteration % i)) {
                divisorsSum +=
                    currentIteration / i === i
                        ? i ** 2
                        : i ** 2 + (currentIteration / i) ** 2
            }
        }

        if (Number.isInteger(Math.sqrt(divisorsSum))) {
            results.push([currentIteration, divisorsSum])
        }
        currentIteration++
    }

    return results
}
