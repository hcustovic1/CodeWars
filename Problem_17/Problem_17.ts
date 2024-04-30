type direction = 'n' | 's' | 'w' | 'e'

export const isValidWalk = (walk: string[]): boolean => {
    if (walk.length !== 10) {
        return false
    }

    const step_count: Record<direction, number> = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    }

    walk.forEach((walking_step) => step_count[walking_step as direction]++)

    return (
        step_count.s - step_count.n === 0 && step_count.w - step_count.e === 0
    )
}
