const Redux = require('redux')

let state = [
  'Babelify won\'t work without .babelrc file!',
'let = values that can change, const = values that cannot be reassigned',
 'falsy values = null, NaN, 0, empty string, false, undefined',
 'fetch returns a Promise'
]

function noteInput(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGED':
      console.log('change')
    case 'NOTE_CREATED':
      return state.concat(action.text)
    default: return state
  }
}

const store = Redux.createStore(noteInput, state)

module.exports = store
