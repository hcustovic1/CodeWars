const digital_root = n => String(n).length === 1 ? n : digital_root(String(n).split("").map(Number).reduce((a,b) => a + b, 0))

module.exports = digital_root