const divisibleBy = (x, y) => x % y === 0
const divisibleByFour = x => divisibleBy(x, 4)
const divisibleByOneHundred = x => divisibleBy(x, 100)
const divisibleByFourHundred = x => divisibleBy(x, 400)

const isLeap = input => (
  divisibleByOneHundred(input)
  ? divisibleByFourHundred(input)
  : divisibleByFour(input)
)

module.exports = {
  isLeap
}
