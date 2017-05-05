const Redux = require('redux')

let initialState = [
  'Babelify won\'t work without .babelrc file!',
'let = values that can change, const = values that cannot be reassigned',
 'falsy values = null, NaN, 0, empty string, false, undefined',
 'fetch returns a Promise'
]

function notes(state = initialState, action) {
  switch (action.type) {
    case 'NOTE_CREATED':
      return state.concat(action.text)
    default: return state
  }
}

function noteInput(state = '', action) {
  switch (action.type) {
    case 'INPUT_CHANGED':
      return action.text
    case 'NOTE_CREATED':
      return ''
    default: return state
  }
}

const reducer = Redux.combineReducers({ notes, noteInput })

const store = Redux.createStore(reducer)

module.exports = store
