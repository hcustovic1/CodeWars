export const persistence = (num: number) => {
    let persistenceCount = 0
    while (String(num).length !== 1) {
        persistenceCount += 1
        num = String(num)
            .split('')
            .map(Number)
            .reduce((a, b) => a * b, 1)
    }

    return persistenceCount
}
