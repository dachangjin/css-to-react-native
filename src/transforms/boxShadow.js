const { parseShadow } = require('./util')

module.exports = tokenStream => {
  const { offset, radius, color } = parseShadow(tokenStream)
  return {
    $merge: {
      shadowOffset: offset,
      shadowRadius: radius,
      shadowColor: color,
      shadowOpacity: 1,
    },
  }
}
