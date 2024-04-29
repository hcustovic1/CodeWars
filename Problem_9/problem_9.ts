export const anagrams = (word: string, words: string[]): string[] => {
    const sortedLettersWord = word.split('').sort().join('')

    return words.filter(
        (possibleAnagram) =>
            possibleAnagram.length === word.length &&
            possibleAnagram.split('').sort().join('') === sortedLettersWord
    )
}
