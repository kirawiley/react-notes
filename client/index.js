const Redux = require('redux')
const React = require('react')
const ReactDOM = require('react-dom')
const NotesList = require('./NotesList')
//const NoteForm = require('./NoteForm')
const store = require('./store')
const app = document.getElementById('container')

/*function App(props) {
  const { noteInput } = props
  return (
    <div>
      <NotesList/>
      <NoteForm/>
    </div>
  )
}*/

function render() {
  let current = store.getState()
  const elements = React.createElement(NotesList, current)
  ReactDOM.render(elements, app)
}

render()
store.subscribe(render)
