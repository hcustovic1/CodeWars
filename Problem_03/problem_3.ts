export const digitalRoot = (n: number): number =>
    String(n).length === 1
        ? n
        : digitalRoot(
              String(n)
                  .split('')
                  .map(Number)
                  .reduce((a, b) => a + b, 0)
          )
