export const alphabetPosition = (text: string) =>
    text
        .toUpperCase()
        .split('')
        .map((letter) => {
            if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
                return letter.charCodeAt(0) - 64
            }
        })
        .filter(Boolean)
        .join(' ')
