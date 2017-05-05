const React = require('react')
const store = require('./store')

const NoteForm = (props) => {
  const input = store.getState().noteInput
  const handleChange = (event) => {
    store.dispatch({ type: 'INPUT_CHANGED', text: event.target.value })
  }

  const newNote = () => {
    store.dispatch({ type: 'NOTE_CREATED', text: input })
  }

  return (
    <div id="form-container">
      <input id="note-input" type="text" value={ input } onChange={ handleChange }/>
      <button id="submit-button" onClick={ newNote }>
        Make a Note</button>
    </div>
  )
}

module.exports = NoteForm
