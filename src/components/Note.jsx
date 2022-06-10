import {FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import NoteContext from '../context/NoteContext'

function Note({note}) {

    const {deleteNote} = useContext(NoteContext)

  return (
    <div className="note-container">
        <div className='title-description-container'>
            <h2 className="note-title">Title: {note.title}</h2>
            <h2 className="note-description">Description: {note.description}</h2>
        </div>
        <button 
        className=''
        onClick={() => deleteNote(note.id)}>
            <FaEdit/>
        </button>
    </div>
  )
}
export default Note