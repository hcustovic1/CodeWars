const alphabetPosition = text => text.toUpperCase().split("").map(letter => { if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) { return letter.charCodeAt() - 64; } }).filter(Boolean).join(" ");

module.exports = alphabetPosition;
