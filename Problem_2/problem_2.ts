export const descendingOrder = (n: number) =>
    Number(
        n
            .toString()
            .split('')
            .sort((a, b) => Number(b) - Number(a))
            .join('')
    )
