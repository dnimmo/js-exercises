function swapCharacter(char) {
  const whitelist = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }

  if (!whitelist[char]) throw new Error ('Invalid input')
  return whitelist[char]
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
