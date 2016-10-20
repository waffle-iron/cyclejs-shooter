const { div } = require('@cycle/dom')
const { test } = require('ava')
const mock = require('mock-require')

const state = {
  leftHiding: Symbol(),
  rightHiding: Symbol()
}

function arenaStub (leftHiding, rightHiding) { return {leftHiding, rightHiding} }
mock('./arena', arenaStub)

const uiFromState = require('./index')

test(t => {
  const expected = div(
    { style: { textAlign: 'center' } },
    [
      {
        leftHiding: state.leftHiding,
        rightHiding: state.rightHiding
      }
    ]
  )

  const actual = uiFromState(state)

  t.deepEqual(actual, expected)
})
