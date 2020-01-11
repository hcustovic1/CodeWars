const nbYear = (p0, percent, aug, p) => {
    let n = 0
    let currentPopulation = p0
    while (currentPopulation < p) {
      currentPopulation += currentPopulation * percent/100 + aug
      n += 1
    }
    
    return n
}

module.exports = nbYear