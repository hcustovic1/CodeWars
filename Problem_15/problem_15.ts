export const comp = (array1: number[], array2: number[]): boolean => {
    if (array1 == null || array2 == null) return false

    return array1.every((element) => {
        const foundIndex = array2.indexOf(element ** 2)
        if (foundIndex !== -1) {
            array2.splice(foundIndex, 1)
            return true
        }
        return false
    })
}
