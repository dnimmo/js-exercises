const isShouting = message => message.toUpperCase() === message && message.toLowerCase() !== message
const isQuestion = message => !isShouting(message) && message.split('')[message.length - 1] === '?'
const isEmpty = message => message.trim().length === 0

const hey = message => {
  let response = 'Whatever.'
  if (isEmpty(message)) response = 'Fine. Be that way!'
  if (isShouting(message)) response = 'Whoa, chill out!'
  if (isQuestion(message)) response = 'Sure.'

  return response
}

function Bob() {
  return { hey }
}

module.exports = Bob
