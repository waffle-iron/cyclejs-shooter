const { div } = require('@cycle/dom')
const R = require('ramda')
const player = require('./player')

const curriedPlayer = R.curry(player)
const leftPlayer = curriedPlayer('left')
const rightPlayer = curriedPlayer('right')
const barrier = '='

function arena (leftHiding, rightHiding) {
  return div(
    {
      attrs: {tabindex: 0},
      style: {fontFamily: 'monospace'}
    },
    [
      leftPlayer(leftHiding),
      barrier,
      rightPlayer(rightHiding)
    ]
  )
}

module.exports = arena