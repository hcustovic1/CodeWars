const scramble = (str1, str2) => {
  var charCount = {}
  str1.split("").forEach((str1Char => { charCount[str1Char] = (charCount[str1Char] || 0) + 1 }))
  return str2.split("").every(str2Char => charCount[str2Char]--)
}

module.exports = scramble
