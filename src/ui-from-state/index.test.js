const { div, span } = require('@cycle/dom')
const { test } = require('ava')
const mock = require('mock-require')

const playingState = {
  leftHiding: Symbol(),
  rightHiding: Symbol(),
  winner: null
}

const winningState = {
  leftHiding: Symbol(),
  rightHiding: Symbol(),
  winner: 'LEFT_PLAYER'
}

function arenaStub (leftHiding, rightHiding) {
  return {leftHiding, rightHiding}
}
mock('./arena', arenaStub)

const uiFromState = require('./index')

test('playing state', t => {
  const expected = div(
    { style: { textAlign: 'center' } },
    [
      {
        leftHiding: playingState.leftHiding,
        rightHiding: playingState.rightHiding
      }
    ]
  )

  const actual = uiFromState(playingState)

  t.deepEqual(actual, expected)
})

test('winning state', t => {
  const expected = div(
    { style: { textAlign: 'center' } },
    [
      span(
        'Left player won!'
      )
    ]
  )

  const actual = uiFromState(winningState)

  t.deepEqual(actual, expected)
})
