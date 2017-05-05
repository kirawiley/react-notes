const React = require('react')
const store = require('./store')

const NotesList = (props) => {
  props = store.getState().notes
  const notesList = props.map((note, i) => {
    return <li className="note" key={ i }> { note } </li>
  })
  return (
    <div id="list-container">
      <ul id="list">
        <h2 id="title">My Notes:</h2>
        { notesList }
      </ul>
    </div>
  )
}

module.exports = NotesList
