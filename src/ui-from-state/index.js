const { div, span } = require('@cycle/dom')
const arena = require('./arena')
const { players } = require('../constants')

const gameStyle = {textAlign: 'center'}

const uiFromState = ({leftHiding, rightHiding, winner}) => {
  if (winner) {
    const winnerSide = winner === players.leftPlayer ? 'Left' : 'Right'
    return div(
      {style: gameStyle},
      [
        span(
          `${winnerSide} player won!`
        )
      ]
    )
  } else {
    return div(
      {style: gameStyle},
      [
        arena(leftHiding, rightHiding)
      ]
    )
  }
}

module.exports = uiFromState
