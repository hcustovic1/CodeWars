export const toCamelCase = (str: string) => {
    const delimiter = str.includes('-') ? '-' : '_'
    return str
        .split(delimiter)
        .map((word, index) =>
            index !== 0
                ? `${word.charAt(0).toUpperCase()}${word.slice(1)}`
                : word
        )
        .join('')
}
