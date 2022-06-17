import {FaTrash, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import NoteContext from '../context/NoteContext'

function Note({note}) {

    const {deleteNote, editNote} = useContext(NoteContext)

  return (
    <div className="note-container">
        <div className='title-description-container'>
            <h2 className="note-title">Title: {note.title}</h2>
            <h2 className="note-description">Description: {note.description}</h2>
        </div>
        <button 
        className='delete-edit-button'
        onClick={() => editNote(note)}>
            <FaEdit />
        </button>
        <button 
        className='delete-edit-button'
        onClick={() => deleteNote(note.id)}>
            <FaTrash />
        </button>
    </div>
  )
}
export default Note