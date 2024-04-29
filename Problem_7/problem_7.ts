export const bouncingBall = (
    h: number,
    bounce: number,
    window: number
): number => {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    }

    const ballHeight = bounce * h
    return 2 + bouncingBall(ballHeight, bounce, window)
}
