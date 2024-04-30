type CharCountObject = {
    [name: string]: number
}

export const scramble = (str1: string, str2: string) => {
    let charCount: CharCountObject = {}

    str1.split('').forEach((str1Char) => {
        charCount[str1Char] = (charCount[str1Char] || 0) + 1
    })
    return str2.split('').every((str2Char) => charCount[str2Char]--)
}
