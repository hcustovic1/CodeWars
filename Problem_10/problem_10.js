const maxSequence = arr => {
  let maxSubarraySum = 0
  let sum = 0
  arr.forEach(element => {
    sum = Math.max(sum + element, element)
    if (sum > maxSubarraySum) {
      maxSubarraySum = sum
    }
   })
  return maxSubarraySum
 }

module.exports = maxSequence;
