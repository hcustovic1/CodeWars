const anagrams = (word, words) => {
  const sortedWord = word
    .split("")
    .sort()
    .join("")
    
  return words.filter(
    possibleAnagram =>
      possibleAnagram.length === word.length &&
      possibleAnagram
        .split("")
        .sort()
        .join("") === sortedWord
  )
}

module.exports = anagrams;
