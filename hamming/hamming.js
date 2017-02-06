function findDifferenceCount(x, y) {
  const strandA = x.split('')
  const strandB = y.split('')

  return strandA.filter((current, index) => current !== strandB[index]).length
}

const compute = (x, y) => {
  if (x.length !== y.length) throw new Error ('DNA strands must be of equal length.')

  return findDifferenceCount(x, y)
}

function Hamming() {
  return { compute }
}

module.exports = Hamming
