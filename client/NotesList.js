const React = require('react')
const store = require('./store')

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

module.exports = NotesList
