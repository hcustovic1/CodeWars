const nbYear = (p0, percent, aug, p) => {
    let n = 0
    let current_population = p0
    while (current_population < p) {
      current_population += current_population * percent/100 + aug
      n += 1
    }
    
    return n
}

module.exports = nbYear