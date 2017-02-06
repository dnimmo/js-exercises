function swapCharacter(char) {
  const rnaComplements = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }

  if (!rnaComplements[char]) throw new Error ('Invalid input')
  return rnaComplements[char]
}

const toRna = dnaStrand => (
  dnaStrand.split('')
    .map(x => swapCharacter(x))
      .join('')
)

function DnaTranscriber() {
  return { toRna }
}

module.exports = DnaTranscriber
