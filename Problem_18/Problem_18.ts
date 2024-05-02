export const duplicateCount = (text: string): number => {
    const duplicate_characters = text
        .toLowerCase()
        .toLowerCase()
        .split('')
        .filter(
            (letter, current_index, original_string) =>
                original_string.indexOf(letter) === current_index &&
                original_string.lastIndexOf(letter) !== current_index
        )

    return duplicate_characters.length
}
