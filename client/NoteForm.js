const React = require('react')
const store = require('./store')

const NoteForm = (props) => {
  props = store.getState()
  let value = ''

  const handleChange = (event) => {
    if (value != '') {
      store.dispatch({ type: 'INPUT_CHANGED' })
    }
    value = event.target.value
  }

  const input = <input id="note-input" type="text" onChange={ handleChange }/>

  const newNote = () => {
    store.dispatch({ type: 'NOTE_CREATED', text: value })
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
