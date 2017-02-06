function Year(year) {
  this.year = year
}

const divisibleBy = (x, y) => x % y === 0
const divisibleByFour = x => divisibleBy(x, 4)
const divisibleByOneHundred = x => divisibleBy(x, 100)
const divisibleByFourHundred = x => divisibleBy(x, 400)

Year.prototype.isLeap = () => (
  divisibleByOneHundred(this.year)
  ? divisibleByFourHundred(this.year)
  : divisibleByFour(this.year)
)

module.exports = Year
