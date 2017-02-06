const compute = (strandA, strandB, remaining = strandA.length, difference = 0) => {
  if (strandA.length !== strandB.length) throw new Error('DNA strands must be of equal length.')
  if (remaining === 0) return difference

  const newRemaining = remaining - 1
  const letterA = strandA.split('')[newRemaining]
  const letterB = strandB.split('')[newRemaining]
  const newDifference = (
    letterA === letterB
      ? difference
      : difference + 1
  )

  return compute(strandA, strandB, newRemaining, newDifference)
}

function Hamming() {
  return { compute }
}

module.exports = Hamming
