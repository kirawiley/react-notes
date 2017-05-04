const React = require('react')
const store = require('./store')

const NoteForm = (props) => {
  props = store.getState()
  return (
    <div id="form-container">
      <input type="text">
      <button>Make a Note</button>
    </div>
  )
}

module.exports = NoteForm
