const Redux = require('redux')
const React = require('react')
const ReactDOM = require('react-dom')
const app = document.getElementById('container')

let state = ['Babelify won\'t work without .babelrc file!',
'let = values that can change, const = values that cannot be reassigned',
 'falsy values = null, NaN, 0, empty string, false, undefined',
 'fetch returns a Promise']

function reducer(state, action) {
  switch (action.type) {
    case 'NOTE_ADDED':
      return state.concat(action.text)
    default: return state
  }
}

const store = Redux.createStore(reducer, state)

const NotesList = (props) => {
  props = store.getState()
  const notes = props.map((note) => {
    return <li className="note"> {note} </li>
  })
  return (
    <div id="list-container">
      <ul id="list">
        <h2 id="title">My Notes:</h2>
        { notes }
      </ul>
    </div>
  )
}

function render() {
  let current = store.getState()
  const elements = React.createElement(NotesList, current)
  ReactDOM.render(elements, app)
}

render()
store.subscribe(render)
