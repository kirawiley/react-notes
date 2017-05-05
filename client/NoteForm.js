const React = require('react')
const store = require('./store')

const NoteForm = (props) => {
  props = store.getState()
  const input = <input type="text" />
  const newNote = () => {
    console.log(input.value)
    store.dispatch({ type: 'NOTE_CREATED', text: input.value })
  }
  return (
    <div id="form-container">
      { input }
      <button id="submit-button" onClick={ newNote }>
        Make a Note</button>
    </div>
  )
}

module.exports = NoteForm
